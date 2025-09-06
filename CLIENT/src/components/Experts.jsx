import React from "react";

const experts = [
  {
    name: "Dr. Karthik",
    role: "Senior Vet",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Dr. Varsha",
    role: "Surgeon",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  },
  {
    name: "Dr. Ramesh",
    role: "Vet Specialist",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

const Experts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Team of India's Renowned
          <span className="text-orange-600">Veterinary Experts</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((exp, i) => (
            <div key={i} className="bg-orange-50 rounded-2xl shadow-lg p-6">
              <img
                src={exp.img}
                alt={exp.name}
                className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{exp.name}</h3>
              <p className="text-gray-600">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
