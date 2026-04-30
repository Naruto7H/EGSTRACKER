"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Scope 1 (Direct)", value: 845, color: "#16a34a" },   // Green
  { name: "Scope 2 (Energy)", value: 1200, color: "#2563eb" },  // Blue
  { name: "Scope 3 (Supply)", value: 800, color: "#eab308" },   // Yellow
];

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
          <Tooltip 
            contentStyle={{ 
              borderRadius: '8px', 
              border: '1px solid #334155', 
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              color: '#f8fafc'
            }}
            itemStyle={{ fontWeight: 'bold' }}
            formatter={(value) => `${value} Tons`}
          />
          <Legend 
            verticalAlign="bottom" 
            height={48} 
            iconType="circle" 
            wrapperStyle={{ fontSize: '13px', paddingTop: '16px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
