import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useAuth();

    const userId = location.state?.userId;
    const email = location.state?.email;

    if (!userId) {
        navigate('/signup');
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await api.post('/auth/verify-otp', { userId, otp });
            login(data);
            toast.success('Email verified successfully!');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Verification failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark-950 bg-mesh flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary-600/10 flex items-center justify-center">
                        <ShieldCheckIcon className="w-8 h-8 text-primary-400" />
                    </div>
                </div>
                <h2 className="text-center text-3xl font-bold text-white">Verify your email</h2>
                <p className="mt-3 text-center text-sm text-dark-400">
                    We sent a 6-digit code to <span className="font-medium text-primary-400">{email}</span>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="glass-card rounded-2xl py-8 px-6 sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-dark-300 text-center mb-3">Enter OTP</label>
                            <input
                                type="text"
                                required
                                maxLength={6}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                className="input-dark text-center text-3xl tracking-[0.5em] font-mono py-4"
                                placeholder="••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || otp.length !== 6}
                            className="w-full btn-primary py-3 rounded-xl text-sm"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                </span>
                            ) : 'Verify Email'}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-xs text-dark-600">
                        Check your spam folder if you don't see the email
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
