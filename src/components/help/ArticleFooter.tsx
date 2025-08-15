import React from 'react';
import Link from 'next/link';

interface ArticleFooterProps {
  articleId: string;
}

export default function ArticleFooter({ articleId }: ArticleFooterProps) {

  return (
    <footer className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="max-w-3xl mx-auto text-center">

        {/* Additional Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-question-circle text-blue-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Check out more FAQs or contact our support team
            </p>
            <Link
              href="/help/troubleshooting/common-issues"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View FAQs →
            </Link>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-comments text-purple-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Need instant help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Chat with our support team in real-time
            </p>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              Start chat →
            </button>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-lightbulb text-green-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Suggest improvements?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Tell us how to make this article better
            </p>
            <a
              href="mailto:support@orlo.cc?subject=Article Improvement Suggestion"
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              Send feedback →
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated {new Date().toLocaleDateString('en-US')} |
            <Link href="/help" className="text-blue-600 hover:text-blue-700 ml-2">
              Back to Help Center
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}