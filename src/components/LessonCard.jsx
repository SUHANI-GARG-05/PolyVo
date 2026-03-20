import React from 'react';
import { PlayCircle, CheckCircle } from 'lucide-react';

export const LessonCard = ({ lesson, index, isCompleted = false }) => {
    return (
        <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-colors cursor-pointer group">
            <div className="mr-4 flex-shrink-0 text-slate-400 group-hover:text-sky-500 dark:text-slate-500 dark:group-hover:text-sky-400">
                {isCompleted ? (
                    <CheckCircle size={24} className="text-green-500" />
                ) : (
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 font-medium text-sm">
                        {index + 1}
                    </span>
                )}
            </div>

            <div className="flex-grow">
                <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {lesson.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {lesson.duration}
                </p>
            </div>

            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-sky-500">
                <PlayCircle size={24} />
            </div>
        </div>
    );
};
