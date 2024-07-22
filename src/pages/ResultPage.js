import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
	const { state } = useLocation();
	const { result } = state || {};

	return (
		<div className="container mx-auto p-8">
			<h1 className="text-2xl font-bold mb-6">Form Results</h1>
			{result ? (
				<pre>{JSON.stringify(result, null, 2)}</pre>
			) : (
				<p>No results available.</p>
			)}
		</div>
	);
};

export default ResultPage;
