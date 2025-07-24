import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Orlo',
  description: 'Orlo Privacy Policy - How we protect and handle your personal information',
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: January 2025</p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                This is the Privacy Policy of the Orlo website and any affiliated
                software and mobile applications (collectively, the &quot;Site&quot;), operated
                by Orlo (together with our affiliates and subsidiaries, &quot;Orlo&quot;, &quot;we&quot;,
                &quot;us&quot;, &quot;our&quot; and terms of similar meaning) and our related products and
                services (collectively, the &quot;Service&quot; or &quot;Services&quot;). It describes the
                information that we collect from you as part of the normal operation
                of our Site, and how we use and disclose this information.
              </p>

              <p className="text-gray-700 leading-relaxed">
                By accepting the Privacy Policy in the registration process or by
                visiting and using the Site or the Services, you expressly consent to
                our collection, use and disclosure of your personal information in
                accordance with this Privacy Policy. This Privacy Policy is
                incorporated into and subject to our Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1. The Information We Collect And Store
              </h2>

              <p className="text-gray-700 leading-relaxed">
                <strong>Information You Provide.</strong> When you register an
                Account, we may collect personal information, such as your name, email
                address, and payment information. The Site allows you to link your
                Third Party Accounts. We may use OAuth, if available, to access Third
                Party Accounts in order to limit our collection of your passwords. For
                a Third Party Account that does not support OAuth, we will ask for
                your login credentials for such Third Party Account. We may access and
                collect information that your privacy settings on the Third Party
                Account permit us to access, subject to the terms of this Privacy
                Policy.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Log Data.</strong> When you use the Service, we may
                automatically record information from your Device, its software, and
                your activity using the Services. This may include the Device&apos;s
                Internet Protocol (&quot;IP&quot;) address, browser type, the web page visited
                before you came to our website, locale preferences, identification
                numbers associated with your Devices, date and time stamps associated
                with transactions, system configuration information, and other
                interactions with the Service.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Cookies and Tracking Technologies.</strong> We use cookies and
                similar technologies to collect information, provide a better user
                experience, and improve our Services. You can instruct your browser to
                stop accepting cookies, but this may limit your ability to use all
                aspects of the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2. How We Use Personal Information
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Personal Information is or may be used: (i) to provide and improve our
                Service, (ii) to administer your use of the Service, (iii) to better
                understand your needs and interests, (iv) to personalize and improve
                your experience, including providing AI-powered suggestions, and (v)
                to provide or offer software updates and product announcements.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Analytics.</strong> We collect some information using logging
                and cookies, which can sometimes be correlated with Personal
                Information. We use this information to monitor and analyze use of the
                Service, for the Service&apos;s technical administration, and to increase
                our Service&apos;s functionality and user-friendliness.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                3. Information Sharing and Disclosure
              </h2>

              <p className="text-gray-700 leading-relaxed">
                <strong>Your Use.</strong> We are designed as a personal time
                management tool. Your information is private to your Account.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Service Providers.</strong> We may use certain trusted third
                party companies and individuals to help us provide, analyze, and
                improve the Service. These third parties may have access to your
                information only for purposes of performing these tasks on our behalf
                and under obligations similar to those in this Privacy Policy.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Third Party Applications.</strong> We may share your
                information with a third party application with your consent, for
                example when you choose to access our Services through such an
                application. We are not responsible for what those parties do with
                your information.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Compliance with Laws.</strong> We may disclose information
                when we have a good faith belief that disclosure is reasonably
                necessary to (a) comply with a law, regulation or compulsory legal
                request; (b) protect the safety of any person from death or serious
                bodily injury; (c) prevent fraud or abuse of Orlo or its users; or (d)
                to protect Orlo&apos;s property rights.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Business Transfers.</strong> If we are involved in a merger,
                acquisition, or sale of all or a portion of our assets, your
                information may be transferred as part of that transaction.
              </p>

              <p className="text-gray-700 leading-relaxed">
                <strong>Non-Private or Non-Personal Information.</strong> We may
                disclose your non-private, aggregated, or otherwise non-personal
                information, such as usage statistics of our Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                4. Changing or Deleting Your Information
              </h2>

              <p className="text-gray-700 leading-relaxed">
                You can access and modify the Personal Information associated with
                your Account by contacting us at{' '}
                <a
                  href="mailto:hello@orlo.cc"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  hello@orlo.cc
                </a>
                . If you want us to delete your Personal Information and your Account,
                please contact us with your request. We will take steps to delete your
                information as soon as is practicable, but some information may remain
                in archived/backup copies for our records or as otherwise required by
                law.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                5. Data Retention
              </h2>

              <p className="text-gray-700 leading-relaxed">
                We will retain your information for as long as your Account is active
                or as needed to provide you the Services. We may retain and use your
                information as necessary to comply with our legal obligations, resolve
                disputes, and enforce our agreements.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                6. Security
              </h2>

              <p className="text-gray-700 leading-relaxed">
                We follow generally accepted standards to protect the information
                submitted to us, both during transmission and once we receive it. No
                method of electronic transmission or storage is 100% secure, however.
                Therefore, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                7. Our Policy Toward Children
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our Services are not directed to persons under 16. We do not knowingly
                collect personally identifiable information from children under 16. If
                we become aware that a child under 16 has provided us with Personal
                Information, we will take steps to delete such information from our
                files.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                8. Contacting Us
              </h2>

              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us
                at{' '}
                <a
                  href="mailto:hello@orlo.cc"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  hello@orlo.cc
                </a>
                .
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                9. Changes to our Privacy Policy
              </h2>

              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy may change from time to time, and the most current
                version will be posted on our Site. By continuing to use the Service
                after those changes become effective, you agree to be bound by the
                revised Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}