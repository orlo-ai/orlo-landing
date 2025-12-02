'use client';

import {
  CheckIcon,
  ClockIcon,
  BoltIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { PlanComparisonTable } from '@/types/content';

interface PlanComparisonSectionProps {
  comparison: PlanComparisonTable;
}

export default function PlanComparisonSection({ comparison }: PlanComparisonSectionProps) {
  // 圖示映射邏輯
  const getIconComponent = (iconType?: string) => {
    switch (iconType) {
      case 'check': return CheckIcon;
      case 'hourglass': return ClockIcon;
      case 'bolt': return BoltIcon;
      case 'x': return XMarkIcon;
      default: return null;
    }
  };

  const getIconColor = (iconType?: string) => {
    switch (iconType) {
      case 'check': return 'text-green-600';
      case 'hourglass': return 'text-amber-600';
      case 'bolt': return 'text-amber-600';
      case 'x': return 'text-slate-400';
      default: return 'text-slate-600';
    }
  };

  return (
    <section
      aria-labelledby="comparison-title"
      className="hidden lg:block py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* 標題區 */}
        <div className="text-center mb-12">
          <h2 id="comparison-title" className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            {comparison.title}
          </h2>
          {comparison.description && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{comparison.description}</p>
          )}
        </div>

        {/* 對比表卡片 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
          {/* 表頭 */}
          <div
            role="table"
            aria-label="Plan comparison table"
          >
            {/* 表頭行 - Sticky */}
            <div role="row" className="grid grid-cols-[2fr_1fr_1fr] sticky top-16 z-20 border-b-2 border-slate-200 bg-slate-50 rounded-t-2xl">
              <div role="columnheader" className="px-6 py-4 text-left font-semibold text-slate-900">
                Features
              </div>
              {comparison.plans.map((plan) => (
                <div
                  key={plan.id}
                  role="columnheader"
                  className="px-6 py-4 text-center font-semibold text-slate-900"
                >
                  {plan.name}
                </div>
              ))}
            </div>

            {/* 類別和功能 */}
            {comparison.categories.map((category, categoryIndex) => (
              <div key={category.id} role="rowgroup">
                {/* 類別標題行 */}
                <div role="row" className="grid grid-cols-[2fr_1fr_1fr] bg-slate-50 border-t-2 border-slate-200">
                  <div role="cell" className="col-span-3 px-6 py-4">
                    <h3 className="text-base font-semibold text-slate-900">{category.name}</h3>
                    {category.description && (
                      <p className="text-sm text-slate-500 mt-1">{category.description}</p>
                    )}
                  </div>
                </div>

                {/* 功能列 */}
                {category.features.map((feature, featureIndex) => {
                  const isLastCategory = categoryIndex === comparison.categories.length - 1;
                  const isLastFeature = featureIndex === category.features.length - 1;
                  const borderBottom = isLastCategory && isLastFeature ? 'border-b border-slate-200' : '';

                  return (
                  <div
                    key={feature.id}
                    role="row"
                    className={`grid grid-cols-[2fr_1fr_1fr] ${borderBottom}`}
                  >
                    {/* 左欄 - 功能名稱 */}
                    <div role="cell" className="px-6 py-4 border-t border-slate-200">
                      <div className="font-medium text-slate-900">{feature.name}</div>
                      {feature.description && (
                        <div className="text-sm text-slate-500 mt-1">{feature.description}</div>
                      )}
                    </div>

                    {/* 右兩欄 - 方案值 */}
                    {feature.values.map((value) => {
                      const IconComponent = getIconComponent(value.icon);
                      const iconColor = getIconColor(value.icon);

                      return (
                        <div
                          key={value.planId}
                          role="cell"
                          className="px-6 py-4 border-t border-slate-200"
                        >
                          <div className="flex items-center justify-center gap-2">
                            {IconComponent && (
                              <IconComponent
                                className={`w-5 h-5 flex-shrink-0 ${iconColor}`}
                                aria-hidden="true"
                              />
                            )}
                            <span className="text-slate-700 text-center">{value.display}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
