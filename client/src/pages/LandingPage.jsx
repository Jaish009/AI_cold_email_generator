import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRightIcon, BoltIcon, ChartBarIcon, DocumentTextIcon, SparklesIcon } from '@heroicons/react/24/outline';

const LandingPage = () => {
    const { user } = useAuth();

    const features = [
        {
            name: 'Lightning Fast',
            description: 'Generate highly personalized cold emails in seconds using cutting-edge LLaMA AI models.',
            icon: BoltIcon,
        },
        {
            name: 'Omnichannel Output',
            description: 'Get a cold email, follow-up, and LinkedIn DM perfectly synced — all from one prompt.',
            icon: DocumentTextIcon,
        },
        {
            name: 'Higher Reply Rates',
            description: 'AI-crafted copy with proven outreach frameworks ensures higher open rates and better outcomes.',
            icon: ChartBarIcon,
        },
    ];

    return (
        <div className="min-h-screen bg-dark-950 font-sans">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-600/5 blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]"></div>
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px]"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="ColdMail AI" className="w-9 h-9 rounded-lg" />
                            <span className="text-xl font-bold gradient-text">ColdMail AI</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <Link
                                    to="/dashboard"
                                    className="btn-primary text-sm py-2.5 px-6 rounded-full"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-dark-300 hover:text-white font-medium px-4 py-2 text-sm transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="btn-primary text-sm py-2.5 px-6 rounded-full"
                                    >
                                        Get Started Free
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-primary-400">
                        <SparklesIcon className="w-4 h-4" />
                        <span>Powered by LLaMA 3.3 70B AI</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                        <span className="text-white">Cold Emails That</span>
                        <br />
                        <span className="gradient-text">Actually Get Replies</span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-dark-400 max-w-2xl mx-auto leading-relaxed">
                        Stop wasting hours drafting outreach. Enter your context, and let AI generate the perfect
                        cold email, follow-up, and LinkedIn DM — all at once.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to={user ? "/dashboard" : "/signup"}
                            className="group inline-flex items-center justify-center btn-primary text-base py-4 px-8 rounded-full"
                        >
                            Start Generating for Free
                            <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                        {[
                            { value: '100%', label: 'Free to Use' },
                            { value: '<5s', label: 'Generation Time' },
                            { value: '3-in-1', label: 'Output Types' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-xs text-dark-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="relative py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Everything you need to <span className="gradient-text">close more deals</span>
                        </h2>
                        <p className="text-dark-400 text-lg max-w-xl mx-auto">
                            Built for professionals who demand performance from their outreach.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div key={feature.name} className="glass-card glass-card-hover rounded-2xl p-8">
                                <div className="h-12 w-12 rounded-xl bg-primary-600/10 flex items-center justify-center mb-6">
                                    <feature.icon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">{feature.name}</h3>
                                <p className="text-dark-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent pointer-events-none"></div>
                <div className="max-w-2xl mx-auto px-4 text-center relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to scale your outreach?
                    </h2>
                    <p className="text-dark-400 text-lg mb-10">
                        Join professionals using ColdMail AI to land more meetings and close more deals.
                    </p>
                    <Link
                        to="/signup"
                        className="btn-primary text-base py-4 px-8 rounded-full inline-flex items-center"
                    >
                        Create Free Account
                        <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/5 py-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <img src="/logo.png" alt="ColdMail AI" className="w-6 h-6 rounded" />
                        <span className="text-sm font-semibold gradient-text">ColdMail AI</span>
                    </div>
                    <p className="text-dark-600 text-xs">© {new Date().getFullYear()} ColdMail AI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
