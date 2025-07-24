// 獨立的 Google Analytics 腳本（用於靜態 HTML 頁面）
(function() {
  // 從環境變數或預設值取得 GA ID
  const GA_ID = 'G-J6HLEC8EJZ';
  
  // 僅在生產環境載入
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Google Analytics disabled in development');
    return;
  }

  // 載入 Google Analytics 腳本
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // 初始化 Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // 設定全域 analytics 物件
  window.orloAnalytics = {
    trackEvent: function(event, category, label, value) {
      if (window.gtag) {
        gtag('event', event, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    },
    
    trackPageView: function(path) {
      if (window.gtag) {
        gtag('config', GA_ID, {
          page_path: path || window.location.pathname,
        });
      }
    }
  };

  console.log('Standalone Google Analytics loaded');
})();