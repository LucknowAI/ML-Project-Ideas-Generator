import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-4 rounded">
      <div
        className="bg-blue-500 h-4 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;