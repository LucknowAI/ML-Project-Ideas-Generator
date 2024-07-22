import React from "react";

const RadioGroup = ({ label, name, options, required, onChange }) => {
	return (
		<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2">
				{label}
			</label>
			{options.map((option) => (
				<label key={option.value} className="block text-gray-700">
					<input
						type="radio"
						name={name}
						value={option.value}
						required={required}
						onChange={onChange} // Ensure this is correctly called
						className="mr-2 leading-tight"
					/>
					{option.label}
				</label>
			))}
		</div>
	);
};

export default RadioGroup;
