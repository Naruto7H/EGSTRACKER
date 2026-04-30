"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Scope 1 (Direct)", value: 845, color: "#16a34a" },
  { name: "Scope 2 (Energy)", value: 1200, color: "#2563eb" },
  { name: "Scope 3 (Supply)", value: 800, color: "#eab308" },
];

// Custom Tailwind Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-lg transition-colors">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{payload[0].name}</p>
        </div>
        <p className="text-base font-bold text-slate-900 dark:text-slate-50 ml-5">
          {payload[0].value} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">Tons</span>
        </p>
      </div>
    );
  }
  return null;
};

// Custom Tailwind Legend
const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm mt-2">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default function ScopeDonutChart() {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius="55%"
            outerRadius="80%"
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          
          {/* Replaced inline styles with Custom Components */}
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderLegend} verticalAlign="bottom" />
          
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
