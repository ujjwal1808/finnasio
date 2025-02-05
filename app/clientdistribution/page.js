"use client"
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import profile from "../images/Group 48095647.jpg"
import Image from "next/image";
import Calendar from "react-calendar";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";

export default function ProfileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const financialEvents = [
        {
            title: "College Tuition Due",
            details: "Required Amount: $45,000 | Timeline: July 2025",
            actions: "529 distribution planning $35,000, Investment harvest needed $10,000",
            probability: 92,
            buttonText: "Review Strategy",
        },
        {
            title: "Executive Promotion",
            details: "Estimated Cost: $4,150,000 | Timeline: Q3 2025",
            actions: "Budget planning for mortgage/renovation, Evaluate loan options and interest rates",
            probability: 78,
            buttonText: "Plan Ahead",
        },
        {
            title: "Home Purchase",
            details: "Required Amount: $45,000 | Timeline: July 2025",
            actions: "529 distribution planning $35,000, Investment harvest needed $10,000",
            probability: 68,
            buttonText: "Explore Options",
        },
    ];

    const clientNotes = [
        "Aiden is planning a family vacation in June.",
        "His dog Max had surgery.",
        "Celebrated 20 years of marriage this July.",
        "Their second child was born last month.",
    ];


    const datas = [
        { name: "Retirement 2020-2030", percentage: 85, goal: "$500,000", monthly: "$2,500" },
        { name: "Education 2018-2028", percentage: 60, goal: "$150,000", monthly: "$1,000" },
        { name: "Retirement 2023-2026", percentage: 40, goal: "$500,000", monthly: "$500" },
        { name: "Retirement 2023-2026", percentage: 0, goal: "$500,000", monthly: "$500" },
    ];

    const [date, setDate] = useState(new Date());

    const data = [
        { name: "Equities", value: 65 },
        { name: "Fixed Income", value: 25 },
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

            <div className="flex gap-4">
                {/* Calendar Section */}
                <div className="w-3/12">

                    <div className="bg-white bg-opacity-15 rounded-lg p-4 shadow-lg">
                        <Calendar onChange={setDate} value={date} className="w-full text-white text-center" />

                    </div>
                    <div className="mt-4 flex text-xs flex-col space-y-2">
                        <button className="bg-blue-600 p-2 rounded-lg">Schedule Meeting</button>
                        <button className="bg-indigo-600 p-2 rounded-lg">Portfolio Review</button>
                        <button className="bg-yellow-600 p-2 rounded-lg">Update Goals</button>
                        <button className="bg-red-600 p-2 rounded-lg">Contact Clients</button>
                    </div>
                </div>

                {/* Key Alerts */}
                <div className="bg-white bg-opacity-15 rounded-lg p-4 border border-opacity-40 border-white w-3/12 shadow-lg ">
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

                    <div className="mt-4 bg-white bg-opacity-20  p-3 rounded-lg">
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
                <div className="bg-white bg-opacity-15 border border-opacity-40 border-white rounded-lg p-4 w-2/12 shadow-lg">
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
                    <PieChart width={200} height={200} className="mx-auto mt-4" style={{ width: 120, height: 120 }}>
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
                <div className="bg-white bg-opacity-15 border border-opacity-40 border-white rounded-lg p-4 w-4/12 shadow-lg ">
                    <h2 className="text-xl font-semibold mb-4">Relationship Health Score</h2>
                    <div className="flex">

                        <div className="flex flex-col w-full items-center">
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
                            <p className="text-xs text-gray-300 text-center mt-5">Your communication with Aiden Davis is strong. Maintaining consistent touch points can further improve trust .</p>

                        </div>

                        <div className="mt-4 w-full space-y-2 ">
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

            <div className="flex gap-6 mt-4 w-full justify-end">
                {/* Goal Progress */}
                <div className=" bg-white bg-opacity-15 border border-opacity-40 border-white w-6/12 p-4 rounded-lg shadow-md w-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Goal Progress</h2>
                        <FiRefreshCcw className="cursor-pointer text-gray-300" />
                    </div>
                    <hr className="mt-5 opacity-50" />
                    <div className="grid grid-cols-4 gap-6 mt-10 ">
                        {datas.map((item, index) => (
                            <div key={index} className="text-center justify-items-center">
                                <PieChart width={100} height={100}>
                                    <Pie data={[{ value: item.percentage }, { value: 100 - item.percentage }]}
                                        cx="50%" cy="50%" innerRadius={30} outerRadius={45} dataKey="value" startAngle={180}
                                        endAngle={0}>
                                        <Cell fill={COLORS[index % COLORS.length]} />
                                        <Cell fill="#2D1B5C" />
                                    </Pie>
                                </PieChart>
                                <p className="text-white text-xl font-bold">{item.percentage}%</p>
                                <p className="text-[14px] font-bold my-3 ">{item.name}</p>
                                <p className="text-xs text-gray-300">Dual Period {item.name.split(" ")[1]}</p>
                                <p className="text-xs text-gray-300">Monthly Contribution {item.monthly}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Priority Communications */}
                <div className="bg-white bg-opacity-15 p-4 border border-opacity-40 border-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Priority Communications</h2>
                        <FiRefreshCcw className="cursor-pointer text-gray-300" />
                    </div>
                    <hr className="mt-5 opacity-50" />
                    <div className="mt-4 space-y-4">
                        <div className="bg-red-700 p-4 shadow-md rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-white font-bold">Tax Strategy Review</h3>
                                <span className="bg-red-900 px-2 py-1 text-xs rounded-lg">Urgent</span>
                            </div>
                            <p className="text-sm mt-2">Year-end tax planning discussion needed</p>
                            <p className="text-xs text-gray-300 mt-2">Due: Dec 15</p>
                            <p
                                className="text-xs text-gray-300 mt-1 underline cursor-pointer"
                                onClick={() => setIsOpen(true)}
                            >
                                Review Draft
                            </p>

                            {/* Modal */}
                            {isOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-center">
                                    <div className="bg-white p-6 rounded-lg shadow-lg  w-3/6 h-3.5/6">
                                        <h2 className="text-lg text-black font-bold mb-4">Review and Edit Draft</h2>
                                        <textarea className="w-full p-2 border rounded-lg text-sm h-64 text-black"
                                            defaultValue={`Dear Aiden,
With the year-end approaching, it's the perfect time to ensure your tax strategies align with your goals. 
Based on your situation, we’d like to focus on:

1. Reviewing available deductions and deferrals.
2. Optimizing retirement contributions for maximum benefits.
3. Aligning your investments with tax-efficient practices.

Let’s schedule a quick call to finalize these details before December 31st.

Please confirm your availability here: https://calendly.com/d/jordan.sinclair

Best regards,
Jordan Sinclair Senior Financial Advisor`}/>

                                        <div className="flex justify-end mt-4 ">
                                            <button
                                                className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                                Send Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-blue-800 p-4 shadow-md rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-white font-bold">Portfolio Update</h3>
                                <span className="bg-blue-900 px-2 py-1 text-xs rounded-lg">Important</span>
                            </div>
                            <p className="text-sm mt-2">Q4 performance review summary</p>
                            <p className="text-xs text-gray-300 mt-2">Due: Dec 15</p>
                            <p className="text-xs text-gray-300 mt-1 underline cursor-pointer" onClick={() => setIsOpen(true)}>Review Draft</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-6 mt-4 w-full justify-end ">
                <div className=" content-end mr-32 ">
                    <button className="bg-white bg-opacity-20 px-3 py-2  rounded-md flex items-center gap-3 text-lg ">
                    <IoLogOut />

                    Return to Main
                    </button>
                </div>
                {/* Critical Financial Events */}
                <div className="bg-opacity-15 bg-white border border-opacity-40 border-white p-4 col-span-2 rounded-lg shadow-md w-auto text-white">
                    <h2 className="text-2xl font-semibold mb-4">Critical Financial Events</h2>
                    <hr className="my-3 opacity-50" />
                    <div className="space-y-4">
                        {financialEvents.map((event, index) => (
                            <div key={index} className="bg-white bg-opacity-20 p-4 rounded-xl flex  items-center justify-between shadow">
                                <div className="flex items-start space-x-4">
                                    <div className="w-4 h-4 bg-purple-900  rounded-full mt-1"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{event.title}</h3>
                                        <p className="text-sm opacity-80">{event.details}</p>
                                        <p className="text-xs font-semibold mt-2">Required Actions:</p>
                                        <p className="text-sm opacity-80">{event.actions}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <span className="text-xs border-2 border-white px-3 py-1 rounded-lg">{event.probability}% Probability</span>
                                    <button className="bg-purple-400 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md">
                                        {event.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Client Notes */}
                <div className="bg-opacity-15 bg-white p-4 border border-opacity-40 border-white rounded-lg   shadow-md text-white">
                    <h2 className="text-2xl font-semibold mb-4">Client Notes</h2>
                    <hr className="my-3 opacity-50" />
                    <div className="space-y-4">
                        {clientNotes.map((note, index) => (
                            <div key={index} className="flex items-center space-x-4 pl-4">
                                <ul type='disc'>

                                    <li className="text-sm list-disc">{note}</li>
                                </ul>
                            </div>
                        ))}
                        <button className="flex items-center space-x-2 justify-center text-gray-300 hover:text-white mt-4">
                            <span className="text-lg">+</span>
                            <span>Click to add notes</span>
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
}
