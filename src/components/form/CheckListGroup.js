import React from 'react';

const ChecklistGroup = ({ label, name, options, required }) => {
    return (
        <div className="mb-4 flex flex-col items-start">
            <label className="block text-white text-sm font-bold mb-2">{label}</label>
            {options.map((option) => (
                <label key={option.value} className="block text-gray-400">
                    <input
                        type="checkbox"
                        name={name}
                        value={option.value}
                        required={required}
                        className="mr-2 leading-tight"
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default ChecklistGroup;