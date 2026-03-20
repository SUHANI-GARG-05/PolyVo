import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book } from 'lucide-react';

export const CourseCard = ({ course }) => {
    return (
        <Link
            to={`/courses/${course.id}`}
            className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full hover:-translate-y-1"
        >
            <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center text-2xl mb-4 shadow-lg shadow-${course.color}/20`}>
                {course.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {course.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                {course.description}
            </p>

            <div className="flex items-center justify-between mt-auto text-sm">
                <div className="flex items-center text-slate-500 dark:text-slate-400">
                    <Book size={16} className="mr-1.5" />
                    <span>{course.lessonsCount} lessons</span>
                </div>
                <span className="inline-flex items-center text-sky-600 dark:text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Start
                    <ArrowRight size={16} className="ml-1" />
                </span>
            </div>
        </Link>
    );
};
