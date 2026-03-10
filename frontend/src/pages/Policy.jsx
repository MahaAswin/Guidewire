import React from 'react';
import Layout from '../components/Layout';
import {
    ShieldCheck,
    Calendar,
    Wallet,
    Zap,
    Clock,
    CloudRain,
    ThermometerSun,
    Wind,
    Waves,
    Pause,
    RefreshCw
} from 'lucide-react';

const Condition = ({ icon: Icon, label, threshold, color }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color} bg-opacity-10`}>
                <Icon size={18} className={color.replace('bg-', 'text-')} />
            </div>
            <span className="text-sm font-semibold text-slate-700">{label}</span>
        </div>
        <span className="text-sm font-bold text-slate-900">{threshold}</span>
    </div>
);

const Policy = () => {
    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Policy Management</h1>
                <p className="text-slate-500 font-medium">Manage your active coverage and view terms.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {/* Main Policy Card */}
                    <div className="bg-brand-blue rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-brand-blue/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                                    <ShieldCheck size={14} /> Active Policy
                                </div>
                                <h2 className="text-4xl font-black mb-1">Shield+ Lite</h2>
                                <p className="text-white/70 font-medium">Policy ID: SG-2026-03-8821</p>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-white/60 mb-1">Weekly Premium</div>
                                <div className="text-5xl font-black tracking-tighter">₹48</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                            <div>
                                <div className="text-[10px] font-bold text-white/50 uppercase mb-1">Coverage Period</div>
                                <div className="text-sm font-bold">Weekly</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-white/50 uppercase mb-1">Next Renewal</div>
                                <div className="text-sm font-bold">13 Mar 2026</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-white/50 uppercase mb-1">Max Payout</div>
                                <div className="text-sm font-bold">₹3000 / week</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-white/50 uppercase mb-1">Status</div>
                                <div className="text-sm font-bold flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div> Verified
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-4">
                        <button className="flex-1 bg-white border border-slate-200 p-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <Pause size={18} /> Pause Policy
                        </button>
                        <button className="flex-1 bg-brand-blue text-white p-4 rounded-2xl font-bold hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2">
                            <RefreshCw size={18} /> Renew Early
                        </button>
                    </div>
                </div>

                {/* Conditions */}
                <div className="space-y-6">
                    <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 text-white">
                        <h3 className="text-lg font-black mb-6 flex items-center gap-2">
                            <Zap className="text-brand-green" size={20} /> Parametric Triggers
                        </h3>
                        <div className="space-y-3">
                            <Condition icon={CloudRain} label="Heavy Rainfall" threshold="> 50mm" color="bg-blue-500" />
                            <Condition icon={ThermometerSun} label="Extreme Heat" threshold="> 42°C" color="bg-amber-500" />
                            <Condition icon={Wind} label="Air Quality (AQI)" threshold="> 350" color="bg-orange-500" />
                            <Condition icon={Waves} label="Flood Alert" threshold="Level 3" color="bg-cyan-500" />
                        </div>
                        <p className="mt-6 text-[10px] text-white/40 leading-relaxed font-medium">
                            * Triggers are verified using local weather station data and satellite monitoring. Payouts are calculated based on avg. delivery frequency in your zone.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h4 className="text-sm font-black text-slate-900 mb-4">Coverage Insights</h4>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                                <Calendar size={20} />
                            </div>
                            <div className="text-xs text-slate-600 font-medium">Your zone has 12% higher rain risk this week than average.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Policy;
