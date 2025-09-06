import React, { useState } from "react";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book via our website or by calling us.",
  },
  {
    q: "What services do you offer at home?",
    a: "Vaccinations, health checkups, and more.",
  },
  {
    q: "Do you have a 24/7 helpline?",
    a: "Yes, we are available round the clock.",
  },
  { q: "Which pets do you treat?", a: "We treat dogs, cats, birds, and more." },
  {
    q: "Are your vets qualified?",
    a: "Yes, all vets are certified professionals.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          FAQ
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-700"
              >
                {faq.q}
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <p className="px-6 pb-4 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
