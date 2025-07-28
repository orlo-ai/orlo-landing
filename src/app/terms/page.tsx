import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Orlo',
  description: 'Orlo Terms of Service - Terms and conditions for using our AI time management service',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition">
              <img src="/img/orlo-logo-512.png" alt="Orlo" className="h-10 w-auto" />
            </Link>
          </div>
          <nav>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-500 mb-8">Effective Date: January 2025</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the Orlo time management application and related
                services (the "Service"), you agree to comply with and be bound by
                these Terms and Conditions ("Terms"). If you do not agree to these
                Terms, please do not use our Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 16 years old to use our Service. By using the
                Service, you represent and warrant that you meet this age requirement.
                If you are under 18, you may use the Service only with the involvement
                of a parent or guardian.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed">
                When you create an account with us, you must provide accurate and
                complete information. You are responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your device. You agree to accept responsibility for all
                activities that occur under your account.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Data and Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                You retain full ownership of your time management data, tasks, and
                personal information that you submit to the Service ("User Content").
                By using the Service, you grant us a limited, non-exclusive license to
                use, store, and process your User Content solely for the purposes of
                providing and improving the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to protecting your privacy. Please review our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Privacy Policy
                </Link>{' '}
                to understand how we collect, use, and protect your information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Service Nature and AI Features</h2>
              <p className="text-gray-700 leading-relaxed">
                Orlo is a productivity and time management tool designed to help you
                organize your schedule and tasks. Our Service includes AI-powered
                features that provide personalized suggestions and recommendations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> AI recommendations are suggestions only.
                You retain full control over your schedule, tasks, and decisions. We
                recommend that you always verify important appointments and deadlines
                independently.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Third-Party Integrations</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Service may integrate with third-party services such as Google
                Calendar, Apple Calendar, and other productivity tools. We are not
                responsible for the functionality, availability, or data handling
                practices of these external services. Integration failures or data
                synchronization issues with third-party services are not our
                responsibility.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Upload malicious code or attempt to harm our systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt unauthorized access to other accounts or our systems</li>
                <li>Use the Service for any illegal or harmful purposes</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service, including its design, features, and functionality
                (excluding your User Content), is the exclusive property of Orlo's
                service provider. The Service is protected by copyright, trademark,
                and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You retain all rights to your User Content. We do not claim ownership
                of your personal data, tasks, or scheduling information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Service Availability and Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to provide reliable service, but we cannot guarantee
                uninterrupted availability. The Service may experience downtime for
                maintenance, updates, or due to factors beyond our control.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Limitation of Liability:</strong> We are not liable for missed
                appointments, scheduling conflicts, or any consequences resulting from
                your reliance on the Service. You are responsible for managing your
                own commitments and verifying important information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Account Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account if you violate these Terms.
                You may also terminate your account at any time. Upon termination, you
                can export your data, and we will delete your personal information in
                accordance with our Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                provide at least 30 days' notice of material changes by email or
                through the Service. Your continued use of the Service after changes
                take effect constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of Taiwan. Any disputes arising
                from these Terms or your use of the Service will be resolved in the
                courts of Taiwan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For minor disputes, we encourage you to contact us first at{' '}
                <a
                  href="mailto:hello@orlo.cc"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  hello@orlo.cc
                </a>{' '}
                to resolve the matter informally.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service is provided "as is" without warranties of any kind. We
                disclaim all warranties, express or implied, including warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  Email:{' '}
                  <a
                    href="mailto:hello@orlo.cc"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    hello@orlo.cc
                  </a>
                </li>
                <li>Service Provider: Orlo Service Team</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}