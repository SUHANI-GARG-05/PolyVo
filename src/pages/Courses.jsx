import React, { useState } from 'react';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Explore Catalog</h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">Find the perfect language journey for you</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative max-w-md w-full"
                >
                    <input
                        type="text"
                        placeholder="Search language or skill..."
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-lg shadow-sm transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search size={24} className="absolute left-4 top-4 text-slate-400" />
                </motion.div>
            </div>

            {filteredCourses.length > 0 ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredCourses.map(course => (
                        <motion.div
                            key={course.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <CourseCard course={course} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <div className="text-center py-24 bg-slate-50 dark:bg-slate-800/50 rounded-3xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No courses found</h3>
                    <p className="text-slate-500 dark:text-slate-400">Try searching for 'Spanish' or 'Beginner'</p>
                </div>
            )}
        </div>
    );
};
