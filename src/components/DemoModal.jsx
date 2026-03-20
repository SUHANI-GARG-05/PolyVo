import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export const DemoModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative aspect-video bg-black group">
                                {/* Placeholder for actual video - using a YouTube embed for "Language Learning" */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/v_7yEPNUXsU?autoplay=1"
                                    title="Poly.vo Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full uppercase tracking-wider">
                                        Product Tour
                                    </span>
                                    <span className="text-slate-400 text-sm">2:30 min</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    Experience the Future of Language Learning
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">
                                    See how Poly.vo adapts to your learning style, tracks your progress, and helps you speak with confidence from day one.
                                </p>

                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                            <Play size={18} fill="currentColor" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Interactive</p>
                                            <p className="text-xs text-slate-500">Real-time feedback</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                            <Play size={18} fill="currentColor" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Gamified</p>
                                            <p className="text-xs text-slate-500">Earn rewards</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                                            <Play size={18} fill="currentColor" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Immersive</p>
                                            <p className="text-xs text-slate-500">Native content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
