import React from "react";

const HappyPets = () => {
  const pets = [
    {
      name: "Rocky",
      img: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      review: "Great service and loving vets!",
    },
    {
      name: "Bella",
      img: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      review: "They took amazing care of my pet.",
    },
    {
      name: "Max",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      review: "Best clinic experience ever!",
    },
    {
      name: "Buddy",
      img: "https://images.unsplash.com/photo-1543466835-d22510257404",
      review: "The staff were so kind and my dog had a wonderful experience.",
    },
    {
      name: "Lucy",
      img: "https://images.unsplash.com/photo-1583511655073-207a9b09b555",
      review: "Highly recommend! They took excellent care of my cat.",
    },
    {
      name: "Puppy",
      img: "https://images.unsplash.com/photo-1596492784531-fa9449839446",
      review:
        "My cat was so nervous, but the team here made her feel safe and comfortable. Fantastic staff!",
    },
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet Our <span className="text-orange-600">Happy Pets</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pets.map((pet, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-6"
            >
              <img
                src={pet.img}
                alt={pet.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{pet.name}</h3>
              <p className="text-gray-600 mt-2">{pet.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyPets;
