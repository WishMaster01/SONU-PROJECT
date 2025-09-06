import React from "react";
import {
  HeartPulse,
  Stethoscope,
  Syringe,
  Hospital,
  Dog,
  Pill,
} from "lucide-react";

const services = [
  {
    icon: <HeartPulse size={32} />,
    title: "General Checkup",
    desc: "Routine health checkups for your pets.",
  },
  {
    icon: <Stethoscope size={32} />,
    title: "Diagnostics",
    desc: "Blood tests, X-rays, and other diagnostics.",
  },
  {
    icon: <Syringe size={32} />,
    title: "Vaccinations",
    desc: "All types of pet vaccinations at home or clinic.",
  },
  {
    icon: <Hospital size={32} />,
    title: "Surgery",
    desc: "Safe & professional surgical care.",
  },
  {
    icon: <Dog size={32} />,
    title: "Emergency Care",
    desc: "24/7 support for emergencies.",
  },
  {
    icon: <Pill size={32} />,
    title: "Treatment",
    desc: "Specialized treatments for all conditions.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Complete Pet
          <span className="text-orange-600">Healthcare</span> Under One Roof
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-orange-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
