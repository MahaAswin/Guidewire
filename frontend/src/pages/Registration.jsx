import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, MapPin, CreditCard, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const Registration = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        platform: 'Swiggy',
        city: 'Bangalore',
        zone: 'Koramangala',
        hours: '10',
        earnings: '6000',
        upi: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2); // Move to calculation simulation
        setTimeout(() => {
            setStep(3); // Show results
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                        <ShieldCheck className="text-white" size={24} />
                    </div>
                    <span className="text-2xl font-bold text-brand-blue">ShieldGig AI</span>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    {step === 1 && (
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Create Your Profile</h2>
                            <p className="text-slate-500 mb-8">Protect your weekly earnings from disruptions.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                                    <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all" placeholder="Enter your name" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Platform</label>
                                        <select name="platform" value={formData.platform} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none bg-white">
                                            <option>Swiggy</option>
                                            <option>Zomato</option>
                                            <option>Zepto</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Delivery Zone</label>
                                        <input required name="zone" value={formData.zone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none" placeholder="e.g. Koramangala" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Avg. Hours/Day</label>
                                        <input required type="number" name="hours" value={formData.hours} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Weekly Target (₹)</label>
                                        <input required type="number" name="earnings" value={formData.earnings} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">UPI ID for Payouts</label>
                                    <input required name="upi" value={formData.upi} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue outline-none" placeholder="name@okaxis" />
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer pt-2">
                                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required className="mt-1 w-4 h-4 rounded text-brand-blue focus:ring-brand-blue" />
                                    <span className="text-sm text-slate-500">I agree to weekly premium deduction based on my risk score.</span>
                                </label>

                                <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 mt-4">
                                    Generate Risk Profile <ChevronRight size={20} />
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="p-16 flex flex-col items-center text-center">
                            <div className="w-20 h-20 border-4 border-slate-100 border-t-brand-blue rounded-full animate-spin mb-6"></div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Analyzing Your Zone...</h2>
                            <p className="text-slate-500">Retrieving historical weather patterns and disruption data for {formData.zone}.</p>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="p-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <CheckCircle2 size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">Insurance Profile Ready</h2>
                            <p className="text-slate-500 text-center mb-8">AI has calculated your risk profile based on current satellite data.</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <span className="text-slate-600 font-medium">AI Risk Score</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-slate-900">0.62</span>
                                        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded uppercase">Moderate</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <span className="text-slate-600 font-medium">Zone Type</span>
                                    <span className="text-slate-900 font-bold">Rain-Prone</span>
                                </div>
                                <div className="p-6 bg-brand-blue/5 rounded-2xl border-2 border-brand-blue/10">
                                    <div className="text-sm text-brand-blue font-bold uppercase tracking-wider mb-1">Recommended Weekly Premium</div>
                                    <div className="text-4xl font-black text-brand-blue">₹48<span className="text-sm font-medium text-slate-400 font-sans"> / week</span></div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button onClick={() => navigate('/dashboard')} className="flex-1 bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-blue/90 transition-all">
                                    Activate Policy
                                </button>
                                <button onClick={() => setStep(1)} className="px-6 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50">
                                    Edit
                                </button>
                            </div>
                            <p className="text-[10px] text-slate-400 text-center mt-6">
                                Premium will be deducted from your first payout of the week.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Registration;
