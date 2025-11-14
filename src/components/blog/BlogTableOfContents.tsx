'use client';

import { useEffect, useState, useMemo } from 'react';
import { TableOfContentsItem } from '@/types/blog';

interface BlogTableOfContentsProps {
  items: TableOfContentsItem[];
}

export function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // 使用 useMemo 穩定 items，避免不必要的 observer 重建
  const itemIds = useMemo(() => items.map(item => item.id), [items]);

  useEffect(() => {
    // 使用 Intersection Observer 追蹤當前可見的標題
    const observer = new IntersectionObserver(
      (entries) => {
        // 收集所有正在 intersecting 的標題
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          // 選擇最上方的可見標題
          const topEntry = intersectingEntries.reduce((top, entry) => {
            return entry.boundingClientRect.top < top.boundingClientRect.top ? entry : top;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.5,
      }
    );

    // 觀察所有標題元素
    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [itemIds]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header 高度偏移
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className="group hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto
                 transition-transform duration-300 scale-95 hover:scale-100 origin-left"
      aria-label="Table of Contents"
    >
      <div className="mb-3 text-xs font-medium text-gray-300 group-hover:text-gray-500 transition-colors duration-300">
        On This Page
      </div>
      <ol className="space-y-2 text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;

          return (
            <li key={item.id} className={isH3 ? 'pl-4' : ''}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`
                  block py-1 border-l-2 pl-3 transition-all duration-300
                  ${isActive
                    ? 'border-blue-300 text-blue-400 font-medium group-hover:border-blue-500 group-hover:text-blue-600'
                    : 'border-gray-50 text-gray-200 group-hover:border-gray-200 group-hover:text-gray-600 hover:!border-gray-300 hover:!text-gray-700'
                  }
                  ${isH3 ? 'text-xs' : 'text-sm'}
                `}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
