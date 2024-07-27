import React from 'react';

const ProgressBar = ({ currentPage, totalPages }) => {
    const percentage = ((currentPage - 1) / (totalPages - 1)) * 100;

    return (
        <div className="relative w-full mb-6">
            {/* Circles with Page Numbers */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <div
                        key={i}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${i + 1 <= currentPage
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-white border-gray-300 text-gray-500'
                            }`}
                    >
                        <span className="text-sm">{i + 1}</span>
                    </div>
                ))}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-300 h-2">
                <div
                    className="bg-blue-600 h-2"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;