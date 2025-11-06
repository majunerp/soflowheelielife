import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - SoFlo Wheelie Life',
  description: 'Privacy Policy for SoFlo Wheelie Life - How we protect your privacy while you play free motorcycle games',
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/privacy',
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">1. Introduction</h2>
              <p>
                Welcome to SoFlo Wheelie Life. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and play our free online motorcycle games.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[#FF00FF] mt-6 mb-3">2.1 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Device type and screen resolution</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Game play statistics and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#FF00FF] mt-6 mb-3">2.2 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to enhance your gaming experience, remember your preferences, and analyze site traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">3. How We Use Your Information</h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>To provide and maintain our gaming service</li>
                <li>To improve and optimize our website and games</li>
                <li>To analyze usage patterns and trends</li>
                <li>To display relevant advertisements</li>
                <li>To prevent fraud and enhance security</li>
                <li>To comply with legal obligations</li>
                <li>To communicate with you about updates or changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">4. Third-Party Services</h2>

              <h3 className="text-xl font-semibold text-[#FF00FF] mt-6 mb-3">4.1 Game Providers</h3>
              <p>
                The games on our website are provided by third-party developers. These providers may collect their own data through the games. Please refer to their respective privacy policies for more information.
              </p>

              <h3 className="text-xl font-semibold text-[#FF00FF] mt-6 mb-3">4.2 Analytics Services</h3>
              <p>
                We use third-party analytics services (such as Google Analytics) to help us understand how visitors use our site. These services may use cookies and collect information about your use of our website.
              </p>

              <h3 className="text-xl font-semibold text-[#FF00FF] mt-6 mb-3">4.3 Advertising Partners</h3>
              <p>
                We work with third-party advertising partners to display ads on our website. These partners may use cookies and similar technologies to collect information about your browsing activities to provide relevant advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">5. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Service providers who assist in operating our website</li>
                <li>Analytics and advertising partners</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties in connection with a business transaction (merger, sale, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">7. Children's Privacy</h2>
              <p>
                Our website is intended for general audiences. We do not knowingly collect personal information from children under 13 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">8. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to opt-out of certain data processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">9. Cookies Management</h2>
              <p>
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when closing the browser</li>
              </ul>
              <p className="mt-4">
                Note that disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our service, you consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> <a href="mailto:privacy@soflowheelielife.com" className="text-[#00D9FF] hover:text-[#FF00FF] transition-colors">privacy@soflowheelielife.com</a>
                </p>
                <p>
                  <strong>Website:</strong> <a href="https://soflowheelielife.com" className="text-[#00D9FF] hover:text-[#FF00FF] transition-colors">soflowheelielife.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">13. Additional Information for EU Users</h2>
              <p>
                If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
                <li>Right to object to processing based on legitimate interests</li>
                <li>Right to restrict processing in certain circumstances</li>
              </ul>
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
