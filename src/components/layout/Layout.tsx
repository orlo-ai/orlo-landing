import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
  className?: string;
}

export default function Layout({
  children,
  showNavigation = true,
  showFooter = true,
  className = '',
}: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {showNavigation && <Navigation />}
      
      <main className={`flex-1 ${showNavigation ? 'pt-16' : ''}`}>
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
}