import { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const legalContent = {
    terms: (
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-900">1. Introduction</h3>
          <p>These Terms and Conditions govern your use of the website and services provided by Calvin Bells. By accessing or using the website, you agree to comply with these terms.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">2. Use of Website</h3>
          <p>You must comply with all applicable laws when using this website. Any unlawful use, disruption, or damage to the website is prohibited.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">3. Intellectual Property</h3>
          <p>All content, including text, images, and logos, is the property of Calvin Bells and protected by intellectual property laws. Reproduction, distribution, or modification without permission is prohibited.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">4. Limitation of Liability</h3>
          <p>Calvin Bells is not responsible for any damages resulting from the use or inability to use this website.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">5. Privacy and Security</h3>
          <p>Your use of the website is governed by our Privacy Policy, which outlines how we collect and safeguard your personal data.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">6. Modifications</h3>
          <p>Calvin Bells reserves the right to modify these Terms at any time, effective immediately upon posting.</p>
        </div>
      </div>
    ),
    privacy: (
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-900">1. Introduction</h3>
          <p>Calvin Bells values your privacy and is committed to protecting your personal data. This policy outlines how we collect, use, and protect your information.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">2. Information Collection</h3>
          <p>We collect personal data when you interact with the website, including your name, email, and other relevant details.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">3. Use of Information</h3>
          <p>Your data is used to provide services, process transactions, and improve your experience. We may also send marketing communications if you opt-in.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">4. Data Protection</h3>
          <p>We implement security measures to protect your data from unauthorized access.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">5. Third-Party Sharing</h3>
          <p>We do not sell your data but may share it with trusted third parties under strict confidentiality agreements to provide services.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">6. Cookies</h3>
          <p>Our website uses cookies to improve functionality. You can control cookie preferences through your browser settings.</p>
        </div>
      </div>
    ),
    cookies: (
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-900">1. Introduction</h3>
          <p>This policy explains how cookies and similar technologies are used to enhance your experience on the website.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">2. What Are Cookies?</h3>
          <p>Cookies are small files placed on your device to store information and improve your browsing experience.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">3. Types of Cookies</h3>
          <ul className="list-disc pl-5">
            <li>Essential Cookies: Necessary for website operation.</li>
            <li>Analytical Cookies: Used to improve website performance.</li>
            <li>Marketing Cookies: Used to deliver personalized content.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">4. Managing Cookies</h3>
          <p>You can manage your cookie settings through your browser, though disabling some cookies may affect functionality.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">5. Consent</h3>
          <p>By using our website, you consent to the use of cookies as described in this policy.</p>
        </div>
      </div>
    ),
    disclaimer: (
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-900">Disclaimer</h3>
          <p><strong>1. Information for General Information Purposes Only</strong><br />
          The information on this website is provided for educational purposes and should not be considered financial advice.</p>
          <p><strong>2. Not a Recommendation</strong><br />
          We do not endorse or recommend any specific investment based on the information provided.</p>
          <p><strong>3. Investing Risks</strong><br />
          Investing in precious metals involves risks, including market volatility. Evaluate risks carefully before making investment decisions.</p>
          <p><strong>4. Accuracy of Information</strong><br />
          We strive to provide accurate information but make no guarantees about its completeness or reliability.</p>
          <p><strong>5. Limitation of Liability</strong><br />
          Calvin Bells disclaims all liability for damages resulting from the use of this website.</p>
        </div>
      </div>
    ),
    emailDisclaimer: (
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-900">Email Disclaimer</h3>
          <p>By sending an email to Calvin Bells, you consent to receiving communications, including offers, promotions, and updates, from us. If you do not wish to receive such communications, please notify us directly or opt-out via the provided instructions in future emails.</p>
        </div>
      </div>
    )
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img src="https://res.cloudinary.com/dx6gwdr8q/image/upload/v1713173285/Calvin%20Bells/logo/dw1oxrwcibu72mfigbvb.png" alt="Calvin Bells Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">Calvin Bells</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your trusted partner in precious metals and investment gold trading since 2018.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="text-base text-gray-300 hover:text-white"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="text-base text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('cookies')}
                  className="text-base text-gray-300 hover:text-white"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('disclaimer')}
                  className="text-base text-gray-300 hover:text-white"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('emailDisclaimer')}
                  className="text-base text-gray-300 hover:text-white"
                >
                  Email Disclaimer
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Calvin Bells. All rights reserved.
          </p>
        </div>
      </div>

      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms & Conditions"
      >
        {legalContent.terms}
      </Modal>

      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
      >
        {legalContent.privacy}
      </Modal>

      <Modal
        isOpen={activeModal === 'cookies'}
        onClose={() => setActiveModal(null)}
        title="Cookie Policy"
      >
        {legalContent.cookies}
      </Modal>

      <Modal
        isOpen={activeModal === 'disclaimer'}
        onClose={() => setActiveModal(null)}
        title="Disclaimer"
      >
        {legalContent.disclaimer}
      </Modal>

      <Modal
        isOpen={activeModal === 'emailDisclaimer'}
        onClose={() => setActiveModal(null)}
        title="Email Disclaimer"
      >
        {legalContent.emailDisclaimer}
      </Modal>
    </footer>
  );
};

export default Footer;
