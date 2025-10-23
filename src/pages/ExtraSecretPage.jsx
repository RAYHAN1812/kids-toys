import React from 'react';
import useAuth from '../hooks/useAuth';
import DynamicTitle from '../components/shared/DynamicTitle';
import { FaBoxes, FaChartLine, FaClipboardList, FaUsers } from 'react-icons/fa';

const ExtraSecretPage = () => {
    const { user } = useAuth();

    const statsData = [
        {
            title: "Active Listings",
            value: "24",
            desc: "2 new toys added this week",
            icon: <FaBoxes className="text-4xl" />,
            bgColor: "bg-primary text-primary-content"
        },
        {
            title: "Monthly Revenue",
            value: "$1,234",
            desc: "↑ 15% increase from last month",
            icon: <FaChartLine className="text-4xl" />,
            bgColor: "bg-secondary text-secondary-content"
        },
        {
            title: "Pending Orders",
            value: "5",
            desc: "Needs immediate attention",
            icon: <FaClipboardList className="text-4xl" />,
            bgColor: "bg-info text-info-content"
        },
        {
            title: "Customer Rating",
            value: "4.8",
            desc: "Based on 120 reviews",
            icon: <FaUsers className="text-4xl" />,
            bgColor: "bg-success text-success-content"
        }
    ];

    const managementButtons = [
        { label: "Add New Toy", style: "btn-success" },
        { label: "View All Inventory", style: "btn-ghost" },
        { label: "Manage Promotions", style: "btn-warning" },
    ];

    const recentActivity = [
        { icon: "✅", text: "Lego Bricks listing updated (Price adjusted)" },
        { icon: "⭐", text: "New 5-star rating received" },
        { icon: "📦", text: "3 orders shipped" },
    ];

    return (
        <div className="py-10 max-w-7xl mx-auto space-y-12">
            <DynamicTitle title="Seller Dashboard" />

            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-accent mb-2">Toy Seller Dashboard</h1>
                <p className="text-lg text-gray-600">
                    Welcome back, <span className="font-semibold">{user?.displayName || 'Seller'}</span>! Manage your listings and view performance.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, idx) => (
                    <div key={idx} className={`stats shadow-lg rounded-xl p-6 flex flex-col items-center justify-center ${stat.bgColor} transform hover:scale-105 transition-transform`}>
                        <div className="stat-figure mb-3">{stat.icon}</div>
                        <div className="stat-title text-xl">{stat.title}</div>
                        <div className="stat-value text-3xl font-bold">{stat.value}</div>
                        <div className="stat-desc text-sm">{stat.desc}</div>
                    </div>
                ))}
            </div>

            <div className="p-8 bg-base-100 rounded-2xl shadow-xl space-y-6">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Listing Management</h2>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    {managementButtons.map((btn, idx) => (
                        <button key={idx} className={`btn btn-lg ${btn.style} w-full md:w-auto hover:scale-105 transition-transform`}>
                            {btn.label}
                        </button>
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
                    <ul className="space-y-3">
                        {recentActivity.map((act, idx) => (
                            <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-base-200 shadow-sm hover:bg-base-300 transition-colors">
                                <span className="text-2xl">{act.icon}</span>
                                <span>{act.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExtraSecretPage;
