import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resultpage" element={<ResultPage />} />
			</Routes>
		</Router>
	);
};

export default App;
