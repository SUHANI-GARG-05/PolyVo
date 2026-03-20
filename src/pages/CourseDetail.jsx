import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, CheckCircle2, User, Globe } from 'lucide-react';
import { LessonCard } from '../components/LessonCard';
import { Button } from '../components/Button';
import { courses } from '../data/courses';
import { motion } from 'framer-motion';

export const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find(c => c.id === id);

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Course not found</h2>
                <Link to="/courses">
                    <Button size="lg">Back to Courses</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <Link to="/courses" className="inline-flex items-center text-slate-500 hover:text-brand-orange dark:text-slate-400 dark:hover:text-white mb-8 transition-colors font-medium">
                <ArrowLeft size={20} className="mr-2" />
                Back to Courses
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Course Info */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl">{course.flag}</span>
                            <div className="bg-orange-100 dark:bg-orange-900/30 text-brand-orange px-4 py-1 rounded-full font-bold text-sm tracking-wide uppercase">
                                {course.level}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">{course.title}</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-6 text-slate-500 dark:text-slate-400 mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="text-brand-orange" />
                                <span className="font-medium">20 hours content</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart className="text-brand-orange" />
                                <span className="font-medium">{course.lessonsCount} lessons</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="text-brand-orange" />
                                <span className="font-medium">Native Speakers</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* What you'll learn */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">What you'll learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.features?.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="flex-shrink-0 text-green-500 mt-1" size={20} />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                                </div>
                            )) ||
                                // Fallback if no features defined
                                ["Basic Greetings", "Core Alphabet", "Essential Vocabulary", "Cultural Nuances"].map((f, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="flex-shrink-0 text-green-500 mt-1" size={20} />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{f}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>

                    {/* Curriculum */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Course Curriculum</h2>
                        <div className="space-y-4">
                            {course.lessons.map((lesson, index) => (
                                <LessonCard key={lesson.id} lesson={lesson} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-700"
                        >
                            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-700 rounded-xl mb-6 relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-brand-orange border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <span className="text-3xl font-bold text-brand-orange">Free</span>
                                <span className="text-slate-400 line-through ml-2 text-lg">$49.99</span>
                            </div>

                            <Button className="w-full py-4 text-lg bg-brand-orange hover:bg-orange-600 shadow-lg shadow-orange-500/30 mb-4">
                                Start Learning Now
                            </Button>
                            <p className="text-center text-xs text-slate-500">30-day money-back guarantee</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6"
                        >
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Requirements</h3>
                            <ul className="space-y-3">
                                {course.requirements?.map((req, i) => (
                                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></div>
                                        {req}
                                    </li>
                                )) ||
                                    <li className="text-sm text-slate-600 dark:text-slate-400">No prior experience required</li>
                                }
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
