import { UploadCloud, FileText } from "lucide-react";

export default function DataEntryPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">Data Entry</h2>
        <p className="text-slate-500">Log your monthly utility bills and travel records.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Manual Entry Form */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Log New Entry</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Record Month</label>
              <input type="month" className="mt-1 w-full rounded-md border border-slate-300 p-2 text-sm" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Scope</label>
                <select className="mt-1 w-full rounded-md border border-slate-300 p-2 text-sm bg-white">
                  <option>Scope 1 (Direct)</option>
                  <option>Scope 2 (Energy)</option>
                  <option>Scope 3 (Value Chain)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Value</label>
                <input type="number" placeholder="0.00" className="mt-1 w-full rounded-md border border-slate-300 p-2 text-sm" />
              </div>
            </div>

            <button type="button" className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors">
              Save Record
            </button>
          </form>
        </div>

        {/* Bulk Upload Area */}
        <div className="rounded-xl border bg-white p-6 shadow-sm border-dashed flex flex-col items-center justify-center text-center space-y-3">
          <div className="rounded-full bg-slate-100 p-4">
            <UploadCloud className="h-8 w-8 text-slate-500" />
          </div>
          <div>
            <h3 className="font-semibold">Bulk Upload (CSV)</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-[250px]">
              Drag and drop your utility spreadsheets here, or click to browse.
            </p>
          </div>
          <button className="mt-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Select Files
          </button>
        </div>
      </div>
    </div>
  );
}
