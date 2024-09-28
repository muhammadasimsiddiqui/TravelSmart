import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 mt-16  mb-8 py-16">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">
            TravelSmart Terms and Conditions
          </h1>
          <p className="mt-2 text-lg">Your guide to using our services.</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 mt-8 bg-white shadow-lg rounded-lg p-6">
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to TravelSmart. These Terms and Conditions outline the rules
            and regulations for the use of our services. By accessing our
            website, you agree to be bound by these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Usage</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing this website, you agree to comply with the terms set
            forth herein. If you do not agree with any of these terms, you
            should not use this site. Unauthorized use of this site may lead to
            a claim for damages and/or be a criminal offense.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The content on the TravelSmart website is the property of our
            company and is protected by copyright laws. You may not reproduce or
            distribute any material without our prior written consent. Any use
            of trademarks, logos, or other proprietary information is strictly
            prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            TravelSmart will not be liable for any damages or losses arising
            from the use of this site. We are not responsible for any errors or
            omissions in the content provided. In no event shall we be liable
            for any indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any
            time. It is your responsibility to review these terms periodically
            for changes. Continued use of the site constitutes your acceptance
            of any modified terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding these Terms and Conditions,
            please contact us at{" "}
            <a
              href="mailto:support@travelsmart.com"
              className="text-blue-600 hover:underline"
            >
              support@travelsmart.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
