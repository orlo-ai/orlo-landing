'use client';

/**
 * Product Hunt Launch Banner
 *
 * 臨時性 Section，用於 Product Hunt 發佈期間
 *
 * 建議處理時機：
 * - Launch Day 後 1-2 週：考慮移除或往下移動到 Social Proof 之後
 * - Launch Day 後 1 個月：建議完全移除
 *
 * 若要移除：
 * 1. 刪除此檔案
 * 2. 從 src/app/page.tsx 移除 import 和 <ProductHuntBanner />
 */
export default function ProductHuntBanner() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/20 via-white to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">

          {/* Title Layer - Subtle announcement */}
          <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Launched on Product Hunt
          </p>

          {/* Visual Layer - Badge */}
          <a
            href="https://www.producthunt.com/products/orlo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-orlo"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'product_hunt_badge_click', {
                  event_category: 'social_proof',
                  event_label: 'product_hunt_banner'
                });
              }
            }}
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1020428&theme=light&t=1759419262698"
              alt="Featured on Product Hunt"
              className="h-11 sm:h-12 w-auto transition-transform group-hover:scale-105"
              width={250}
              height={54}
            />
          </a>

          {/* Value Layer - Invitation */}
          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            Join our community of professionals finding their perfect rhythm
          </p>

        </div>
      </div>
    </section>
  );
}
