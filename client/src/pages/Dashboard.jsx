import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import api from '../utils/api';
import { ClipboardDocumentIcon, CheckIcon, SparklesIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [copied, setCopied] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setLoading(true);
        try {
            const { data } = await api.post('/ai/generate-email', { prompt });
            setResult(data);
            toast.success('Successfully generated!');
        } catch (error) {
            toast.error('Failed to generate. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        toast.success('Copied to clipboard!');
        setTimeout(() => setCopied(''), 2000);
    };

    const ResultCard = ({ title, content, type, accent }) => (
        <div className="glass-card rounded-xl p-5 mb-4 glass-card-hover group">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${accent}`}></div>
                    <h3 className="font-medium text-white text-sm">{title}</h3>
                </div>
                <button
                    onClick={() => copyToClipboard(content, type)}
                    className="text-dark-500 hover:text-primary-400 transition-colors p-1.5 rounded-lg hover:bg-white/5"
                    title="Copy"
                >
                    {copied === type ? (
                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                    ) : (
                        <ClipboardDocumentIcon className="w-4 h-4" />
                    )}
                </button>
            </div>
            <p className="text-sm text-dark-300 whitespace-pre-wrap leading-relaxed">{content}</p>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 h-[calc(100vh-5rem)]">
            {/* Input Section */}
            <div className="w-full lg:w-[380px] shrink-0 glass-card rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                    <SparklesIcon className="w-5 h-5 text-primary-400" />
                    <h2 className="text-base font-semibold text-white">New Campaign</h2>
                </div>

                <form onSubmit={handleGenerate} className="flex-1 flex flex-col">
                    <label className="text-xs font-medium text-dark-400 mb-2 uppercase tracking-wider">Your Prompt</label>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="input-dark flex-1 resize-none text-sm leading-relaxed"
                        placeholder="e.g. Write a cold email to a VP of Engineering at a Series B startup about our AI analytics platform that reduces churn by 30%..."
                    />
                    <button
                        type="submit"
                        disabled={loading || !prompt.trim()}
                        className="mt-4 w-full btn-primary py-3 rounded-xl text-sm flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </span>
                        ) : (
                            <>
                                <PaperAirplaneIcon className="w-4 h-4" />
                                Generate Output
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Output Section */}
            <div className="flex-1 flex flex-col overflow-y-auto pr-1">
                {result ? (
                    <div>
                        <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            AI Results
                        </h2>
                        <ResultCard title="📧 Subject Line" content={result.subject} type="subject" accent="bg-primary-400" />
                        <ResultCard title="📝 Cold Email" content={result.emailBody} type="email" accent="bg-cyan-400" />
                        <ResultCard title="💬 LinkedIn DM" content={result.linkedInDM} type="linkedin" accent="bg-indigo-400" />
                        <ResultCard title="🔄 Follow-up Email" content={result.followUpEmail} type="followup" accent="bg-violet-400" />
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center glass-card rounded-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-primary-600/10 flex items-center justify-center mb-5">
                            <PaperAirplaneIcon className="w-8 h-8 text-primary-500/50" />
                        </div>
                        <p className="text-dark-500 text-sm font-medium">Enter a prompt to generate AI outputs</p>
                        <p className="text-dark-600 text-xs mt-2">Cold email • LinkedIn DM • Follow-up</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
