import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyOtp from './pages/VerifyOtp';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import { useAuth } from './context/AuthContext';

function App() {
    const { user, loading } = useAuth();

    if (loading) return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <svg className="animate-spin h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-dark-500 text-sm">Loading...</span>
            </div>
        </div>
    );

    return (
        <Router>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />

                {/* Protected Routes */}
                <Route path="/dashboard" element={user ? <Layout /> : <Navigate to="/login" />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
