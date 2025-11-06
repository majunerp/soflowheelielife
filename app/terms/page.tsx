import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - SoFlo Wheelie Life',
  description: 'Terms of Service for SoFlo Wheelie Life - Free online motorcycle wheelie games',
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#FF00FF] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold">Back to Home</span>
            </Link>
          </div>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D9FF] via-[#FF00FF] to-[#FFD700] bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to SoFlo Wheelie Life. By accessing and using our website and playing our free online motorcycle games, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">2. Use of Service</h2>
              <p>
                SoFlo Wheelie Life provides free online motorcycle wheelie games for entertainment purposes. You agree to:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to hack, disrupt, or damage our website</li>
                <li>Not use automated systems to access our games</li>
                <li>Not reproduce, distribute, or modify our content without permission</li>
                <li>Comply with all applicable local, state, national, and international laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">3. Intellectual Property</h2>
              <p>
                All content on SoFlo Wheelie Life, including but not limited to text, graphics, logos, images, and software, is the property of SoFlo Wheelie Life or its content suppliers and is protected by copyright and intellectual property laws. The games embedded on our site are provided by third-party developers and remain their property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">4. Third-Party Content</h2>
              <p>
                Our website contains games and content provided by third parties. We do not control or endorse such content and are not responsible for its accuracy, legality, or appropriateness. Your use of third-party games is subject to their respective terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">5. Disclaimer of Warranties</h2>
              <p>
                SoFlo Wheelie Life is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>The service will be uninterrupted, secure, or error-free</li>
                <li>The games will always be available or function properly</li>
                <li>Any defects will be corrected</li>
                <li>The service is free from viruses or other harmful components</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, SoFlo Wheelie Life shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">7. Age Restrictions</h2>
              <p>
                Our games are intended for general audiences. If you are under 13 years of age, you must have parental or guardian consent to use our website. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">8. Advertisements</h2>
              <p>
                We may display third-party advertisements on our website. These advertisers may use cookies and other tracking technologies. We are not responsible for the content or practices of third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the service after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">10. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including breach of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">11. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                Email: <a href="mailto:contact@soflowheelielife.com" className="text-[#00D9FF] hover:text-[#FF00FF] transition-colors">contact@soflowheelielife.com</a>
              </p>
            </section>

            {/* Back to Home Link */}
            <div className="text-center mt-12 pt-8 border-t border-gray-800">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Games</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
