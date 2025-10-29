import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - SoFlo Wheelie Life Games',
  description: 'Read our privacy policy to understand how SoFlo Wheelie Life collects, uses, and protects your information when you play our free motorcycle games.',
  alternates: {
    canonical: 'https://soflo-wheelie-life.com/privacy',
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'October 29, 2025';

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00D9FF] to-[#FF00FF] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8 text-gray-300">
            <p>
              At SoFlo Wheelie Life (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit soflo-wheelie-life.com (the &quot;Website&quot;) and play our free online motorcycle games.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Information We Collect</h2>

              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Automatically Collected Information</h3>
              <p>When you visit our Website, we automatically collect certain information, including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device type and screen resolution</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-[#FF00FF]">Cookies and Analytics</h3>
              <p>
                We use cookies and third-party analytics services (Google Analytics, Microsoft Clarity) to understand how visitors use our Website and improve user experience. These services collect anonymous usage data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Operate and maintain the Website</li>
                <li>Improve user experience and game performance</li>
                <li>Analyze usage patterns and trends</li>
                <li>Display relevant advertisements through Google AdSense</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Third-Party Services</h2>

              <h3 className="text-xl font-bold mb-3 text-[#FF00FF]">Google AdSense</h3>
              <p>
                We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our Website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-[#00D9FF] hover:text-[#FF00FF]">Google Ads Settings</a>.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-[#FF00FF]">Embedded Games</h3>
              <p>
                Some games on our Website are embedded from third-party platforms. These platforms may collect their own data according to their privacy policies. We are not responsible for the privacy practices of embedded game providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Children&apos;s Privacy</h2>
              <p>
                Our Website is intended for general audiences. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics cookies</li>
                <li>Opt out of personalized advertising</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of the Website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#00D9FF]">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:privacy@soflo-wheelie-life.com" className="text-[#00D9FF] hover:text-[#FF00FF]">
                  privacy@soflo-wheelie-life.com
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
