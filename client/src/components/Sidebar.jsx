import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
    return (
        <div className="w-64 border-r border-white/5 flex flex-col hidden md:flex bg-dark-900/50">
            {/* Brand */}
            <div className="h-16 flex items-center px-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="ColdMail AI" className="w-8 h-8 rounded-lg" />
                    <h1 className="text-base font-bold gradient-text">ColdMail AI</h1>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                            isActive
                                ? 'bg-primary-600/10 text-primary-400 shadow-glow'
                                : 'text-dark-400 hover:text-white hover:bg-white/5'
                        }`
                    }
                >
                    <HomeIcon className="w-5 h-5 mr-3" />
                    Dashboard
                </NavLink>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/5">
                <div className="text-[10px] text-center text-dark-600 font-medium uppercase tracking-widest">
                    Powered by AI
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
