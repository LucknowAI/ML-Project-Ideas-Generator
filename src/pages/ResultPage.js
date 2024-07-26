import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
	const { state } = useLocation();
	const { result } = state || {};

	return (
		<div className="container mx-auto p-8">
			<h1 className="text-2xl font-bold mb-6">Form Results</h1>
			<pre>{result}</pre>
		</div>
	);
};

export default ResultPage;
