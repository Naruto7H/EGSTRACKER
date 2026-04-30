import { kpiData } from "@/lib/mock-data";
import { Activity, Leaf, Target } from "lucide-react";
import EmissionsChart from "@/components/charts/EmissionsChart";
import ScopeDonutChart from "@/components/charts/ScopeDonutChart";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Main Overview</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Your company's carbon footprint and ESG metrics.</p>
      </header>

      {/* KPI Cards (Keep your existing 3 KPI cards here) */}
      <div className="grid gap-6 md:grid-cols-3">
         {/* ... Existing KPI Cards ... */}
      </div>

      {/* Charts Section - Now a 2-Column Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* Main Area Chart (Takes up 2 columns on large screens) */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Emissions Trend</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Monthly breakdown of Scope 1 CO2e</p>
            </div>
            <select className="rounded-md border border-slate-300 dark:border-slate-700 p-2 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950 outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
              <option>Last 6 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
          <EmissionsChart />
        </div>

        {/* New Donut Chart (Takes up 1 column) */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors lg:col-span-1">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Scope Breakdown</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">YTD distribution by category</p>
          </div>
          <ScopeDonutChart />
        </div>

      </div>
    </div>
  );
}
