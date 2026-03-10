import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Zap,
    BarChart3,
    ShieldCheck,
    Menu,
    X
} from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(true);

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Policy', path: '/policy', icon: FileText },
        { name: 'Simulation', path: '/simulation', icon: Zap },
        { name: 'Admin', path: '/admin', icon: BarChart3 },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="px-6 py-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                            <ShieldCheck className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-bold text-brand-blue tracking-tight">ShieldGig AI</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-2 mt-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-brand-blue/5 text-brand-blue font-semibold'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }`
                                }
                            >
                                <item.icon size={20} />
                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Bottom Profile Mock */}
                    <div className="p-4 border-t border-slate-100">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                JD
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-sm font-medium text-slate-900 truncate">John Delivery</span>
                                <span className="text-xs text-slate-500 truncate">Swiggy Partner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
