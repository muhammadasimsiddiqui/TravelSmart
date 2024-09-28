import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What services does TravelSmart offer?",
      answer:
        "TravelSmart offers a comprehensive suite of travel services, including:\n\n- **Flight Bookings**: Choose from a wide range of airlines and find the best deals.\n- **Hotel Reservations**: Book accommodations that fit your budget and preferences, from luxury hotels to budget-friendly options.\n- **Car Rentals**: Get around your destination with ease by renting a car at competitive rates.\n- **Vacation Packages**: Explore our curated travel packages that combine flights, hotels, and activities for a seamless experience.",
    },
    {
      question: "How can I book a trip?",
      answer:
        "Booking a trip with TravelSmart is simple:\n\n1. Visit our homepage and select the type of service you need (flights, hotels, etc.).\n2. Fill out the necessary information such as travel dates and destinations.\n3. Review the options available and select your preferred choices.\n4. Complete the booking form and proceed to payment. An email confirmation will be sent once the booking is successful.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We offer multiple payment options for your convenience:\n\n- **Credit Cards**: Visa, MasterCard, American Express, and Discover.\n- **Debit Cards**: Accepted with the same logos as credit cards.\n- **PayPal**: Secure payments via your PayPal account.\n\nAll transactions are encrypted for your safety.",
    },
    {
      question: "Can I modify my booking?",
      answer:
        "Yes, you can modify your booking. To do so:\n\n- Contact our customer support team at least 24 hours before your scheduled trip.\n- Be aware that additional fees may apply depending on the nature of the modification.\n- Changes are subject to availability.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the service:\n\n- **Flights**: Cancel within 24 hours for a full refund; fees apply after that.\n- **Hotels**: Most bookings can be canceled for free up to 48 hours before check-in; please check the specific hotel policy.\n- **Car Rentals**: Cancel up to 24 hours in advance for a full refund.\n\nAlways refer to the specific terms at the time of booking for the most accurate information.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our dedicated customer support team is here to help:\n\n- **Email**: Reach us at support@travelsmart.com for assistance.\n- **Phone**: Call our helpline at 1-800-555-TRIP (8747) for immediate support.\n- **Live Chat**: Available on our website during business hours for quick inquiries.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 pt-16 pb-6 my-16">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-lg">Your travel queries answered!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {faq.question}
            </h2>
            <p className="text-gray-700 mt-2">
              {faq.answer.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FAQs;
