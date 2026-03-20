import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const result = await login(formData.email, formData.password);

        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-warm dark:bg-slate-900 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700"
            >
                <div className="flex justify-center mb-8">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-brand-orange text-white p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                            <Globe size={32} />
                        </div>
                    </Link>
                </div>

                <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-2">Welcome Back</h2>
                <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Log in to continue your learning journey</p>

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all dark:text-white"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all dark:text-white"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                        />
                    </div>

                    <Button
                        className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Log In'}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
                    Don't have an account? {' '}
                    <Link to="/signup" className="text-brand-orange font-bold hover:underline">
                        Sign up
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
