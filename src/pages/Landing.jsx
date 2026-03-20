import React, { useRef, useState } from 'react';
import { DemoModal } from '../components/DemoModal';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Zap, Star, Users, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/Button';
import { CourseCard } from '../components/CourseCard';
import { LanguageCircle } from '../components/LanguageCircle';
import { courses, languages } from '../data/courses';

export const Landing = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div ref={containerRef} className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative px-4 pt-12 pb-20 lg:pt-24 lg:pb-32 bg-brand-warm dark:bg-slate-900 border-b border-orange-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-8 text-center lg:text-left z-10"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-brand-orange font-bold text-sm">
                            <Star size={16} className="fill-brand-orange" />
                            <span>#1 Educational App of 2026</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl leading-[1.1]">
                            Learn a language <br />
                            <span className="text-brand-orange relative whitespace-nowrap">
                                the fun way
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                </svg>
                            </span>.
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="max-w-xl mx-auto lg:mx-0 text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                            Master a new language with bite-sized lessons, game-like progress, and AI-powered personalization. Join millions learning anywhere, anytime.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link to="/courses" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-8 py-4 text-lg bg-brand-orange hover:bg-orange-600 shadow-lg shadow-orange-500/30">
                                    Get Started
                                </Button>
                            </Link>
                            <button onClick={() => setIsDemoOpen(true)} className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-2">
                                    View Demo
                                </Button>
                            </button>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 flex items-center justify-center overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p>Loved by 10,000+ students</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Decorative layout inspired by the reference image */}
                        <div className="relative w-full max-w-md aspect-[4/5] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-32 bg-brand-orange/10 rounded-b-[3rem]"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-brand-orange">
                                        <Globe />
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">PRO</div>
                                </div>
                                <div className="text-center mb-8">
                                    <div className="w-24 h-24 mx-auto bg-brand-yellow rounded-full mb-4 flex items-center justify-center text-5xl shadow-lg border-4 border-white dark:border-slate-700">
                                        🇫🇷
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">French Basics</h3>
                                    <p className="text-slate-500">Daily Streak: 12 days</p>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    {[1, 2, 3].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${i === 0 ? 'bg-brand-orange' : 'bg-slate-300 dark:bg-slate-600'}`}>
                                                {i === 0 ? <Users size={18} /> : i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-slate-200">Lesson {item}</h4>
                                                <p className="text-xs text-slate-400">10 mins • Grammar</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full bg-slate-900 text-white mt-6">Continue</Button>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-10 right-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-xl">🇯🇵</div>
                            <div>
                                <p className="font-bold text-sm">New Course!</p>
                                <p className="text-xs text-slate-500">Japanese added</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <CheckCircle size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Lesson Complete</p>
                                <p className="text-xs text-slate-500">+50 XP Earned</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Language Circle Selection */}
            <section className="py-16 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12 text-slate-900 dark:text-white"
                    >
                        I want to learn...
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {languages.map((lang, index) => (
                            <LanguageCircle key={lang.name} flag={lang.flag} name={lang.name} delay={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-brand-warm dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Poly.vo?</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            We focus on what matters: clear explanations, consistent practice, and visible progress.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {[
                            { icon: Layers, title: "Structured Learning", desc: "Curriculum designed by experts to guide you from basics to fluency step-by-step.", color: "indigo" },
                            { icon: Zap, title: "Fast-Track Progress", desc: "Bite-sized lessons that fit your schedule, helping you learn faster without burnout.", color: "orange" },
                            { icon: Globe, title: "Cultural Insights", desc: "Learn more than just language—understand the culture and context behind the words.", color: "rose" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 text-center group"
                            >
                                <div className={`w-20 h-20 mx-auto mb-6 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 text-${feature.color}-600 dark:text-${feature.color}-400 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="px-4 py-24 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Popular Courses</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Start with our most loved languages</p>
                    </div>
                    <Link to="/courses" className="hidden sm:flex items-center text-brand-orange hover:text-orange-700 font-bold">
                        View all courses <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.slice(0, 3).map((course, i) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CourseCard course={course} />
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 text-center sm:hidden">
                    <Link to="/courses">
                        <Button variant="outline" className="w-full">View all courses</Button>
                    </Link>
                </div>
            </section>
            {/* Demo Modal */}
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </div>
    );
};
