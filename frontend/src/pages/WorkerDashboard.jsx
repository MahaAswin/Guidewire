import React from 'react';
import Layout from '../components/Layout';
import {
    ShieldCheck,
    TrendingUp,
    Activity,
    AlertCircle,
    Clock,
    CloudRain,
    ThermometerSun,
    Wind
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                <Icon size={24} className="text-white" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</span>
        </div>
        <div className="text-2xl font-black text-slate-900">{value}</div>
        <div className="text-sm text-slate-500 mt-1">{subtext}</div>
    </div>
);

const AlertItem = ({ icon: Icon, title, time, status, color }) => (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-sm hover:shadow-md transition-shadow">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
            <Icon size={18} className="text-white" />
        </div>
        <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900">{title}</h4>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                <Clock size={10} />
                {time}
            </div>
        </div>
        <div className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-tighter">
            {status}
        </div>
    </div>
);

const WorkerDashboard = () => {
    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Earnings Protected (₹)',
                data: [1200, 1500, 1100, 1800, 1600, 2200, 2500],
                fill: true,
                borderColor: '#1E3A8A',
                backgroundColor: 'rgba(30, 58, 138, 0.05)',
                tension: 0.4,
                pointBackgroundColor: '#1E3A8A',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
            }
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1E3A8A',
                padding: 12,
                cornerRadius: 12,
                titleFont: { size: 12, weight: 'bold' },
                bodyFont: { size: 14 },
            }
        },
        scales: {
            y: { display: false },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8', font: { size: 11, weight: '600' } }
            }
        }
    };

    return (
        <Layout>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Worker Dashboard</h1>
                    <p className="text-slate-500 font-medium">Welcome back, John! Your coverage is active.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200 flex items-center gap-2">
                        <Activity size={14} /> LIVE MONITORING
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <StatCard title="Active Policy" value="Shield+ Lite" subtext="Renewal in 3 days" icon={ShieldCheck} color="bg-brand-blue" />
                <StatCard title="Weekly Premium" value="₹48" subtext="Deducted Mon 9:00 AM" icon={TrendingUp} color="bg-brand-green" />
                <StatCard title="Income Protected" value="₹12,500" subtext="Limit: ₹15,000/mo" icon={Activity} color="bg-amber-500" />
                <StatCard title="Claims Triggered" value="1" subtext="Last: 03 March 2026" icon={AlertCircle} color="bg-rose-500" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Earnings Chart */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">Weekly Earnings Protected</h3>
                        <div className="text-sm font-bold text-brand-blue">View History</div>
                    </div>
                    <div className="flex-1 w-full">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>

                {/* Disruption Alerts */}
                <div className="bg-slate-900/5 p-8 rounded-[2.5rem] border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">Active Disruption Alerts</h3>
                        <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></div>
                    </div>
                    <div className="space-y-4">
                        <AlertItem icon={CloudRain} title="Heavy Rain in Koramangala" time="Active for 45 mins" status="COVERED" color="bg-brand-blue" />
                        <AlertItem icon={Wind} title="High AQI (380) in Indiranagar" time="Detected 2 hours ago" status="MONITORING" color="bg-slate-400" />
                        <AlertItem icon={ThermometerSun} title="Heatwave Warning" time="Expected Tomorrow" status="PLANNED" color="bg-amber-500" />
                    </div>

                    <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                        <div className="relative z-10">
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Did You Know?</div>
                            <p className="text-sm text-slate-700 font-medium leading-relaxed italic">"During heavy rain, delivery times increase by 40% on average in Bangalore."</p>
                            <div className="mt-4 text-xs font-bold text-brand-blue">— ShieldGig AI Insights</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WorkerDashboard;
