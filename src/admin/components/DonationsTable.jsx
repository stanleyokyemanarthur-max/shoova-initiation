import React, { useEffect, useState } from "react";

export default function DonationsTable() {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/donations")
      .then(res => res.json())
      .then(data => setDonations(data));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-6">
        All Donations
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b text-gray-500 text-sm">

              <th className="py-3">Donor</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            {donations.map(d => (

              <tr key={d._id} className="border-b hover:bg-gray-50">

                <td className="py-4 font-medium">
                  {d.name || "Anonymous"}
                </td>

                <td>{d.email}</td>

                <td className="font-semibold">
                  ${d.amount}
                </td>

                <td className="capitalize">
                  {d.donationType}
                </td>

                <td>
                  {new Date(d.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
