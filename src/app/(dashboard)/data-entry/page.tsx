"use client";

import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, Clock, Loader2 } from "lucide-react";

const recentLogs = [
  { id: "LOG-001", month: "April 2026", scope: "Scope 2 (Energy)", value: "450 kWh", status: "Verified" },
  { id: "LOG-002", month: "April 2026", scope: "Scope 3 (Travel)", value: "1,200 Miles", status: "Pending" },
  { id: "LOG-003", month: "March 2026", scope: "Scope 1 (Direct)", value: "320 Gallons", status: "Verified" },
];

export default function DataEntryPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setUploadComplete(false);
    // Simulate a network upload delay
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      setTimeout(() => setUploadComplete(false), 3000); // Reset after 3s
    }, 2000);
  };

  return (
    <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Data Entry</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Log your monthly utility bills and track historical records.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Manual Entry Form */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
          <h3 className="text-lg font-semibold mb-4 border-b border-slate-100 dark:border-slate-800 pb-2 text-slate-900 dark:text-slate-100">Log New Entry</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Record Month</label>
              <input type="month" className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Scope</label>
                <select className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 transition-colors">
                  <option className="dark:bg-slate-900">Scope 1 (Direct)</option>
                  <option className="dark:bg-slate-900">Scope 2 (Energy)</option>
                  <option className="dark:bg-slate-900">Scope 3 (Travel)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Value</label>
                <input type="number" placeholder="0.00" className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 transition-colors" />
              </div>
            </div>
            <button type="button" className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors shadow-sm">
              Save Record
            </button>
          </form>
        </div>

        {/* Interactive Bulk Upload Area */}
        <div 
          onClick={() => fileInputRef.current?.click()}
          className={`rounded-xl border-2 border-dashed p-6 flex flex-col items-center justify-center text-center space-y-3 transition-all cursor-pointer relative overflow-hidden
            ${uploadComplete ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-primary'}`}
        >
          <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleSimulatedUpload}
            accept=".csv,.xlsx"
          />
          
          {isUploading ? (
            <div className="flex flex-col items-center animate-in zoom-in duration-300">
              <Loader2 className="h-10 w-10 text-primary animate-spin mb-2" />
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Processing file...</p>
            </div>
          ) : uploadComplete ? (
            <div className="flex flex-col items-center animate-in zoom-in duration-300">
              <CheckCircle2 className="h-10 w-10 text-green-500 mb-2" />
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Upload Successful!</p>
            </div>
          ) : (
            <>
              <div className="rounded-full bg-white dark:bg-slate-800 p-4 shadow-sm hover:scale-105 transition-transform">
                <UploadCloud className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Bulk Upload (CSV)</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-[250px]">
                  Click here to simulate uploading your utility spreadsheets.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Section: Data Table */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Recent Logs</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-slate-950/50 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Log ID</th>
                <th className="px-6 py-3 font-medium">Month</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Value</th>
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
                      log.status === 'Verified' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {log.status === 'Verified' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />} {log.status}
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
