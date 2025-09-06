import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Dr.Doodley</h2>
          <p className="mt-2">Caring for your pets with love & expertise.</p>
          <p className="mt-2">📧 drdoodley@vet.in</p>
          <p> +91 99865 36120</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li> <li>Refund Policy</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        © 2025 Dr.Doodley. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
