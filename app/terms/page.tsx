import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - SoFlo Wheelie Life Games',
  description: 'Read our terms of service to understand the rules and guidelines for using SoFlo Wheelie Life and playing our free motorcycle games.',
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/terms',
  },
};

export default function TermsPage() {
  const lastUpdated = 'October 29, 2025';

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8 text-gray-300">
            <p>
              Welcome to SoFlo Wheelie Life. By accessing and using soflo-wheelie-life.com (the &quot;Website&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Website.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. We reserve the right to modify these Terms at any time. Continued use of the Website after changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">2. Use of Website</h2>

              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">License to Use</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access and use the Website for personal, non-commercial purposes. This license does not permit you to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Copy, modify, or distribute Website content without permission</li>
                <li>Use automated systems to access the Website</li>
                <li>Attempt to interfere with Website functionality</li>
                <li>Engage in any unlawful or prohibited activities</li>
                <li>Impersonate others or misrepresent your affiliation</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-[#FF00FF]">User Conduct</h3>
              <p>You agree to use the Website responsibly and not to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Distribute malware or harmful code</li>
                <li>Spam or harass other users</li>
                <li>Collect personal information without consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">3. Intellectual Property</h2>
              <p>
                All content on the Website, including text, graphics, logos, images, and software, is the property of SoFlo Wheelie Life or its licensors and is protected by intellectual property laws. Embedded games are the property of their respective owners.
              </p>
              <p>
                You may not use, copy, or distribute any Website content without our express written permission, except as necessary to use the Website as intended.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">4. Third-Party Content</h2>
              <p>
                The Website contains embedded games and links to third-party websites. We do not control third-party content and are not responsible for its accuracy, legality, or safety. Use of third-party content is at your own risk and subject to their terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">5. Disclaimer of Warranties</h2>
              <p>
                THE WEBSITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The Website will be uninterrupted or error-free</li>
                <li>Games will function on all devices or browsers</li>
                <li>The Website is free from viruses or harmful components</li>
                <li>Information on the Website is accurate or complete</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">6. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOFLO WHEELIE LIFE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE WEBSITE, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">7. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless SoFlo Wheelie Life and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Website or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">8. Advertisements</h2>
              <p>
                The Website displays advertisements through Google AdSense and other advertising services. We are not responsible for the content of advertisements or the practices of advertisers. Clicking on advertisements is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Website at any time, without notice, for any reason, including violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">10. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the United States. Any disputes shall be resolved in the courts of appropriate jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">11. Contact Information</h2>
              <p>
                If you have questions about these Terms, please contact us at:{' '}
                <a href="mailto:legal@soflo-wheelie-life.com" className="text-[#00D9FF] hover:text-[#FF00FF]">
                  legal@soflo-wheelie-life.com
                </a>
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
