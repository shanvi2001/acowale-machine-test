import { useEffect, useState } from "react";
import api from "../services/api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#8B5CF6",
  "#06B6D4",
  "#10B981",
  "#F97316",
];

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<any>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/analytics/")
      .then((res) => setAnalytics(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!analytics) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  const pieData = analytics.categories.map((item: any) => ({
    name: item.category,
    value: item.count,
  }));

  const filteredFeedback = analytics.recent.filter(
    (item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div className="bg-slate-900 rounded-xl p-6">
          <p className="text-slate-400">Total Feedback</p>
          <h2 className="text-4xl mt-3 font-bold">
            {analytics.total}
          </h2>
        </div>

        {analytics.categories.map((item: any) => (
          <div
            key={item.category}
            className="bg-slate-900 rounded-xl p-6"
          >
            <p className="text-slate-400">{item.category}</p>
            <h2 className="text-4xl mt-3 font-bold">
              {item.count}
            </h2>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-slate-900 rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-5">
            Category Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {pieData.map((_: any, index: number) => (
                  <Cell
                    key={index}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Feedback */}
        <div className="bg-slate-900 rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-5">
            Recent Feedback
          </h2>

          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-5"
          />

          <div className="space-y-4">
            {filteredFeedback.length === 0 ? (
              <p className="text-slate-400">
                No feedback found.
              </p>
            ) : (
              filteredFeedback.map((item: any) => (
                <div
                  key={item.id}
                  className="border border-slate-700 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400 text-sm">
                    {item.category}
                  </p>

                  <p className="text-slate-400 mt-2">
                    {item.comments}
                  </p>

                  <p className="text-xs text-slate-500 mt-2">
                    {item.email}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}