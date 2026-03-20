import React from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { LessonCard } from '../components/LessonCard';
import { Github, Trophy, Flame } from 'lucide-react';
import { courses } from '../data/courses';

export const Dashboard = () => {
    // Mock user progress
    const activeCourse = courses[0]; // Japanese Basics

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Welcome back, Student!</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Active Course Card */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Continue Learning</h2>

                        <div className="flex items-start gap-4 mb-6">
                            <div className={`w-12 h-12 rounded-lg ${activeCourse.color} flex items-center justify-center text-2xl shadow-lg shadow-${activeCourse.color}/20 flex-shrink-0`}>
                                {activeCourse.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-slate-900 dark:text-white">{activeCourse.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Next: {activeCourse.lessons[1].title}</p>
                                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                                    <span>Progress</span>
                                    <span>25%</span>
                                </div>
                                <ProgressBar progress={25} />
                            </div>
                        </div>

                        <button className="w-full py-3 bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400 rounded-xl font-medium hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors">
                            Resume Lesson
                        </button>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Lessons</h2>
                        <div className="space-y-4">
                            {/* Mock completed lessons */}
                            <LessonCard lesson={activeCourse.lessons[0]} index={0} isCompleted={true} />
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Stats */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Your Statistics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                                <div className="flex justify-center text-orange-500 mb-2">
                                    <Flame size={24} />
                                </div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">3</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Day Streak</div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                                <div className="flex justify-center text-yellow-500 mb-2">
                                    <Trophy size={24} />
                                </div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">125</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">XP Earned</div>
                            </div>
                        </div>
                    </div>

                    {/* Daily Goal */}
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-500/20">
                        <h3 className="font-bold mb-2">Daily Goal</h3>
                        <p className="text-indigo-100 text-sm mb-4">You're 15 minutes away from your daily goal!</p>
                        <ProgressBar progress={60} />
                    </div>
                </div>
            </div>
        </div>
    );
};
