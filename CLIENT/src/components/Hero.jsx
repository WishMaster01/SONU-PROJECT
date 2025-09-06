import React from "react";

const Hero = () => {
  return (
    <section className="pt-28 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Professional Pet Care <br />
            <span className="text-orange-600">with FREE Consultation</span>
          </h2>
          <form className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Enter Your Mobile"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661962785160-458b1a95750b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwd2l0aCUyMHBldHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Doctor with pets"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
