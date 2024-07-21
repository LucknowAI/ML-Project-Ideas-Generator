import React from 'react';

const InputField = ({ label, type, id, name, placeholder, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;