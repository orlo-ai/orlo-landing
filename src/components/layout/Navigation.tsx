'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FeatureIcon, IconName } from '@/components/ui/FeatureIcon';

// Feature flag: set to true when feature pages assets are ready
const FEATURES_ENABLED = false;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Demo', href: '/#demo' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const featureItems: { name: string; href: string; icon: IconName }[] = [
    { name: 'All Features', href: '/features', icon: 'sparkles' },
    { name: 'Daily Rhythm', href: '/features/daily-rhythm', icon: 'sunrise' },
    { name: 'Quick Capture', href: '/features/capture', icon: 'zap' },
    { name: 'AI Planning', href: '/features/ai-planning', icon: 'bot' },
    { name: 'Task Intelligence', href: '/features/task-intelligence', icon: 'sparkles' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/orlo-logo.png"
                alt="Orlo Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Right Side Navigation Group */}
          <div className="hidden md:flex items-center">
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-100 mr-6">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 hover:bg-white/80 font-medium px-4 py-2 rounded-full transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Features Dropdown */}
                {FEATURES_ENABLED && (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsFeaturesOpen(true)}
                    onMouseLeave={() => setIsFeaturesOpen(false)}
                  >
                    <button className="text-gray-600 hover:text-gray-900 hover:bg-white/80 font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1">
                      Features
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isFeaturesOpen && (
                      <div className="absolute top-full left-0 -mt-1 pt-2 w-56">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-fade-in-down">
                          {featureItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                            >
                              <FeatureIcon name={item.icon} className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <ButtonLink
                href="https://my.orlo.cc/login"
                variant="ghost"
                size="md"
              >
                Login
              </ButtonLink>
              <ButtonLink
                href="https://my.orlo.cc"
                variant="primary"
                size="md"
                external
                trackingEvent={{
                  event: 'get_started_click',
                  category: 'cta',
                  label: 'navigation_desktop'
                }}
              >
                Get Started
              </ButtonLink>
            </div>
          </div>

          {/* Mobile Navigation - Get Started Button + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Get Started Button */}
            <ButtonLink
              href="https://my.orlo.cc"
              variant="primary"
              size="sm"
              external
              trackingEvent={{
                event: 'get_started_click',
                category: 'cta',
                label: 'navigation_mobile'
              }}
            >
              Get Started
            </ButtonLink>
            
            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Features Section */}
              {FEATURES_ENABLED && (
                <div className="pt-2">
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 font-medium"
                    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  >
                    <span>Features</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isFeaturesOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {featureItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-200"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsFeaturesOpen(false);
                          }}
                        >
                          <FeatureIcon name={item.icon} className="w-5 h-5" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <ButtonLink
                  href="https://my.orlo.cc/login"
                  variant="ghost"
                  size="md"
                  fullWidth
                  className="justify-center mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  external
                >
                  Login
                </ButtonLink>
                <ButtonLink
                  href="https://my.orlo.cc"
                  variant="primary"
                  size="md"
                  radius="full"
                  fullWidth
                  className="justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  external
                  trackingEvent={{
                    event: 'get_started_click',
                    category: 'cta',
                    label: 'navigation_mobile_menu'
                  }}
                >
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}