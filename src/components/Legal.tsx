import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Section {
  title: string;
  content: React.ReactNode;
}

const Legal = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const sections: Section[] = [
    {
      title: "Terms and Conditions",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Introduction</h3>
            <p>These Terms and Conditions govern your use of the website and services provided by Calvin Bells. By accessing or using the website, you agree to comply with these terms.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Use of Website</h3>
            <p>You must comply with all applicable laws when using this website. Any unlawful use, disruption, or damage to the website is prohibited.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Intellectual Property</h3>
            <p>All content, including text, images, and logos, is the property of Calvin Bells and protected by intellectual property laws. Reproduction, distribution, or modification without permission is prohibited.</p>
          </div>
          <div>
            <h3 className="font-semibold">4. Limitation of Liability</h3>
            <p>Calvin Bells is not responsible for any damages resulting from the use or inability to use this website.</p>
          </div>
          <div>
            <h3 className="font-semibold">5. Privacy and Security</h3>
            <p>Your use of the website is governed by our Privacy Policy, which outlines how we collect and safeguard your personal data.</p>
          </div>
          <div>
            <h3 className="font-semibold">6. Modifications</h3>
            <p>Calvin Bells reserves the right to modify these Terms at any time, effective immediately upon posting.</p>
          </div>
        </div>
      )
    },
    {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Introduction</h3>
            <p>Calvin Bells values your privacy and is committed to protecting your personal data. This policy outlines how we collect, use, and protect your information.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Information Collection</h3>
            <p>We collect personal data when you interact with the website, including your name, email, and other relevant details.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Use of Information</h3>
            <p>Your data is used to provide services, process transactions, and improve your experience. We may also send marketing communications if you opt-in.</p>
          </div>
          <div>
            <h3 className="font-semibold">4. Data Protection</h3>
            <p>We implement security measures to protect your data from unauthorized access.</p>
          </div>
          <div>
            <h3 className="font-semibold">5. Third-Party Sharing</h3>
            <p>We do not sell your data but may share it with trusted third parties under strict confidentiality agreements to provide services.</p>
          </div>
          <div>
            <h3 className="font-semibold">6. Cookies</h3>
            <p>Our website uses cookies to improve functionality. You can control cookie preferences through your browser settings.</p>
          </div>
        </div>
      )
    },
    {
      title: "Acceptable Use Policy",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Introduction</h3>
            <p>This policy sets the standards for acceptable behavior when using the website and services.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Prohibited Activities</h3>
            <p>Users must not engage in illegal activities, disrupt website functionality, or upload harmful content.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. User Responsibilities</h3>
            <p>You must ensure that your use of this website complies with all applicable laws and regulations.</p>
          </div>
          <div>
            <h3 className="font-semibold">4. Enforcement</h3>
            <p>Violation of this policy may result in suspension or termination of access to the website.</p>
          </div>
        </div>
      )
    },
    {
      title: "Cookie Policy",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Introduction</h3>
            <p>This policy explains how cookies and similar technologies are used to enhance your experience on the website.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. What Are Cookies?</h3>
            <p>Cookies are small files placed on your device to store information and improve your browsing experience.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Types of Cookies</h3>
            <ul className="list-disc pl-5">
              <li>Essential Cookies: Necessary for website operation.</li>
              <li>Analytical Cookies: Used to improve website performance.</li>
              <li>Marketing Cookies: Used to deliver personalized content.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">4. Managing Cookies</h3>
            <p>You can manage your cookie settings through your browser, though disabling some cookies may affect functionality.</p>
          </div>
          <div>
            <h3 className="font-semibold">5. Consent</h3>
            <p>By using our website, you consent to the use of cookies as described in this policy.</p>
          </div>
        </div>
      )
    },
    {
      title: "Disclaimer",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Information for General Information Purposes Only</h3>
            <p>The information on this website is provided for educational purposes and should not be considered financial advice.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Not a Recommendation</h3>
            <p>We do not endorse or recommend any specific investment based on the information provided.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Investing Risks</h3>
            <p>Investing in precious metals involves risks, including market volatility. Evaluate risks carefully before making investment decisions.</p>
          </div>
          <div>
            <h3 className="font-semibold">4. Accuracy of Information</h3>
            <p>We strive to provide accurate information but make no guarantees about its completeness or reliability.</p>
          </div>
          <div>
            <h3 className="font-semibold">5. Limitation of Liability</h3>
            <p>Calvin Bells disclaims all liability for damages resulting from the use of this website.</p>
          </div>
        </div>
      )
    },
    {
      title: "Email Disclaimer",
      content: (
        <p>By sending an email to Calvin Bells, you consent to receiving communications, including offers, promotions, and updates, from us. If you do not wish to receive such communications, please notify us directly or opt-out via the provided instructions in future emails.</p>
      )
    }
  ];

  return (
    <div id="legal" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Legal Information</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {sections.map((section) => (
            <div key={section.title} className="bg-white shadow rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                {openSection === section.title ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openSection === section.title && (
                <div className="px-6 py-4 border-t border-gray-200">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;