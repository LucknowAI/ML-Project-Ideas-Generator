import React from 'react';
import InputField from '../components/form/InputField';
import SelectField from '../components/form/SelectField';
import RadioGroup from '../components/form/RadioGroup';

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Project Suggestion System</h1>

      <form id="Home">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
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
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
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

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Project Preferences</h2>
          <RadioGroup
            label="Preferred project type:"
            name="projectType"
            options={[
              { value: 'individual', label: 'Individual' },
              { value: 'group', label: 'Group' },
            ]}
            required
          />
          <SelectField
            label="Preferred project area:"
            id="projectArea"
            name="projectArea"
            options={[
              { value: 'ai', label: 'Artificial Intelligence' },
              { value: 'webApp', label: 'Web Application' },
              { value: 'mobile', label: 'Mobile App Development' },
              { value: 'dataScience', label: 'Data Science' },
              { value: 'security', label: 'Cybersecurity' },
            ]}
            required
          />
          <div className="mb-4">
            <label htmlFor="projectDescription" className="block text-gray-700 text-sm font-bold mb-2">Briefly describe your ideal project:</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="4"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Previous</button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;