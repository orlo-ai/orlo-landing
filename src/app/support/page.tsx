import { Metadata } from 'next';
import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Support - Orlo | Get Help & Contact Us',
  description: 'Need help with Orlo? Contact our support team or check our frequently asked questions.',
  keywords: ['Orlo support', 'help', 'contact', 'customer service', 'FAQ'],
  openGraph: {
    title: 'Support - Orlo | We\'re Here to Help',
    description: 'Get support for your AI time management assistant. We\'re here to help you succeed.',
    images: ['https://orlo.cc/img/orlo-support.png'],
  },
};

export default function SupportPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              We&rsquo;re Here to Help
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have questions? We&rsquo;re here to help you get the most out of Orlo.
            </p>
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-md mx-auto mb-12">
            {/* Email Support */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Email Support
              </h3>
              <p className="text-gray-600 mb-6">
                Send us a detailed description of your issue and we&rsquo;ll respond within 24 hours.
              </p>
              <a
                href="mailto:support@orlo.cc"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                support@orlo.cc
              </a>
            </div>
          </div>

          {/* Quick FAQ */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  How do I get started with Orlo?
                </h3>
                <p className="text-gray-600">
                  Visit <a href="https://my.orlo.cc" className="text-blue-600 hover:text-blue-700">my.orlo.cc</a> to create an account and set up your first TimeBox to get started.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Which calendars does Orlo support?
                </h3>
                <p className="text-gray-600">
                  We're working on Google Calendar integration to provide seamless two-way sync.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  How do I cancel my subscription?
                </h3>
                <p className="text-gray-600">
                  You can cancel your subscription at any time in the settings page. We don&rsquo;t charge any cancellation fees.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Your data is protected with enterprise-grade encryption. We follow strict privacy policies and never share your personal information with third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can&rsquo;t find what you&rsquo;re looking for?
            </p>
            <a
              href="mailto:support@orlo.cc?subject=Support Request"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our support team directly
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}