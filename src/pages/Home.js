import React, { useState, useEffect } from "react";
import InputField from "../components/form/InputField";
import SelectField from "../components/form/SelectField";
import RadioGroup from "../components/form/RadioGroup";
import TextAreaField from "../components/form/TextAreaField";
import ChecklistGroup from "../components/form/CheckListGroup";
import ProgressBar from "../components/form/ProgressBar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [formData, setFormData] = useState({
		key: "",
		name: "",
		year: "",
		university: "",
		gpa: "",
		internships: "",
		interestAreas: "",
		specializedCourses: "",
		python: "",
		java: "",
		webdev: "",
		ml: "",
		proficiency: "",
		challengingProject: "",
		openSource: "",
		methodologies: "",
		aiMlTechniques: "",
		bigDataTech: "",
		testing: "",
		aiMlInterest: [],
		aiMlProjects: "",
		mlAlgorithms: "",
		deepLearning: "",
		researchInterest: "",
		challenges: "",
		competitions: "",
		toolsPlatforms: "",
		postGradRole: "",
		companiesIndustries: "",
		furtherStudies: "",
		careerVision: "",
		aiMlExcitement: "",
		projectSize: "",
		teamOrIndividual: "",
		startupInterest: "",
		projectFocus: "",
		projectIndustry: "",
		dataType: "",
		hardwareSoftware: "",
		publicationImportance: "",
		problemSolving: "",
		challengingTasks: "",
		learningMethod: "",
		comfortAmbiguity: "",
		goalPreference: "",
		setbacks: "",
		thinkingStyle: "",
		workLifeBalance: "",
		otherFields: "",
		globalIssues: "",
		hobbies: "",
		interdisciplinaryProjects: "",
		inspiringCourses: "",
		emergingTech: "",
	});
	const formDataKeys = Object.keys(formData);
	const navigate = useNavigate();
	const totalPages = 7;

	useEffect(() => {
		const formData = Cookies.get("formData");
		if (formData) {
			setFormData(JSON.parse(formData));
		}
	}, []);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleTextChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSelectChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
		window.scrollTo(0, 0);
	};

	const handlePrevious = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
		window.scrollTo(0, 0);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let isValid = true;

		formDataKeys.forEach((key) => {
			if (!formData[key]) {
				isValid = false;
				return;
			}
		});
		if (!isValid) {
			alert("Please fill out all fields before submitting");
			return;
		}
		try {
			const response = await fetch("http://localhost:8000/process-form", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			Cookies.set("formData", JSON.stringify(formData));
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const result = await response.json();
			console.log("Success:", result);
			navigate("/result", { state: { result } });
		} catch (error) {
			console.error("Error:", error);
			navigate("/result", { state: { error } });
		}
	};
	const renderPage = () => {
		switch (currentPage) {
			case 1:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							Gemini API key
						</h2>
						<InputField
							label="API Key:"
							type="text"
							id="key"
							name="key"
							placeholder="Enter your API key"
							value={formData.key}
							onChange={handleInputChange}
							required={true}
						/>
						<h2 className="text-xl font-semibold mb-4 text-left">
							Personal Information
						</h2>
						<InputField
							label="Full Name:"
							type="text"
							id="name"
							name="name"
							placeholder="Enter your full name"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
						<SelectField
							label="Current Year of Study:"
							id="year"
							name="year"
							options={[
								{ value: "1", label: "1st Year" },
								{ value: "2", label: "2nd Year" },
								{ value: "3", label: "3rd Year" },
								{ value: "4", label: "4th Year" },
							]}
							value={formData.year}
							onChange={handleSelectChange}
							required
						/>
						<InputField
							label="University:"
							type="text"
							id="university"
							name="university"
							placeholder="Enter your university name"
							value={formData.university}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Current GPA or Academic Standing:"
							type="text"
							id="gpa"
							name="gpa"
							placeholder="Enter your current GPA or standing"
							value={formData.gpa}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Relevant Internships or Work Experiences:"
							id="internships"
							name="internships"
							rows="3"
							value={formData.internships}
							required
							onChange={handleTextChange}
						/>
						<InputField
							label="Primary Areas of Interest within Computer Science:"
							type="text"
							id="interestAreas"
							name="interestAreas"
							placeholder="Enter your areas of interest"
							value={formData.interestAreas}
							required
							onChange={handleInputChange}
						/>
						<InputField
							label="Specialized Courses in AI, ML, or Data Science:"
							type="text"
							id="specializedCourses"
							name="specializedCourses"
							placeholder="Enter courses you've taken"
							value={formData.specializedCourses}
							required
							onChange={handleInputChange}
						/>
					</div>
				);
			case 2:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							Technical Skills
						</h2>
						<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
							<RadioGroup
								label="Python:"
								name="python"
								options={[
									{ value: "1", label: "Beginner" },
									{ value: "2", label: "Intermediate" },
									{ value: "3", label: "Advanced" },
								]}
								value={formData.python}
								onChange={handleSelectChange}
								required
							/>
							<RadioGroup
								label="Java:"
								name="java"
								options={[
									{ value: "1", label: "Beginner" },
									{ value: "2", label: "Intermediate" },
									{ value: "3", label: "Advanced" },
								]}
								value={formData.java}
								onChange={handleSelectChange}
								required
							/>
							<RadioGroup
								label="Web Development:"
								name="webdev"
								options={[
									{ value: "1", label: "Beginner" },
									{ value: "2", label: "Intermediate" },
									{ value: "3", label: "Advanced" },
								]}
								value={formData.webdev}
								onChange={handleSelectChange}
								required
							/>
							<RadioGroup
								label="Machine Learning:"
								name="ml"
								options={[
									{ value: "1", label: "Beginner" },
									{ value: "2", label: "Intermediate" },
									{ value: "3", label: "Advanced" },
								]}
								value={formData.ml}
								onChange={handleSelectChange}
								required
							/>
						</div>
						<InputField
							label="Rate Your Proficiency (1-5):"
							type="number"
							id="proficiency"
							name="proficiency"
							placeholder="Rate 1-5"
							value={formData.proficiency}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Describe a Challenging Technical Project:"
							id="challengingProject"
							name="challengingProject"
							rows="3"
							placeholder="Describe a challenging project"
							value={formData.challengingProject}
							onChange={handleTextChange}
							required
						/>
						<InputField
							label="Open-Source Contributions:"
							type="text"
							id="openSource"
							name="openSource"
							placeholder="Enter details of open-source contributions"
							value={formData.openSource}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Familiar Development Methodologies:"
							type="text"
							id="methodologies"
							name="methodologies"
							placeholder="Enter methodologies"
							value={formData.methodologies}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Experience with AI/ML Techniques:"
							type="text"
							id="aiMlTechniques"
							name="aiMlTechniques"
							placeholder="Enter AI/ML techniques"
							value={formData.aiMlTechniques}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Experience with Big Data Technologies:"
							type="text"
							id="bigDataTech"
							name="bigDataTech"
							placeholder="Enter big data technologies"
							value={formData.bigDataTech}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Experience with Software Testing and QA:"
							type="text"
							id="testing"
							name="testing"
							placeholder="Enter experience with testing and QA"
							value={formData.testing}
							onChange={handleInputChange}
							required
						/>
					</div>
				);
			case 3:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							AI/ML Specific Questions
						</h2>
						<ChecklistGroup
							label="Areas of AI/ML of Interest:"
							name="aiMlInterest"
							options={[
								{ value: "computerVision", label: "Computer Vision" },
								{ value: "nlp", label: "Natural Language Processing" },
								{
									value: "reinforcementLearning",
									label: "Reinforcement Learning",
								},
								{ value: "generativeAi", label: "Generative AI" },
								{ value: "robotics", label: "Robotics" },
								{ value: "expertSystems", label: "Expert Systems" },
								{
									value: "evolutionaryComputation",
									label: "Evolutionary Computation",
								},
								{ value: "aiEthics", label: "AI Ethics and Fairness" },
								{ value: "explainableAi", label: "Explainable AI" },
								{ value: "other", label: "Other" },
							]}
							formData={formData}
							setFormData={setFormData}
							value={formData.aiMlInterest}
							required
						/>
						<TextAreaField
							label="Significant AI/ML Projects:"
							id="aiMlProjects"
							name="aiMlProjects"
							rows="3"
							value={formData.aiMlProjects}
							onChange={handleTextChange}
							required
						/>
						<InputField
							label="Familiar Machine Learning Algorithms:"
							type="text"
							id="mlAlgorithms"
							name="mlAlgorithms"
							placeholder="Enter familiar algorithms"
							value={formData.mlAlgorithms}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Experience with Deep Learning Architectures:"
							id="deepLearning"
							name="deepLearning"
							rows="3"
							value={formData.deepLearning}
							onChange={handleTextChange}
							required
						/>
						<RadioGroup
							label="Interest in Theoretical vs Practical AI/ML Research:"
							name="researchInterest"
							options={[
								{ value: "theoretical", label: "Theoretical Research" },
								{ value: "practical", label: "Practical Applications" },
							]}
							value={formData.researchInterest}
							onChange={handleSelectChange}
							required
						/>
						<TextAreaField
							label="Biggest Challenges in AI/ML:"
							id="challenges"
							name="challenges"
							rows="3"
							value={formData.challenges}
							onChange={handleTextChange}
							required
						/>
						<TextAreaField
							label="AI/ML Competitions Experience:"
							id="competitions"
							name="competitions"
							rows="3"
							value={formData.competitions}
							onChange={handleTextChange}
							required
						/>
						<InputField
							label="Specific AI/ML Tools or Platforms of Interest:"
							type="text"
							id="toolsPlatforms"
							name="toolsPlatforms"
							placeholder="Enter tools or platforms"
							value={formData.toolsPlatforms}
							onChange={handleInputChange}
							required
						/>
					</div>
				);
			case 4:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							Career Aspirations
						</h2>
						<SelectField
							label="Post-Graduation Role:"
							id="postGradRole"
							name="postGradRole"
							options={[
								{ value: "dataScientist", label: "Data Scientist" },
								{ value: "mlEngineer", label: "Machine Learning Engineer" },
								{ value: "aiResearcher", label: "AI Researcher" },
								{
									value: "fullStackDeveloper",
									label: "Full-stack Developer with AI focus",
								},
								{ value: "cloudAiArchitect", label: "Cloud AI Architect" },
								{ value: "aiProductManager", label: "AI Product Manager" },
								{ value: "other", label: "Other" },
							]}
							value={formData.postGradRole}
							onChange={handleSelectChange}
							required
						/>
						<InputField
							label="Specific Companies or Industries of Interest:"
							type="text"
							id="companiesIndustries"
							name="companiesIndustries"
							placeholder="Enter companies or industries"
							value={formData.companiesIndustries}
							onChange={handleInputChange}
							required
						/>
						<RadioGroup
							label="Considering Further Studies in AI/ML or Related Field:"
							name="furtherStudies"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
							]}
							value={formData.furtherStudies}
							onChange={handleSelectChange}
							required
						/>
						<InputField
							label="Career Vision in 5 Years:"
							type="text"
							id="careerVision"
							name="careerVision"
							placeholder="Describe your career vision in 5 years"
							value={formData.careerVision}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Aspects of AI/ML That Excite You:"
							id="aiMlExcitement"
							name="aiMlExcitement"
							rows="3"
							value={formData.aiMlExcitement}
							onChange={handleTextChange}
							required
						/>
					</div>
				);
			case 5:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							Project Preferences
						</h2>
						<InputField
							label="Preferred Project Size and Scope:"
							type="text"
							id="projectSize"
							name="projectSize"
							placeholder="Enter your preferred project size and scope"
							value={formData.projectSize}
							onChange={handleInputChange}
							required
						/>
						<RadioGroup
							label="Interest in Team-based vs Individual Projects:"
							name="teamOrIndividual"
							options={[
								{ value: "team", label: "Team-based" },
								{ value: "individual", label: "Individual" },
							]}
							value={formData.teamOrIndividual}
							onChange={handleSelectChange}
							required
						/>
						<RadioGroup
							label="Interest in Startup Potential:"
							name="startupInterest"
							options={[
								{ value: "yes", label: "Yes" },
								{ value: "no", label: "No" },
							]}
							value={formData.startupInterest}
							onChange={handleSelectChange}
							required
						/>
						<RadioGroup
							label="Project Focus:"
							name="projectFocus"
							options={[
								{ value: "realWorld", label: "Real-world Problem" },
								{ value: "theoretical", label: "Theoretical/Research" },
							]}
							value={formData.projectFocus}
							onChange={handleSelectChange}
							required
						/>
						<InputField
							label="Specific Industries for Project Focus:"
							type="text"
							id="projectIndustry"
							name="projectIndustry"
							placeholder="Enter specific industries"
							value={formData.projectIndustry}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Preferred Data Type for Project:"
							type="text"
							id="dataType"
							name="dataType"
							placeholder="Enter preferred data types"
							value={formData.dataType}
							onChange={handleInputChange}
							required
						/>
						<RadioGroup
							label="Interest in Hardware or Software-based Projects:"
							name="hardwareSoftware"
							options={[
								{ value: "hardware", label: "Hardware Components" },
								{ value: "software", label: "Software-based" },
							]}
							value={formData.hardwareSoftware}
							onChange={handleSelectChange}
							required
						/>
						<InputField
							label="Importance of Publication or Patenting:"
							type="text"
							id="publicationImportance"
							name="publicationImportance"
							placeholder="Describe importance of publication or patenting"
							value={formData.publicationImportance}
							onChange={handleInputChange}
							required
						/>
					</div>
				);
			case 6:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							Psychological Assessment
						</h2>
						<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
							<RadioGroup
								label="Approach to Problem-Solving:"
								name="problemSolving"
								options={[
									{
										value: "detailedPlanning",
										label: "Plan everything in detail",
									},
									{
										value: "adaptable",
										label: "Dive in and figure out as I go",
									},
									{
										value: "balanced",
										label: "Balance planning and adaptability",
									},
								]}
								value={formData.problemSolving}
								onChange={handleSelectChange}
								required
							/>
							<RadioGroup
								label="Preferred Approach to Challenging Tasks:"
								name="challengingTasks"
								options={[
									{
										value: "Break it into smaller parts",
										label: "Break it into smaller parts",
									},
									{
										value: "Tackle the most difficult aspect first",
										label: "Tackle the most difficult aspect first",
									},
									{
										value: "Tackle the most difficult aspect first",
										label: "Tackle the most difficult aspect first",
									},
								]}
								value={formData.challengingTasks}
								onChange={handleSelectChange}
								required
							/>
							<RadioGroup
								label="Preferred Learning Method:"
								name="learningMethod"
								options={[
									{
										value: "Hands-on experimentation",
										label: "Hands-on experimentation",
									},
									{ value: "Study theory first", label: "Study theory first" },
									{
										value: "Discussion and collaboration",
										label: "Discussion and collaboration",
									},
								]}
								value={formData.learningMethod}
								onChange={handleSelectChange}
								required
							/>
						</div>
						<InputField
							label="Comfort Level with Ambiguity (1-5):"
							type="number"
							id="comfortAmbiguity"
							name="comfortAmbiguity"
							placeholder="Rate 1-5"
							value={formData.comfortAmbiguity}
							onChange={handleInputChange}
							required
						/>
						<RadioGroup
							label="Preference for Defined Goals vs. Open-ended Exploration:"
							name="goalPreference"
							options={[
								{ value: "defined", label: "Clear, defined goals" },
								{ value: "openEnded", label: "Open-ended exploration" },
							]}
							value={formData.goalPreference}
							onChange={handleSelectChange}
							required
						/>
						<TextAreaField
							label="Handling Setbacks or Failures:"
							id="setbacks"
							name="setbacks"
							rows="3"
							value={formData.setbacks}
							onChange={handleTextChange}
							required
						/>
						<RadioGroup
							label="Big-Picture vs. Detail-Oriented:"
							name="thinkingStyle"
							options={[
								{ value: "bigPicture", label: "Big-picture thinker" },
								{ value: "detailOriented", label: "Detail-oriented" },
							]}
							value={formData.thinkingStyle}
							onChange={handleSelectChange}
							required
						/>
						<RadioGroup
							label="Importance of Work-Life Balance:"
							name="workLifeBalance"
							options={[
								{ value: "important", label: "Important" },
								{ value: "notImportant", label: "Not Important" },
							]}
							value={formData.workLifeBalance}
							onChange={handleSelectChange}
							required
						/>
					</div>
				);
			case 7:
				return (
					<div className="space-y-4">
						<h2 className="text-xl font-semibold mb-4 text-left">
							Interdisciplinary Interests
						</h2>
						<InputField
							label="Other Academic Fields of Interest:"
							type="text"
							id="otherFields"
							name="otherFields"
							placeholder="Enter other academic fields"
							value={formData.otherFields}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Global Issues or Causes You’re Passionate About:"
							type="text"
							id="globalIssues"
							name="globalIssues"
							placeholder="Enter global issues or causes"
							value={formData.globalIssues}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Hobbies or Skills Outside Computer Science:"
							type="text"
							id="hobbies"
							name="hobbies"
							placeholder="Enter hobbies or skills"
							value={formData.hobbies}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Interest in AI/ML Projects with Other Disciplines:"
							type="text"
							id="interdisciplinaryProjects"
							name="interdisciplinaryProjects"
							placeholder="Enter interdisciplinary interests"
							value={formData.interdisciplinaryProjects}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Inspiring Non-CS Courses:"
							type="text"
							id="inspiringCourses"
							name="inspiringCourses"
							placeholder="Enter non-CS courses"
							value={formData.inspiringCourses}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Emerging Technologies Exciting to You:"
							type="text"
							id="emergingTech"
							name="emergingTech"
							placeholder="Enter emerging technologies"
							value={formData.emergingTech}
							onChange={handleInputChange}
							required
						/>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
			<div className="container mx-auto p-6">
				<h1 className="text-2xl font-bold mb-6 text-center">
					Comprehensive Form
				</h1>
				<form className="w-3/4 mx-auto">
					<ProgressBar currentPage={currentPage} totalPages={totalPages} />
					{renderPage()}

					<div className="flex justify-between mt-8">
						{currentPage > 1 && (
							<button
								type="button"
								onClick={handlePrevious}
								className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
								Previous
							</button>
						)}
						{currentPage < 7 && (
							<button
								type="button"
								onClick={handleNext}
								className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
								Next
							</button>
						)}
						{currentPage === 7 && (
							<button
								type="submit"
								onClick={handleSubmit}
								className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
								Submit
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
