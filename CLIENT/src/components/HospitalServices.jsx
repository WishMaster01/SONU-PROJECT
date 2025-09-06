import React from "react";
import { Users, Building, PhoneCall } from "lucide-react";

const hospitalServices = [
  {
    icon: <Users size={32} />,
    title: "20+ Expert Vets",
    desc: "Experienced doctors & surgeons.",
  },
  {
    icon: <Building size={32} />,
    title: "Advance Facilities",
    desc: "Modern labs and surgical units.",
  },
  {
    icon: <PhoneCall size={32} />,
    title: "Free Consultation",
    desc: "Always available for your pets.",
  },
];

const HospitalServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Hospital Backed
          <span className="text-orange-600"> Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {hospitalServices.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-orange-600 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalServices;
