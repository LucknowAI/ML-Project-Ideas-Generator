import React from 'react';

const SelectField = ({ label, id, name, options, required }) => {
  return (
    <div className="mb-4 flex flex-col items-start">
      <label htmlFor={id} className="block text-white text-sm font-bold mb-2">{label}</label>
      <select
        id={id}
        name={name}
        required={required}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;