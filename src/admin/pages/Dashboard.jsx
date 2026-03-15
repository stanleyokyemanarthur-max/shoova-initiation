import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { DollarSign, Users, Repeat, BarChart3 } from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/admin/dashboard")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  // Convert backend data for chart
  const monthData = data.recentDonations.map(d => ({
    month: new Date(d.createdAt).toLocaleString("default", { month: "short" }),
    total: d.amount
  }));

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold text-gray-800">
        Fundraising Overview
      </h1>

      {/* Stat Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        <StatCard
          title="Total Raised"
          value={`$${data.totalRaised}`}
          icon={<DollarSign size={28} />}
        />

        <StatCard
          title="Total Donors"
          value={data.totalDonors}
          icon={<Users size={28} />}
        />

        <StatCard
          title="Monthly Donations"
          value={data.monthlyDonors}
          icon={<Repeat size={28} />}
        />

        <StatCard
          title="Average Donation"
          value={`$${Math.round(data.averageDonation)}`}
          icon={<BarChart3 size={28} />}
        />

      </div>

      {/* Donation Growth Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">

        <h2 className="text-xl font-semibold mb-6">
          Recent Donations
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Top Donors */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">

        <h2 className="text-xl font-semibold mb-6">
          Top Donors
        </h2>

        {data.topDonors.map((donor) => (

          <div
            key={donor._id}
            className="flex justify-between py-3 border-b last:border-none"
          >

            <span className="text-gray-700">
              {donor._id}
            </span>

            <span className="font-semibold text-gray-900">
              ${donor.total}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
