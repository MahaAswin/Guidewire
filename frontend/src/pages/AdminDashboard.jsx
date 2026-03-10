import React from 'react';
import Layout from '../components/Layout';
import {
    Users,
    ShieldCheck,
    AlertCircle,
    Zap,
    ChevronRight,
    TrendingDown,
    Navigation,
    Loader2
} from 'lucide-react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminStat = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
        <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${color}`}></div>
        <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color} bg-opacity-10 text-slate-900`}>
                <Icon size={24} className={color.replace('bg-', 'text-')} />
            </div>
            <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</div>
                <div className="text-2xl font-black text-slate-900">{value}</div>
            </div>
        </div>
        <div className={`text-xs font-bold ${change.startsWith('+') ? 'text-green-500' : 'text-rose-500'}`}>
            {change} <span className="text-slate-400 font-medium">vs last week</span>
        </div>
    </div>
);

const RiskZone = ({ name, risk, color }) => (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${color}`}></div>
            <span className="text-sm font-bold text-slate-700">{name}</span>
        </div>
        <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">{risk} Risk</span>
    </div>
);

const AdminDashboard = () => {
    const chartData = {
        labels: ['Rain', 'Heat', 'Pollution', 'Flood'],
        datasets: [
            {
                data: [45, 25, 20, 10],
                backgroundColor: [
                    '#1E3A8A', // Rain
                    '#F59E0B', // Heat
                    '#78716C', // Pollution
                    '#06B6D4', // Flood
                ],
                borderWidth: 0,
                hoverOffset: 12,
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    font: { size: 12, weight: '700' },
                    color: '#64748b'
                }
            }
        },
        cutout: '70%',
        maintainAspectRatio: false,
    };

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Analytics</h1>
                <p className="text-slate-500 font-medium">Platform-wide performance and risk monitoring.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <AdminStat title="Total Workers" value="1,240" change="+12.4%" icon={Users} color="bg-brand-blue" />
                <AdminStat title="Active Policies" value="98.2%" change="+1.2%" icon={ShieldCheck} color="bg-brand-green" />
                <AdminStat title="Claims Today" value="42" change="+140%" icon={Zap} color="bg-amber-500" />
                <AdminStat title="Fraud Alerts" value="3" change="-40%" icon={AlertCircle} color="bg-rose-500" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Claims Breakdown */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight mb-8 self-start">Claims by Disruption</h3>
                    <div className="h-64 w-full relative">
                        <Doughnut data={chartData} options={chartOptions} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-black text-slate-900">42</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Claims</span>
                        </div>
                    </div>
                </div>

                {/* Risk Map Mock */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">Active Risk Zones</h3>
                        <Navigation size={18} className="text-slate-400" />
                    </div>

                    <div className="space-y-3 mb-8">
                        <RiskZone name="Koramangala Zone 4" risk="High" color="bg-rose-500" />
                        <RiskZone name="Indiranagar Sector 2" risk="Moderate" color="bg-amber-500" />
                        <RiskZone name="HSR Layout Phase 1" risk="Low" color="bg-green-500" />
                        <RiskZone name="Whitefield Zone 7" risk="High" color="bg-rose-500" />
                    </div>

                    <div className="p-6 bg-slate-900 rounded-3xl relative overflow-hidden group cursor-pointer">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500"></div>
                        <div className="relative z-10 flex items-center justify-between text-white">
                            <div>
                                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Live Feed</div>
                                <div className="text-sm font-bold">Bangalore Heat Index</div>
                            </div>
                            <ChevronRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Fraud Panel */}
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
                    <div className="flex items-center gap-2 mb-8">
                        <TrendingDown size={18} className="text-rose-500" />
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">Fraud Detection Feed</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-white rounded-2xl border-l-4 border-rose-500 shadow-sm">
                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">POSSIBLE GPS SPOOFING</div>
                            <div className="text-sm font-bold text-slate-900">Worker #8821 (Bangalore)</div>
                            <div className="mt-2 flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded uppercase">Flagged</span>
                                <span className="text-[10px] text-slate-400">12 mins ago</span>
                            </div>
                        </div>

                        <div className="p-4 bg-white rounded-2xl border-l-4 border-amber-500 shadow-sm opacity-60">
                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">DUPLICATE CLAIM ATTEMPT</div>
                            <div className="text-sm font-bold text-slate-900">Worker #4492 (Indiranagar)</div>
                            <div className="mt-2 flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">Under Review</span>
                                <span className="text-[10px] text-slate-400">54 mins ago</span>
                            </div>
                        </div>

                        <button className="w-full py-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                            View All Security Logs
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
