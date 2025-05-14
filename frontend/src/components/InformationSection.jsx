import React from 'react';

const InformationSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg border-2 border-custom-blue p-6 h-full flex flex-col justify-center">
      {/* About Us Section */}
      

      {/* Contact Us Section */}
      <div>
        <h2 className="text-xl font-bold text-custom-blue mb-4">Contact Us</h2>
        <p className="text-black text-sm">
          <span className="font-semibold">Address:</span> Faculty of Engineering, Hapugala, Galle, Sri Lanka
        </p>
        <p className="text-black text-sm">
          <span className="font-semibold">Phone:</span> +(94)0 91 2245765/6
        </p>
        <p className="text-black text-sm">
          <span className="font-semibold">Email:</span> webmaster@eng.ruh.ac.lk
        </p>
      </div>
    </div>
  );
};

export default InformationSection;
