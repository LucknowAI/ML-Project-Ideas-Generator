import React from "react";

const InputField = ({
	label,
	type,
	id,
	name,
	placeholder,
	required,
	value,
	onChange,
}) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={id}
				className="block text-white text-left text-sm font-bold mb-2">
				{label}
				{required && <span className="text-red-500">*</span>}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
	);
};

export default InputField;
