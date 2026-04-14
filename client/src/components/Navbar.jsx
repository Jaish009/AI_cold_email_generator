import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-dark-950/80 backdrop-blur-xl">
            <div className="text-sm font-medium text-dark-300 hidden md:block">
                Welcome back, <span className="text-white">{user?.name || 'User'}</span>
            </div>
            {/* Mobile Title */}
            <div className="flex items-center gap-2 md:hidden">
                <img src="/logo.png" alt="ColdMail AI" className="w-7 h-7 rounded-lg" />
                <span className="text-sm font-bold gradient-text">ColdMail AI</span>
            </div>

            <button
                onClick={logout}
                className="flex items-center gap-2 text-dark-400 hover:text-red-400 transition-all px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
            >
                <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                <span className="font-medium">Logout</span>
            </button>
        </header>
    );
};

export default Navbar;
