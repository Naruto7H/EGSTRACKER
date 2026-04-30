import { UploadCloud, FileText, CheckCircle2, Clock } from "lucide-react";

const recentLogs = [
  { id: "LOG-001", month: "April 2026", scope: "Scope 2 (Energy)", value: "450 kWh", status: "Verified" },
  { id: "LOG-002", month: "April 2026", scope: "Scope 3 (Travel)", value: "1,200 Miles", status: "Pending" },
  { id: "LOG-003", month: "March 2026", scope: "Scope 1 (Direct)", value: "320 Gallons", status: "Verified" },
];

export default function DataEntryPage() {
  return (
    <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Data Entry</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Log your monthly utility bills and track historical records.</p>
      </header>

      {/* Top Section: Forms */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Manual Entry Form */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
          <h3 className="text-lg font-semibold mb-4 border-b border-slate-100 dark:border-slate-800 pb-2 text-slate-900 dark:text-slate-100">Log New Entry</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Record Month</label>
              <input 
                type="month" 
                className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Scope</label>
                <select className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                  <option className="dark:bg-slate-900">Scope 1 (Direct)</option>
                  <option className="dark:bg-slate-900">Scope 2 (Energy)</option>
                  <option className="dark:bg-slate-900">Scope 3 (Travel)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Value</label>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" 
                />
              </div>
            </div>

            <button type="button" className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors shadow-sm">
              Save Record
            </button>
          </form>
        </div>

        {/* Bulk Upload Area */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-6 flex flex-col items-center justify-center text-center space-y-3 transition-colors hover:border-primary dark:hover:border-primary cursor-pointer group">
          <div className="rounded-full bg-white dark:bg-slate-800 p-4 shadow-sm group-hover:scale-105 transition-transform">
            <UploadCloud className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Bulk Upload (CSV)</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-[250px]">
              Drag and drop your utility spreadsheets here, or click to browse.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Data Table */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Recent Logs</h3>
          <button className="text-sm text-primary font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-slate-950/50 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Log ID</th>
                <th className="px-6 py-3 font-medium">Month</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Input Value</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {recentLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{log.id}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{log.month}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{log.scope}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{log.value}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      log.status === 'Verified' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {log.status === 'Verified' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
