import { kpiData, monthlyEmissions } from "@/lib/mock-data";
import { Activity, Leaf, Target } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">Main Overview</h2>
        <p className="text-slate-500">Your company's carbon footprint and ESG metrics.</p>
      </header>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total CO2e (Tons)</h3>
            <Activity className="h-4 w-4 text-slate-500" />
          </div>
          <div className="text-2xl font-bold">{kpiData.totalEmissions}</div>
          <p className="text-xs text-slate-500">-4% from last month</p>
        </div>
        
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Target Progress</h3>
            <Target className="h-4 w-4 text-slate-500" />
          </div>
          <div className="text-2xl font-bold">{kpiData.targetProgress}%</div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
             <div className="h-2 rounded-full bg-primary" style={{ width: `${kpiData.targetProgress}%` }} />
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Active Green Projects</h3>
            <Leaf className="h-4 w-4 text-slate-500" />
          </div>
          <div className="text-2xl font-bold">{kpiData.activeProjects}</div>
          <p className="text-xs text-slate-500">2 pending review</p>
        </div>
      </div>

      {/* Chart Placeholder / Data Table area */}
      <div className="rounded-xl border bg-white p-6 shadow-sm min-h-[300px] flex items-center justify-center text-slate-400">
        Recharts Graph Component Goes Here (using monthlyEmissions data)
      </div>
    </div>
  );
}
