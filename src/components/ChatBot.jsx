import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm your Poly.vo assistant. How can I help you learn today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg.text })
            });

            const data = await response.json();

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: data.reply,
                sender: 'bot'
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
                sender: 'bot'
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                className="fixed bottom-6 right-6 w-14 h-14 bg-brand-orange text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-[90vw] sm:w-[380px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50 flex flex-col max-h-[600px] h-[70vh]"
                    >
                        {/* Header */}
                        <div className="bg-brand-orange p-4 flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Bot className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Poly.vo Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-orange-100">Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-800/50">
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-brand-orange text-white rounded-br-none'
                                                : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-600 shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 rounded-xl px-4 py-2">
                                <input
                                    type="text"
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder-slate-500"
                                    placeholder="Type a message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="text-brand-orange hover:text-orange-600 disabled:opacity-50 transition-colors"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-slate-400">AI responses may vary.</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
