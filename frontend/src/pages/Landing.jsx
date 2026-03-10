import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CloudRain, ThermometerSun, AlertCircle, Banknote, BarChart3, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
            <Icon className="text-brand-green" size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const Landing = () => {
    return (
        <div className="bg-white font-sans overflow-x-hidden">
            {/* Header */}
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                        <ShieldCheck className="text-white" size={24} />
                    </div>
                    <span className="text-2xl font-bold text-brand-blue tracking-tight">ShieldGig AI</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#how-it-works" className="hover:text-brand-blue transition-colors">How It Works</a>
                    <a href="#coverage" className="hover:text-brand-blue transition-colors">Coverage</a>
                    <Link to="/register" className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all">
                        Join the Waitlist
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-16 pb-24 md:pt-32 md:pb-48 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 rounded-full text-brand-blue text-sm font-semibold mb-6">
                            <Zap size={14} className="fill-brand-blue" />
                            AI-Powered Parametric Insurance
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                            AI Insurance for India's <span className="text-brand-blue">Delivery Heroes.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            ShieldGig AI automatically detects heavy rain, extreme heat, and disruptions to protect your weekly income. No paperwork, just instant payouts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/register" className="bg-brand-blue text-white text-center px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-blue/25 hover:scale-105 active:scale-95 transition-all">
                                Get Started
                            </Link>
                            <Link to="/dashboard" className="bg-white border-2 border-slate-200 text-slate-700 text-center px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-300 transition-all flex items-center justify-center gap-2 group">
                                View Demo
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 right-0 w-full h-full bg-brand-blue rounded-[3rem] rotate-3 opacity-5 -z-10 translate-x-8 translate-y-8"></div>
                        <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl overflow-hidden border-8 border-white">
                            <img src="https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=2070&auto=format&fit=crop"
                                alt="Delivery partner illustration"
                                className="w-full h-auto rounded-[2.5rem]"
                            />
                        </div>
                        {/* Floating UI Elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 animate-bounce-slow">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <CloudRain size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Detection</div>
                                <div className="text-sm font-bold text-slate-800">Heavy Rain Confirmed</div>
                            </div>
                        </div>
                        <div className="absolute top-12 -right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 animate-float hidden md:flex">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Banknote size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Payout</div>
                                <div className="text-sm font-bold text-slate-800">₹630 Transferred</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="coverage" className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Why Partners Trust ShieldGig AI</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our AI monitors local weather and environmental conditions in real-time to trigger instant protection.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={ShieldCheck}
                        title="AI Risk Protection"
                        description="Our algorithms predict disruption risks in your specific delivery zone before they happen."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Automatic Claims"
                        description="Completely parametric. High rain or heat triggers payouts automatically—no form filling."
                    />
                    <FeatureCard
                        icon={BarChart3}
                        title="Weekly Pricing"
                        description="Affordable insurance aligned with your weekly earnings. Pay small, protect big."
                    />
                    <FeatureCard
                        icon={Banknote}
                        title="Instant Payout"
                        description="Receive your compensation directly to your UPI ID within minutes of the disruption alert."
                    />
                </div>
            </section>
        </div>
    );
};

export default Landing;
