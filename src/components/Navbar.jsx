import { Moon, Sun, Menu, X, Globe, User, LogOut } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Added useState and useEffect imports

export const Navbar = () => {
    const { user, logout } = useAuth();
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Dashboard', path: '/dashboard' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-brand-orange text-white p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                <Globe size={24} />
                            </div>
                            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                                Poly.vo
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors relative ${isActive(link.path)
                                    ? 'text-brand-orange'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <div className="flex items-center space-x-4 ml-4">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-orange transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-brand-orange">
                                            <User size={18} />
                                        </div>
                                        <span>{user.name}</span>
                                    </button>

                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 py-2">
                                            <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700">
                                                <p className="text-xs text-slate-500">Signed in as</p>
                                                <p className="text-sm font-bold truncate">{user.email}</p>
                                            </div>
                                            <Link to="/dashboard" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">Dashboard</Link>
                                            <button
                                                onClick={logout}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                                            >
                                                <LogOut size={14} />
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <Button variant="ghost" className="hidden lg:inline-flex">Log in</Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button className="bg-brand-orange hover:bg-orange-600 text-white border-transparent">Get Started</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'bg-orange-50 dark:bg-orange-900/20 text-brand-orange'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-2">
                                {user ? (
                                    <>
                                        <div className="px-3 py-2 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-brand-orange">
                                                <User size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900 dark:text-white">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-3 py-2 text-red-600 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex items-center gap-2"
                                        >
                                            <LogOut size={16} /> Sign out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login">
                                            <Button variant="ghost" className="w-full justify-start">Log in</Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white">Get Started</Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
