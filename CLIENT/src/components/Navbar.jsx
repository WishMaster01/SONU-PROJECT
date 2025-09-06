import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-orange-600">Dr.Doodley</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-orange-600">
            Vet Home Visit
          </li>
          <li className="cursor-pointer hover:text-orange-600">
            Home Vaccination
          </li>
          <li className="cursor-pointer hover:text-orange-600">
            Online Vet Consultation
          </li>
        </ul>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-700 transition">
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
