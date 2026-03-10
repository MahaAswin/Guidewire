import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
    Zap,
    CloudRain,
    ThermometerSun,
    Waves,
    Wind,
    CheckCircle2,
    Banknote,
    MapPin,
    ArrowRight
} from 'lucide-react';

const TriggerButton = ({ icon: Icon, label, onClick, color }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
    >
        <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-4 ${color} bg-opacity-10 group-hover:bg-opacity-100 transition-all`}>
            <Icon size={32} className={`${color.replace('bg-', 'text-')} group-hover:text-white transition-all`} />
        </div>
        <span className="text-sm font-black text-slate-800 tracking-tight">{label}</span>
    </button>
);

const Simulation = () => {
    const [status, setStatus] = useState('idle'); // idle, processing, completed
    const [triggerType, setTriggerType] = useState(null);

    const handleTrigger = (type) => {
        setTriggerType(type);
        setStatus('processing');
        setTimeout(() => {
            setStatus('completed');
        }, 3000);
    };

    const reset = () => {
        setStatus('idle');
        setTriggerType(null);
    };

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Claim Simulation</h1>
                <p className="text-slate-500 font-medium">Demo tool to simulate external atmospheric disruptions.</p>
            </div>

            {status === 'idle' && (
                <div className="space-y-8">
                    <div className="bg-slate-900 p-12 rounded-[3.5rem] text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-brand-blue opacity-10 -z-0"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-2">Simulate External Disruption</h3>
                            <p className="text-slate-400 max-w-lg mx-auto mb-12 italic">Target Zone: Bangalore Zone 4 (Koramangala)</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <TriggerButton icon={CloudRain} label="Heavy Rain" color="bg-blue-500" onClick={() => handleTrigger('Heavy Rain')} />
                                <TriggerButton icon={ThermometerSun} label="Heatwave" color="bg-amber-500" onClick={() => handleTrigger('Heatwave')} />
                                <TriggerButton icon={Waves} label="Flood Alert" color="bg-cyan-500" onClick={() => handleTrigger('Flood Alert')} />
                                <TriggerButton icon={Wind} label="Pollution Alert" color="bg-stone-500" onClick={() => handleTrigger('Pollution Alert')} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-2 border-amber-100 p-6 rounded-3xl flex items-start gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-amber-900 uppercase tracking-wider mb-1">Demo Mode</h4>
                            <p className="text-sm text-amber-700 font-medium">Clicking a trigger will simulate immediate AI detection and parametric payout processing for the current worker profile.</p>
                        </div>
                    </div>
                </div>
            )}

            {status === 'processing' && (
                <div className="bg-white p-16 rounded-[3.5rem] border border-slate-100 shadow-2xl flex flex-col items-center justify-center animate-pulse">
                    <div className="w-24 h-24 border-8 border-slate-100 border-t-brand-blue rounded-full animate-spin mb-8"></div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2">AI Claim Processing...</h2>
                    <p className="text-slate-500 text-center max-w-sm">Verifying satellite data for {triggerType} and calculating income loss based on delivery patterns.</p>
                    <div className="mt-8 flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-brand-blue/20 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                    </div>
                </div>
            )}

            {status === 'completed' && (
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-6">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                                <CheckCircle2 size={32} />
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                                <Zap className="text-white" size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Payout Confirmation</div>
                                <div className="text-lg font-black text-slate-900 tracking-tight">Automatic Claim Approved</div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between py-3 border-b border-slate-50">
                                <span className="text-slate-500 font-medium">Disruption Type</span>
                                <span className="text-slate-900 font-bold">{triggerType}</span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-slate-50">
                                <span className="text-slate-500 font-medium">Location</span>
                                <div className="flex items-center gap-2 text-slate-900 font-bold">
                                    <MapPin size={16} className="text-brand-blue" /> Bangalore Zone 4
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                    <div className="text-xs text-slate-400 font-bold mb-1">Expected Deliveries</div>
                                    <div className="text-xl font-bold text-slate-900">24</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                    <div className="text-xs text-slate-400 font-bold mb-1">Actual Deliveries</div>
                                    <div className="text-xl font-bold text-slate-900 text-rose-500">11</div>
                                </div>
                            </div>
                            <div className="p-6 bg-brand-green/5 rounded-2xl border-2 border-brand-green/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black text-brand-green uppercase tracking-widest mb-1">Approved Payout</div>
                                        <div className="text-4xl font-black text-slate-900 font-sans tracking-tighter">₹630</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase">Method</div>
                                        <div className="text-sm font-black text-slate-700 flex items-center gap-1">
                                            <Banknote size={16} /> UPI instant
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={reset} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
                            Reset Simulation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <p className="text-center text-[10px] text-slate-400 font-medium">
                        Simulation powered by ShieldGig AI Real-Time Parametric Engine.
                    </p>
                </div>
            )}
        </Layout>
    );
};

export default Simulation;
