import React from "react";

export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="text-2xl font-bold mt-2 text-gray-800">
            {value}
          </h3>
        </div>

        <div className="text-gray-400">
          {icon}
        </div>

      </div>

    </div>
  );
}
