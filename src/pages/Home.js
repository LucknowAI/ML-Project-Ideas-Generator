import React, { useState } from 'react';
import InputField from '../components/form/InputField';
import SelectField from '../components/form/SelectField';
import RadioGroup from '../components/form/RadioGroup';
import TextAreaField from '../components/form/TextAreaField';
import ChecklistGroup from '../components/form/CheckListGroup';
import ProgressBar from '../components/form/ProgressBar';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const handleNext = () => {setCurrentPage(prev => Math.min(prev + 1, 7)); window.scrollTo(0, 0);}
  const handlePrevious = () => {setCurrentPage(prev => Math.max(prev - 1, 1)); window.scrollTo(0, 0);};

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">Personal Information</h2>
            <InputField label="Full Name:" type="text" id="name" name="name" placeholder="Enter your full name" required />
            <SelectField
              label="Current Year of Study:"
              id="year"
              name="year"
              options={[
                { value: '1', label: '1st Year' },
                { value: '2', label: '2nd Year' },
                { value: '3', label: '3rd Year' },
                { value: '4', label: '4th Year' },
              ]}
              required
            />
            <InputField label="University:" type="text" id="university" name="university" placeholder="Enter your university name" required />
            <InputField label="Current GPA or Academic Standing:" type="text" id="gpa" name="gpa" placeholder="Enter your current GPA or standing" required />
            <TextAreaField label="Relevant Internships or Work Experiences:" id="internships" name="internships" rows="3" required />
            <InputField label="Primary Areas of Interest within Computer Science:" type="text" id="interestAreas" name="interestAreas" placeholder="Enter your areas of interest" required />
            <InputField label="Specialized Courses in AI, ML, or Data Science:" type="text" id="specializedCourses" name="specializedCourses" placeholder="Enter courses you've taken" required />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">Technical Skills</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              <RadioGroup
                label="Python:"
                name="python"
                options={[
                  { value: '1', label: 'Beginner' },
                  { value: '2', label: 'Intermediate' },
                  { value: '3', label: 'Advanced' },
                ]}
                required
              />
              <RadioGroup
                label="Java:"
                name="java"
                options={[
                  { value: '1', label: 'Beginner' },
                  { value: '2', label: 'Intermediate' },
                  { value: '3', label: 'Advanced' },
                ]}
                required
              />
              <RadioGroup
                label="Web Development:"
                name="webdev"
                options={[
                  { value: '1', label: 'Beginner' },
                  { value: '2', label: 'Intermediate' },
                  { value: '3', label: 'Advanced' },
                ]}
                required
              />
              <RadioGroup
                label="Machine Learning:"
                name="ml"
                options={[
                  { value: '1', label: 'Beginner' },
                  { value: '2', label: 'Intermediate' },
                  { value: '3', label: 'Advanced' },
                ]}
                required
              />
            </div>
            <InputField label="Rate Your Proficiency (1-5):" type="number" id="proficiency" name="proficiency" placeholder="Rate 1-5" required />
            <TextAreaField label="Describe a Challenging Technical Project:" id="challengingProject" name="challengingProject" rows="3" required />
            <InputField label="Open-Source Contributions:" type="text" id="openSource" name="openSource" placeholder="Enter details of open-source contributions" required />
            <InputField label="Familiar Development Methodologies:" type="text" id="methodologies" name="methodologies" placeholder="Enter methodologies" required />
            <InputField label="Experience with AI/ML Techniques:" type="text" id="aiMlTechniques" name="aiMlTechniques" placeholder="Enter AI/ML techniques" required />
            <InputField label="Experience with Big Data Technologies:" type="text" id="bigDataTech" name="bigDataTech" placeholder="Enter big data technologies" required />
            <InputField label="Experience with Software Testing and QA:" type="text" id="testing" name="testing" placeholder="Enter experience with testing and QA" required />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">AI/ML Specific Questions</h2>
            <ChecklistGroup
              label="Areas of AI/ML of Interest:"
              name="aiMlInterest"
              options={[
                { value: 'computerVision', label: 'Computer Vision' },
                { value: 'nlp', label: 'Natural Language Processing' },
                { value: 'reinforcementLearning', label: 'Reinforcement Learning' },
                { value: 'generativeAi', label: 'Generative AI' },
                { value: 'robotics', label: 'Robotics' },
                { value: 'expertSystems', label: 'Expert Systems' },
                { value: 'evolutionaryComputation', label: 'Evolutionary Computation' },
                { value: 'aiEthics', label: 'AI Ethics and Fairness' },
                { value: 'explainableAi', label: 'Explainable AI' },
                { value: 'other', label: 'Other' },
              ]}
              required
            />
            <TextAreaField label="Significant AI/ML Projects:" id="aiMlProjects" name="aiMlProjects" rows="3" required />
            <InputField label="Familiar Machine Learning Algorithms:" type="text" id="mlAlgorithms" name="mlAlgorithms" placeholder="Enter familiar algorithms" required />
            <TextAreaField label="Experience with Deep Learning Architectures:" id="deepLearning" name="deepLearning" rows="3" required />
            <RadioGroup
              label="Interest in Theoretical vs Practical AI/ML Research:"
              name="researchInterest"
              options={[
                { value: 'theoretical', label: 'Theoretical Research' },
                { value: 'practical', label: 'Practical Applications' },
              ]}
              required
            />
            <TextAreaField label="Biggest Challenges in AI/ML:" id="challenges" name="challenges" rows="3" required />
            <TextAreaField label="AI/ML Competitions Experience:" id="competitions" name="competitions" rows="3" required />
            <InputField label="Specific AI/ML Tools or Platforms of Interest:" type="text" id="toolsPlatforms" name="toolsPlatforms" placeholder="Enter tools or platforms" required />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">Career Aspirations</h2>
            <SelectField
              label="Post-Graduation Role:"
              id="postGradRole"
              name="postGradRole"
              options={[
                { value: 'dataScientist', label: 'Data Scientist' },
                { value: 'mlEngineer', label: 'Machine Learning Engineer' },
                { value: 'aiResearcher', label: 'AI Researcher' },
                { value: 'fullStackDeveloper', label: 'Full-stack Developer with AI focus' },
                { value: 'cloudAiArchitect', label: 'Cloud AI Architect' },
                { value: 'aiProductManager', label: 'AI Product Manager' },
                { value: 'other', label: 'Other' },
              ]}
              required
            />
            <InputField label="Specific Companies or Industries of Interest:" type="text" id="companiesIndustries" name="companiesIndustries" placeholder="Enter companies or industries" required />
            <RadioGroup
              label="Considering Further Studies in AI/ML or Related Field:"
              name="furtherStudies"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              required
            />
            <InputField label="Career Vision in 5 Years:" type="text" id="careerVision" name="careerVision" placeholder="Describe your career vision in 5 years" required />
            <TextAreaField label="Aspects of AI/ML That Excite You:" id="aiMlExcitement" name="aiMlExcitement" rows="3" required />
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">Project Preferences</h2>
            <InputField label="Preferred Project Size and Scope:" type="text" id="projectSize" name="projectSize" placeholder="Enter your preferred project size and scope" required />
            <RadioGroup
              label="Interest in Team-based vs Individual Projects:"
              name="teamOrIndividual"
              options={[
                { value: 'team', label: 'Team-based' },
                { value: 'individual', label: 'Individual' },
              ]}
              required
            />
            <RadioGroup
              label="Interest in Startup Potential:"
              name="startupInterest"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              required
            />
            <RadioGroup
              label="Project Focus:"
              name="projectFocus"
              options={[
                { value: 'realWorld', label: 'Real-world Problem' },
                { value: 'theoretical', label: 'Theoretical/Research' },
              ]}
              required
            />
            <InputField label="Specific Industries for Project Focus:" type="text" id="projectIndustry" name="projectIndustry" placeholder="Enter specific industries" required />
            <InputField label="Preferred Data Type for Project:" type="text" id="dataType" name="dataType" placeholder="Enter preferred data types" required />
            <RadioGroup
              label="Interest in Hardware or Software-based Projects:"
              name="hardwareSoftware"
              options={[
                { value: 'hardware', label: 'Hardware Components' },
                { value: 'software', label: 'Software-based' },
              ]}
              required
            />
            <InputField label="Importance of Publication or Patenting:" type="text" id="publicationImportance" name="publicationImportance" placeholder="Describe importance of publication or patenting" required />
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">Psychological Assessment</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
              <RadioGroup
                label="Approach to Problem-Solving:"
                name="problemSolving"
                options={[
                  { value: 'detailedPlanning', label: 'Plan everything in detail' },
                  { value: 'adaptable', label: 'Dive in and figure out as I go' },
                  { value: 'balanced', label: 'Balance planning and adaptability' },
                ]}
                required
              />
              <RadioGroup
                label="Preferred Approach to Challenging Tasks:"
                name="challengingTasks"
                options={[
                  { value: 'breakDown', label: 'Break it into smaller parts' },
                  { value: 'tackleFirst', label: 'Tackle the most difficult aspect first' },
                  { value: 'seekHelp', label: 'Seek help or collaboration' },
                ]}
                required
              />
              <RadioGroup
                label="Preferred Learning Method:"
                name="learningMethod"
                options={[
                  { value: 'handsOn', label: 'Hands-on experimentation' },
                  { value: 'theoryFirst', label: 'Study theory first' },
                  { value: 'discussion', label: 'Discussion and collaboration' },
                ]}
                required
              />
            </div>
            <InputField label="Comfort Level with Ambiguity (1-5):" type="number" id="comfortAmbiguity" name="comfortAmbiguity" placeholder="Rate 1-5" required />
            <RadioGroup
              label="Preference for Defined Goals vs. Open-ended Exploration:"
              name="goalPreference"
              options={[
                { value: 'defined', label: 'Clear, defined goals' },
                { value: 'openEnded', label: 'Open-ended exploration' },
              ]}
              required
            />
            <TextAreaField label="Handling Setbacks or Failures:" id="setbacks" name="setbacks" rows="3" required />
            <RadioGroup
              label="Big-Picture vs. Detail-Oriented:"
              name="thinkingStyle"
              options={[
                { value: 'bigPicture', label: 'Big-picture thinker' },
                { value: 'detailOriented', label: 'Detail-oriented' },
              ]}
              required
            />
            <RadioGroup
              label="Importance of Work-Life Balance:"
              name="workLifeBalance"
              options={[
                { value: 'important', label: 'Important' },
                { value: 'notImportant', label: 'Not Important' },
              ]}
              required
            />
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-left">Interdisciplinary Interests</h2>
            <InputField label="Other Academic Fields of Interest:" type="text" id="otherFields" name="otherFields" placeholder="Enter other academic fields" required />
            <InputField label="Global Issues or Causes You’re Passionate About:" type="text" id="globalIssues" name="globalIssues" placeholder="Enter global issues or causes" required />
            <InputField label="Hobbies or Skills Outside Computer Science:" type="text" id="hobbies" name="hobbies" placeholder="Enter hobbies or skills" required />
            <InputField label="Interest in AI/ML Projects with Other Disciplines:" type="text" id="interdisciplinaryProjects" name="interdisciplinaryProjects" placeholder="Enter interdisciplinary interests" required />
            <InputField label="Inspiring Non-CS Courses:" type="text" id="inspiringCourses" name="inspiringCourses" placeholder="Enter non-CS courses" required />
            <InputField label="Emerging Technologies Exciting to You:" type="text" id="emergingTech" name="emergingTech" placeholder="Enter emerging technologies" required />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Comprehensive Form</h1>
        <form className='w-3/4 mx-auto'>
          <ProgressBar currentPage={currentPage} totalPages={totalPages} />
          {renderPage()}

          <div className="flex justify-between mt-8">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Previous
              </button>
            )}
            {currentPage < 7 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            )}
            {currentPage === 7 && (
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
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
