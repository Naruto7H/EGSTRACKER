import { UploadCloud, FileText } from "lucide-react";

export default function DataEntryPage() {
  return (
    <div className="max-w-4xl space-y-6 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Data Entry</h2>
        <p className="text-slate-500 dark:text-slate-400">Log your monthly utility bills and travel records.</p>
      </header>

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
                  <option className="dark:bg-slate-900">Scope 3 (Value Chain)</option>
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

            <button type="button" className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors">
              Save Record
            </button>
          </form>
        </div>

        {/* Bulk Upload Area */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 p-6 flex flex-col items-center justify-center text-center space-y-3 transition-colors hover:border-primary dark:hover:border-primary">
          <div className="rounded-full bg-white dark:bg-slate-800 p-4 shadow-sm">
            <UploadCloud className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Bulk Upload (CSV)</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-[250px]">
              Drag and drop your utility spreadsheets here, or click to browse.
            </p>
          </div>
          <button className="mt-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
            <FileText className="h-4 w-4" />
            Select Files
          </button>
        </div>
      </div>
    </div>
  );
}
