import React from 'react';

const SignUpFormField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  inputClassName = '',
  labelClassName = '',
}) => {
  return (
    <div className="w-full">
      <label className={`block mb-2 ${labelClassName}`}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2
          border border-white
          bg-transparent
          placeholder-white
          text-white
          focus:bg-white focus:text-black focus:placeholder-gray-500
          hover:bg-white hover:text-black hover:placeholder-gray-500
          transition duration-300 ease-in-out
          ${inputClassName}
        `}
      />
    </div>
  );
};

export default SignUpFormField;
