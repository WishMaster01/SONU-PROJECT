import React from "react";

const locations = [
  {
    name: "Dr Doodley Pet Hospital - Yelahanka",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Dr Doodley Pet Hospital - Whitefield",
    img: "https://content.jdmagicbox.com/v2/comp/bangalore/d3/080pxx80.xx80.250305190821.p7d3/catalogue/dr-doodley-pet-hospital-jayanagar-bangalore-ui1sxb2i6u.jpg",
  },
];

const Locations = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Locations of <span className="text-orange-600">Dr Doodley</span> in
          Bengaluru
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{loc.name}</h3>{" "}
                <div className="mt-4 flex gap-4 justify-center">
                  <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
                    Call Now
                  </button>
                  <button className="border border-orange-600 text-orange-600 px-5 py-2 rounded-lg hover:bg-orange-100 transition">
                    Get Direction
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
