"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { monthlyEmissions } from "@/lib/mock-data";

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
          <Tooltip 
            contentStyle={{ 
              borderRadius: '8px', 
              border: '1px solid #334155', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              color: '#f8fafc'
            }}
            itemStyle={{ color: '#4ade80', fontWeight: 'bold' }}
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
