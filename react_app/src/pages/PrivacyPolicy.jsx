import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col my-16 pt-16 pb-8 bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">TravelSmart Privacy Policy</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            At TravelSmart, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, and protect your information when you
            use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700">
            We may collect personal information such as your name, email
            address, phone number, and payment information when you make a
            booking or contact us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700">
            We use your information to:
            <ul className="list-disc list-inside mt-2">
              <li>Process your bookings and manage your reservations.</li>
              <li>Communicate with you about your bookings and services.</li>
              <li>Improve our services and customer experience.</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties.
            We may share your information with trusted partners to provide our
            services, as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-700">
            We use cookies to enhance your experience on our website. You can
            choose to accept or decline cookies, but this may prevent you from
            taking full advantage of the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at support@travelsmart.com.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
