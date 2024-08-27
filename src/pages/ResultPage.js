import React from "react";
import { useLocation } from "react-router-dom";
import { marked } from "marked";

const ResultPage = () => {
	const { state } = useLocation();
	const { result } = state || {};

	if (!result) {
		return <div>No results to display</div>;
	}

	// Convert the markdown to HTML
	const htmlContent = marked(result);

	return (
		<div className="container mx-auto p-8">
			<h1 className="text-2xl font-bold mb-6">Form Results</h1>
			<div
				className="formatted-output text-left"
				dangerouslySetInnerHTML={{ __html: htmlContent }}
			/>
		</div>
	);
};

export default ResultPage;
