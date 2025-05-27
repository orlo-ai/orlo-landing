// Google Analytics (GA4) Configuration
(function() {
    // GA4 Measurement ID
    const GA_MEASUREMENT_ID = 'G-J6HLEC8EJZ';
    
    // Create and load the Google Analytics script
    function loadGoogleAnalytics() {
        // Create the gtag script tag
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        
        // Insert the script into the head
        document.head.appendChild(gtagScript);
        
        // Initialize dataLayer and gtag function
        window.dataLayer = window.dataLayer || [];
        function gtag() { 
            dataLayer.push(arguments); 
        }
        
        // Make gtag available globally
        window.gtag = gtag;
        
        // Configure Google Analytics
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
        
        console.log('Google Analytics loaded successfully');
    }
    
    // Custom event tracking functions
    window.orloAnalytics = {
        // Track page views (automatically called)
        trackPageView: function(page_title, page_location) {
            if (window.gtag) {
                gtag('event', 'page_view', {
                    page_title: page_title || document.title,
                    page_location: page_location || window.location.href
                });
            }
        },
        
        // Track custom events
        trackEvent: function(action, category, label, value) {
            if (window.gtag) {
                gtag('event', action, {
                    event_category: category,
                    event_label: label,
                    value: value
                });
            }
        },
        
        // Track button clicks
        trackButtonClick: function(button_name, section) {
            this.trackEvent('click', 'button', `${section}_${button_name}`);
        },
        
        // Track form submissions
        trackFormSubmit: function(form_name) {
            this.trackEvent('submit', 'form', form_name);
        },
        
        // Track external link clicks
        trackExternalLink: function(url) {
            this.trackEvent('click', 'external_link', url);
        }
    };
    
    // Load Google Analytics when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadGoogleAnalytics);
    } else {
        loadGoogleAnalytics();
    }
    
    // Optional: Add click tracking for common elements
    document.addEventListener('DOMContentLoaded', function() {
        // Track CTA button clicks
        const ctaButtons = document.querySelectorAll('a[href*="my.orlo.cc"]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                window.orloAnalytics.trackButtonClick('get_started', 'cta');
            });
        });
        
        // Track external links
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="orlo.cc"])');
        externalLinks.forEach(link => {
            link.addEventListener('click', function() {
                window.orloAnalytics.trackExternalLink(this.href);
            });
        });
        
        // Track social media clicks
        const socialLinks = document.querySelectorAll('a[href*="twitter.com"], a[href*="linkedin.com"], a[href*="instagram.com"]');
        socialLinks.forEach(link => {
            link.addEventListener('click', function() {
                window.orloAnalytics.trackButtonClick('social_media', 'footer');
            });
        });
    });
})();