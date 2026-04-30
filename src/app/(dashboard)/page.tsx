import { kpiData } from "@/lib/mock-data";
import { Activity, Leaf, Target } from "lucide-react";
import EmissionsChart from "@/components/charts/EmissionsChart";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Main Overview</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Your company's carbon footprint and ESG metrics.</p>
      </header>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-900 dark:text-slate-200">Total CO2e (Tons)</h3>
            <Activity className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">{kpiData.totalEmissions}</div>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">-4% from last month</p>
        </div>
        
        {/* Card 2 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-900 dark:text-slate-200">Target Progress</h3>
            <Target className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">{kpiData.targetProgress}%</div>
          <div className="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
             <div className="h-2 rounded-full bg-primary transition-all duration-1000 ease-out" style={{ width: `${kpiData.targetProgress}%` }} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-900 dark:text-slate-200">Active Green Projects</h3>
            <Leaf className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">{kpiData.activeProjects}</div>
          <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-1">2 pending review</p>
        </div>
      </div>

      {/* Interactive Chart Section */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
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
    </div>
  );
}
