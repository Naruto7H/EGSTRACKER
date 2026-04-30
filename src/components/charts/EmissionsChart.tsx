"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { monthlyEmissions } from "@/lib/mock-data";

// Custom Tailwind Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-lg transition-colors">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{label}</p>
        <p className="text-base font-bold text-slate-900 dark:text-slate-50">
          {payload[0].value} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">Tons CO2e</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function EmissionsChart() {
  return (
    <div className="h-[350px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={monthlyEmissions} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorScope1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${value}t`} 
          />
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" strokeOpacity={0.2} />
          
          {/* Replaced inline styles with Custom Tooltip */}
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }} 
          />
          
          <Area 
            type="monotone" 
            dataKey="scope1" 
            name="Scope 1 Emissions"
            stroke="#16a34a" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorScope1)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
