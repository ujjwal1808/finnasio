"use client"
import React from 'react';
import { Bell, Search, RefreshCcw, Clock, Home, Users, CreditCard, FileText, Settings, Phone, Mail, PawPrint, Hourglass, RefreshCcwDot, ChevronDown, Users2, BookUser, Cog, LogOut } from 'lucide-react';
import { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import logo from "../images/image 28.png"
import Image from 'next/image';
const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`PV ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const Dashboard = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    const clients = [
        {
            name: 'Aiden Davis',
            type: 'Premium Client',
            amount: 1245890,
            change: 2.3,
            score: 85
        },
        {
            name: 'Lila Prescot',
            type: 'Premium Client',
            amount: 612220,
            change: 1.5,
            score: 77
        },
        {
            name: 'Elijah Caldwel',
            type: 'Premium Client',
            amount: 2014220,
            change: 0.76,
            score: 87
        },
        {
            name: 'Mia Kensington',
            type: 'Premium Client',
            amount: 612290,
            change: 1.9,
            score: 80
        },
        {
            name: 'Mia Kensington',
            type: 'Premium Client',
            amount: 612290,
            change: 1.9,
            score: 80
        },
        {
            name: 'Mia Kensington',
            type: 'Premium Client',
            amount: 612290,
            change: 1.9,
            score: 80
        }
    ];

    const recentActivity = [
        {
            title: 'Portfolio Rebalancing',
            description: 'Completed for Sarah Johnson',
            time: '2 hours ago'
        },
        {
            title: 'Client Call',
            description: '30-min call with Michael Wong',
            time: '5 hours ago'
        }
    ];

    const upcomingTasks = [
        {
            title: 'RMD Processing',
            client: 'Aiden Davis',
            dueDate: 'Due Today',
            status: 'Process'
        },
        {
            title: 'Portfolio Review',
            client: 'Caleb Harrington',
            dueDate: 'Tomorrow',
            status: 'Prepare'
        },
        {
            title: 'Tax Planning',
            client: 'Ava Ellsworth',
            dueDate: '5 Jan',
            status: 'Review'
        }
    ];

    return (
        <>

            <div className="min-h-screen bg-gradient-to-r from-purple-900 to-blue-950">
                {/* Sidebar */}
                <div className="fixed left-3 mt-20 rounded-full  top-0 h-fit w-14 bg-white bg-opacity-15 flex flex-col items-center py-10 space-y-8">
                    <div className="text-white ">
                        <Home className="w-6 h-6" />
                    </div>
                    <div className="text-white/60">
                        <Users className="w-6 h-6" />
                    </div>
                    <div className="text-white/60">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div className="text-white/60">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div className="mt-auto text-white/60">
                        <Settings className="w-6 h-6" />
                    </div>
                </div>
                <div className="fixed top-96 left-3 mt-24 rounded-full  top-0 h-fit w-14 bg-white bg-opacity-15 flex flex-col items-center py-10 space-y-8">
                    <div className="text-white ">
                        <Cog className="w-6 h-6" />
                    </div>
                    <div className="text-white">
                        <LogOut  className="w-6 h-6" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="ml-16 p-4 sm:ml-20 md:ml-24 lg:ml-32">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <Image src={logo} alt="" width={35}/>
                            <h1 className="text-2xl font-bold text-white mb-2 md:mb-0 md:mr-8">Finassio</h1>
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search for Clients, portfolios, or tasks.."
                                    className="bg-purple-800/30 text-white pl-10 pr-4 py-2 rounded-lg w-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Bell className="text-white w-6 h-6" />
                            <div className="text-white text-center">
                                <div className="text-sm">Aiden Davis</div>
                                <div className="text-xs text-gray-300">Senior Advisor</div>
                            </div>
                            <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                        </div>
                    </div>

                    {/* Dashboard Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
                        <div className="flex flex-wrap gap-2">
                            <button className="bg-purple-700/50 text-white px-4 py-1 rounded-full">All</button>
                            <button className="text-gray-300 px-4 py-1">Names</button>
                            <button className="text-gray-300 px-4 py-1">Earnings</button>
                            <button className="text-gray-300 px-4 py-1">Profit</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Client Overview */}
                        <div className="md:col-span-2">
                            <div className="bg-white bg-opacity-10 rounded-xl p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-white font-semibold">Client Overview</h3>
                                    <button className="bg-purple-700/50 text-white px-4 py-1 rounded-lg text-sm">Filter</button>
                                </div>
                                {clients.map((client, index) => (
                                    <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 mb-3 flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-purple-400 rounded-full mr-3"></div>
                                            <div>
                                                <div className="text-white font-semibold">{client.name}</div>
                                                <div className="text-gray-300 text-sm">{client.type}</div>
                                            </div>
                                        </div>
                                        <div className="text-white font-semibold">${client.amount.toLocaleString()}</div>
                                        <div className="text-green-400">+{client.change}%</div>
                                        <div className="relative w-12 h-12">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-white font-bold">{client.score}</div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="p-2 bg-purple-600/50 rounded-lg">
                                                <Phone className="w-4 h-4 text-white" />
                                            </button>
                                            <button className="p-2 bg-purple-600/50 rounded-lg">
                                                <Mail className="w-4 h-4 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Stats and Charts */}
                        <div className="space-y-6">
                            <div className='flex gap-6 w-full'>

                                <div className="bg-purple-800/80 rounded-xl p-6 w-6/12">
                                    <h3 className="text-white font-bold mb-2">TOTAL AUM</h3>
                                    <div className="text-white text-4xl font-bold">$ 74.5M</div>
                                    <div className="text-green-400 text-sm">+4.5% from last month</div>
                                </div>
                                <div className='h-full space-y-6 w-6/12'>
                                    <div className="bg-white bg-opacity-30 rounded-lg h-full p-4 text-lg relative text-white shadow-xl flex items-center gap-4 font-bold">
                                    <RefreshCcwDot />Refresh
                                    </div>
                                    <div className="bg-white bg-opacity-30 rounded-lg h-full p-4 text-lg relative text-white shadow-xl flex items-center gap-4 font-bold">
                                    <ChevronDown /> 3 Months
                                    </div>

                                </div>
                            </div>
                            <div className="flex gap-6 ">
                                {/* Active Clients */}
                                <div className="bg-white bg-opacity-20 rounded-lg p-6 relative text-white shadow-lg">
                                    <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full">
                                        <Users className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold">Active Clients</h3>
                                    <div className="text-4xl font-bold mt-2">47</div>
                                    <div className="text-green-400 text-sm mt-1">▲ +3 from last month</div>
                                </div>

                                {/* Client Satisfaction */}
                                <div className="bg-white bg-opacity-20 rounded-lg p-6 relative text-white shadow-lg">
                                    <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full">
                                        <BookUser className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold">Client Satisfaction</h3>
                                    <div className="text-4xl font-bold mt-2">92%</div>
                                    <div className="text-green-400 text-sm mt-1">▲ +3.5% from Q3</div>
                                </div>

                                {/* Pending Tasks */}
                                <div className="bg-white bg-opacity-20 rounded-lg p-6 relative text-white shadow-lg ">
                                    <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full">
                                        <Hourglass className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold">Due Task</h3>
                                    <div className="text-4xl font-bold mt-2">14</div>
                                    <div className="text-red-400 text-sm mt-1">▼ 4 overdue</div>
                                </div>
                            </div>
                            <div className="bg-white bg-opacity-15 rounded-xl p-3 w-full">
                                <h3 className="text-white font-semibold mb-4">Client Distribution</h3>
                                <div className="relative w-full h-48 flex justify-center items-center">
                                    <PieChart width={400} height={400}>
                                        <Pie
                                            activeIndex={activeIndex}
                                            activeShape={renderActiveShape}
                                            data={data}
                                            cx={200}
                                            cy={200}
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#3CC62A"
                                            dataKey="value"
                                            onMouseEnter={onPieEnter}
                                        />
                                    </PieChart>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Sections */}
                    <div className="grid grid-cols-2  gap-6 mt-6 ">
                        {/* Recent Activity */}
                        <div className="bg-white bg-opacity-15 rounded-xl p-6 ">
                            <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start mb-4">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <div className="text-white font-semibold">{activity.title}</div>
                                        <div className="text-white-400 text-sm">{activity.description}</div>
                                        <div className="text-gray-500 text-xs">{activity.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Upcoming Tasks */}
                        <div className="bg-white bg-opacity-15 rounded-xl p-6 ">
                            <h3 className="text-white font-semibold mb-4">Upcoming Task</h3>
                            {upcomingTasks.map((task, index) => (
                                <div key={index} className="flex items-center justify-between mb-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <div className="text-white font-semibold">{task.title}</div>
                                            <div className="text-white text-sm">{task.client} - {task.dueDate}</div>
                                        </div>
                                    </div>
                                    <button className="bg-white bg-opacity-25 text-white px-4 py-1 rounded-lg text-sm">
                                        {task.status}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Dashboard;