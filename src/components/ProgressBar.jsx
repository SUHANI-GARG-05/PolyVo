import React from 'react';

export const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
            <div
                className="bg-sky-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};
