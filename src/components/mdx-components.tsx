import type { MDXComponents } from 'mdx/types';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

// MDX 組件配置
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定義標題樣式（帶動畫）
    h1: ({ children }) => (
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-6"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }) => (
      <motion.h2 
        className="text-3xl font-semibold text-gray-800 mb-4"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }) => (
      <motion.h3 
        className="text-2xl font-medium text-gray-700 mb-3"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {children}
      </motion.h3>
    ),
    
    // 自定義段落樣式
    p: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    
    // 自定義列表樣式
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2">
        {children}
      </ol>
    ),
    
    // 自定義連結樣式
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    
    // 自定義代碼樣式
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    
    // 自定義代碼塊樣式
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    
    // 自定義引用樣式
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
        {children}
      </blockquote>
    ),
    
    ...components,
  };
}