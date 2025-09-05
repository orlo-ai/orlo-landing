import { Metadata } from 'next';
import { Layout } from '@/components/layout';
import { ButtonLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = {
  title: 'Install Orlo on Your Device | Android, iOS & Desktop Guide',
  description: 'Learn how to install Orlo as a native app on Android, iOS, and desktop browsers. Get the full app experience.',
  keywords: ['install Orlo', 'PWA installation', 'mobile app', 'desktop app'],
  openGraph: {
    title: 'Install Orlo on Your Device | Complete Installation Guide',
    description: 'Install Orlo as a native app on any device. Works like a real app with offline support.',
    images: ['https://orlo.cc/img/multi-device-showcase.png'],
  },
};

export default function InstallGuidePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Install Orlo on Your Device
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Simple installation for all platforms
            </p>
          </div>
        </div>
        
        {/* Installation Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          
          {/* Android Section */}
          <div id="android" className="mb-12">
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <i className="fab fa-android text-gray-700 text-lg"></i>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Android</h2>
                  <p className="text-sm text-gray-500">Install for offline access and faster loading</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600">
                  <strong>Tap &ldquo;Add to Home screen&rdquo;</strong> when prompted by Chrome
                </p>
              </div>
              
              <div className="w-full mb-6">
                <img 
                  src="/img/orlo-Install-android.png" 
                  alt="Android installation steps" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="text-center">
                <ButtonLink
                  href="https://my.orlo.cc"
                  variant="primary"
                  size="lg"
                  external
                >
                  Go to Orlo App →
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* iOS Section */}
          <div id="ios" className="mb-12">
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <i className="fab fa-apple text-gray-700 text-lg"></i>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">iOS</h2>
                  <p className="text-sm text-gray-500">Install for offline access and faster loading</p>
                </div>
              </div>
              
              <ol className="text-gray-600 space-y-2 mb-4">
                <li><strong>1. Tap the Share button</strong> <i className="fas fa-arrow-up-from-bracket text-sm"></i> at the bottom of Safari</li>
                <li><strong>2. Scroll down and tap &ldquo;Add to Home Screen&rdquo;</strong></li>
                <li><strong>3. Tap &ldquo;Add&rdquo; to install</strong></li>
              </ol>
              
              <div className="w-full mb-6">
                <img 
                  src="/img/orlo-Install-ios.png" 
                  alt="iOS installation steps showing Safari share menu with Add to Home Screen option" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="text-center">
                <ButtonLink
                  href="https://my.orlo.cc"
                  variant="primary"
                  size="lg"
                  external
                >
                  Go to Orlo App →
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Desktop Section */}
          <div id="desktop" className="mb-12">
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-desktop text-gray-700 text-lg"></i>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Desktop</h2>
                  <p className="text-sm text-gray-500">Install for offline access and faster loading</p>
                </div>
              </div>
              
              <div className="text-gray-600 mb-4">
                <p><strong>Click the install icon</strong> in your browser&rsquo;s address bar</p>
              </div>
              
              <div className="w-full mb-6">
                <img 
                  src="/img/orlo-Install-desktop.png" 
                  alt="Desktop installation showing browser install icon in address bar" 
                  className="w-full h-auto border border-gray-200"
                />
              </div>
              
              <div className="text-center">
                <ButtonLink
                  href="https://my.orlo.cc"
                  variant="primary"
                  size="lg"
                  external
                >
                  Go to Orlo App →
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              Need help with installation?
            </p>
            <ButtonLink
              href="mailto:support@orlo.cc?subject=Installation Help"
              variant="secondary"
              size="md"
            >
              Contact Support
            </ButtonLink>
          </div>

        </div>
      </div>
    </Layout>
  );
}