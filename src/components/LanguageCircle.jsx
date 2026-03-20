import React from 'react';
import { motion } from 'framer-motion';

export const LanguageCircle = ({ flag, name, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-slate-800 shadow-md border-2 border-transparent group-hover:border-brand-orange flex items-center justify-center text-3xl sm:text-4xl transition-colors"
            >
                <span className="filter drop-shadow-sm">{flag}</span>
            </motion.div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-brand-orange transition-colors">
                {name}
            </span>
        </motion.div>
    );
};
