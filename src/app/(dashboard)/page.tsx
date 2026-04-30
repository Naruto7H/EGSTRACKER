import { kpiData } from "@/lib/mock-data";
import { Activity, Leaf, Target } from "lucide-react";
import EmissionsChart from "@/components/charts/EmissionsChart";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Main Overview</h2>
        <p className="text-slate-500 mt-1">Your company's carbon footprint and ESG metrics.</p>
      </header>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* ... (Keep the existing 3 KPI cards here) ... */}
      </div>

      {/* Interactive Chart Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Emissions Trend</h3>
            <p className="text-sm text-slate-500">Monthly breakdown of Scope 1 CO2e</p>
          </div>
          <select className="rounded-md border border-slate-300 p-2 text-sm text-slate-600 bg-white outline-none focus:ring-2 focus:ring-primary/20">
            <option>Last 6 Months</option>
            <option>Year to Date</option>
          </select>
        </div>
        <EmissionsChart />
      </div>
    </div>
  );
}
