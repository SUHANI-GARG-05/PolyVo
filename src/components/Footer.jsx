import React from 'react';
import { Globe, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
            {/* Pre-footer CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-brand-orange rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-orange-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">Start your journey today</h2>
                        <p className="text-orange-100 text-lg max-w-xl">
                            Join 10+ million learners who are mastering a new language with Poly.vo.
                        </p>
                    </div>
                    <div className="relative z-10 flex gap-4">
                        <button className="bg-white text-brand-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-brand-orange text-white p-2 rounded-xl">
                                <Globe size={24} />
                            </div>
                            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                                Poly.vo
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm leading-relaxed">
                            The world's most effective language learning platform. Educational, fun, and accessible to everyone.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-orange hover:shadow-md transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Site Map Columns */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Courses</h3>
                        <ul className="space-y-3">
                            {['English', 'Spanish', 'French', 'German', 'Japanese', 'Hindi'].map(lang => (
                                <li key={lang}>
                                    <Link to={`/courses`} className="text-slate-600 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
                                        Learn {lang}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <MapPin className="mt-1 flex-shrink-0 text-brand-orange" size={18} />
                                <span>123 Learning Ave,<br />Silicon Valley, CA</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <Mail className="flex-shrink-0 text-brand-orange" size={18} />
                                <span>hello@poly.vo</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <Phone className="flex-shrink-0 text-brand-orange" size={18} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Poly.vo Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
