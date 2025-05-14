import React from 'react';
import { Link } from 'react-router-dom';

const PrivilageButton = ({ onClick, icon, label }) => {
  return (
    <Link
      onClick={onClick}
      className="bg-custom-blue text-white w-48 h-48 flex flex-col items-center justify-center rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:bg-custom-grey hover:text-custom-blue transition-all duration-300"
    >
      {icon}
      <span className="text-lg font-semibold">{label}</span>
    </Link>
  );
};

export default PrivilageButton;

