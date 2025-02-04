"use client"
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import profile from "../images/Group 48095647.jpg"
import Image from "next/image";
import Calendar from "react-calendar";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";

export default function ProfileHeader() {

    const [date, setDate] = useState(new Date());

    const data = [
        { name: "Equities", value: 65 },
        { name: "Fixed Income", value: 25 },
        { name: "Alternatives", value: 10 },
    ];
    const COLORS = ["#00C49F", "#FFBB28", "#0088FE"];

    return (
        <div className="bg-gradient-to-r from-purple-900 to-blue-950 text-white p-6 ">
            <div className="flex justify-between items-center mb-10">

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                    <Image
                        src={profile} // Replace with actual image URL
                        alt="Aiden Davis"
                        className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">Aiden Davis</h2>
                        <p className="text-gray-300">Premium Client</p>
                        {/* Action Buttons */}
                        <div className="mt-5 flex gap-2">
                            <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                                <FaShareAlt /> SHARE
                            </button>
                            <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                                <FaHeart /> FAVOURITES
                            </button>
                        </div>
                    </div>
                </div>

                {/* Portfolio Value Section */}
                <div className="bg-white bg-opacity-15 p-4 rounded-lg shadow-lg w-1.5/5">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-300">Portfolio Value</p>
                        <FiRefreshCcw className="text-gray-400 cursor-pointer" />
                    </div>
                    <hr className="my-2 opacity-50" />
                    <div className="flex gap-14 justify-end">
                        <h2 className="text-green-400 text-3xl font-bold">$ 1,245,890</h2>
                        <p className="bg-green-700 px-2 text-xs py-2 rounded-lg ">
                            ↑ +4.1% Last Quarter
                        </p>
                    </div>
                    <p className="text-gray-400 text-xs mt-1 justify-end">Last Updated: January 2, 2024</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {/* Calendar Section */}
                <div className="w-auto">

                    <div className="bg-white bg-opacity-15 rounded-lg p-4 shadow-lg">
                        <Calendar onChange={setDate} value={date} className="w-full text-white text-center" />

                    </div>
                    <div className="mt-4 flex flex-col space-y-2">
                        <button className="bg-blue-600 p-2 rounded-lg">Schedule Meeting</button>
                        <button className="bg-indigo-600 p-2 rounded-lg">Portfolio Review</button>
                        <button className="bg-yellow-600 p-2 rounded-lg">Update Goals</button>
                        <button className="bg-red-600 p-2 rounded-lg">Contact Clients</button>
                    </div>
                </div>

                {/* Key Alerts */}
                <div className="bg-white bg-opacity-15 rounded-lg p-4 w-auto shadow-lg ">
                    <h2 className="text-lg font-semibold">Key Alerts</h2>

                    <div className="mt-4 bg-white bg-opacity-20 p-3 rounded-lg">
                        <p className="font-bold">Required Distribution Due</p>
                        <p className="text-sm">RMD of $24,500 reached by Dec 31 to avoid penalties.</p>
                        <div className="flex gap-2 mt-2">
                            <button className="bg-gray-800 p-1 rounded-full px-3 py-1 text-xs">Pending</button>
                            <button className="bg-gray-800 p-1 rounded-full px-3 py-1 text-xs">Dismiss</button>
                            <button className="bg-gray-800 p-1 rounded-full px-3 py-1 text-xs">Take Action</button>
                        </div>
                    </div>

                    <div className="mt-4 bg-white bg-opacity-20 p-3 rounded-lg">
                        <p className="font-bold">Required Distribution Due</p>
                        <p className="text-sm">RMD of $24,500 reached by Dec 31 to avoid penalties.</p>
                        <div className="flex gap-2 mt-2">
                            <button className="bg-gray-800 p-1 rounded-full px-3 py-1 text-xs">Pending</button>
                            <button className="bg-gray-800 p-1 rounded-full px-3 py-1 text-xs">Dismiss</button>
                            <button className="bg-gray-800 p-1 rounded-full px-3 py-1 text-xs">Take Action</button>
                        </div>
                    </div>

                </div>

                {/* Portfolio Overview */}
                <div className="bg-white bg-opacity-15 rounded-lg p-4 w-auto shadow-lg">
                    <h2 className="text-lg font-semibold">Portfolio Overview</h2>
                    <div className="flex gap-10 mt-4">
                        <div>
                            <p className="text-green-400 font-bold">+8.4%</p>
                            <p className="text-sm">YTD Return</p>
                        </div>
                        <div>
                            <p className="text-green-400 font-bold">$42,890</p>
                            <p className="text-sm">Income Generated</p>
                        </div>
                    </div>
                    <PieChart width={200} height={200} className="mx-auto mt-4" style={{width:170, height:170}}>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div className="bg-white bg-opacity-20 flex gap-2 rounded-md px-3 py-2 text-xs">
                        <p>Insight:</p>
                        <p>Equity allocation is above target by 5%. Consider rebalancing into Fixed Income.</p>
                    </div>
                </div>

                {/* Relationship Health Score */}
                <div className="bg-white bg-opacity-15 rounded-lg p-4 w-auto shadow-lg ">
                    <h2 className="text-xl font-semibold mb-4">Relationship Health Score</h2>
                    <div className="flex">

                        <div className="flex flex-col items-center">
                            <PieChart width={200} height={200} style={{ width: 100, height: 100 }}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <p className="text-3xl font-bold">85 / 100</p>
                            <p className="text-sm text-gray-300">+5 points since last quarter</p>
                            
                        </div>

                        <div className="mt-4 space-y-2 ">
                            <div className="bg-purple-800 p-2 rounded-md">
                                <p className="text-xs text-gray-300">Last Interaction</p>
                                <p className="font-semibold text-xs">Dec 20, 2024 (Email)</p>
                            </div>
                            <div className="bg-purple-800 p-2 rounded-md">
                                <p className="text-xs text-gray-300">Response Time</p>
                                <p className="font-semibold text-xs">Quarterly</p>
                            </div>
                            <div className="bg-purple-800 p-2 rounded-md">
                                <p className="text-xs text-gray-300">Meeting Frequency</p>
                                <p className="font-semibold text-xs">2 Days Avg.</p>
                            </div>
                            <div className="bg-purple-800 p-2 rounded-md">
                                <p className="text-xs text-gray-300">Outstanding Task</p>
                                <p className="font-semibold text-xs">2 Items</p>
                            </div>
                            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-xs px-4 py-2 rounded-lg shadow-md text-white font-medium">
                                View Details
                            </button>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    );
}
