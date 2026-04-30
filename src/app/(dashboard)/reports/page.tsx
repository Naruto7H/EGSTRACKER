"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Download, FileText } from "lucide-react";
import { kpiData } from "@/lib/mock-data";

export default function ReportsPage() {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ESG_Compliance_Report",
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Compliance Reports</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Generate and export official ESG documentation.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm active:scale-95"
        >
          <Download className="h-4 w-4" />
          Export to PDF
        </button>
      </header>

      {/* The Printable Area Wrapper */}
      <div className="bg-slate-200 dark:bg-slate-800/50 p-4 md:p-8 rounded-xl overflow-x-auto flex justify-center border border-slate-200 dark:border-slate-800 transition-colors">
        
        {/* A4 Paper Styling - Forces LIGHT MODE styles even when dashboard is in Dark Mode */}
        <div 
          ref={componentRef} 
          className="bg-white dark:bg-white text-slate-900 dark:text-slate-900 w-full min-w-[800px] max-w-[210mm] min-h-[297mm] p-12 shadow-xl print:shadow-none print:p-0 mx-auto"
        >
          {/* Report Header */}
          <div className="border-b-2 border-slate-900 dark:border-slate-900 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-900">GHG Emissions Report</h1>
              <p className="text-slate-600 dark:text-slate-600 font-medium">Scope 1, 2, and 3 Summary</p>
            </div>
            <div className="text-right text-sm text-slate-500 dark:text-slate-500 font-medium">
              <p>Generated: {new Date().toLocaleDateString()}</p>
              <p>Framework: GHG Protocol</p>
            </div>
          </div>

          {/* Report Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-900 border-b border-slate-200 dark:border-slate-200 pb-2 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary dark:text-primary" /> Executive Summary
              </h2>
              <p className="text-slate-700 dark:text-slate-700 leading-relaxed">
                This document serves as the official record of greenhouse gas (GHG) emissions for the current reporting period. The data aggregated herein reflects total energy consumption, operational output, and value-chain impacts.
              </p>
            </section>

            <section className="grid grid-cols-2 gap-8">
              <div className="bg-slate-50 dark:bg-slate-50 p-5 rounded-lg border border-slate-200 dark:border-slate-200">
                <h3 className="font-semibold text-slate-600 dark:text-slate-600 mb-1">Total CO2e Output</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-900">{kpiData.totalEmissions} Tons</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-50 p-5 rounded-lg border border-slate-200 dark:border-slate-200">
                <h3 className="font-semibold text-slate-600 dark:text-slate-600 mb-1">Net Zero Target</h3>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-900">{kpiData.targetProgress}% Complete</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-900 border-b border-slate-200 dark:border-slate-200 pb-2 mb-4 mt-8">Breakdown by Scope</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-100 text-slate-700 dark:text-slate-700">
                    <th className="p-3 border-b border-slate-300 dark:border-slate-300 font-semibold">Category</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-300 font-semibold">Description</th>
                    <th className="p-3 border-b border-slate-300 dark:border-slate-300 font-semibold text-right">Emissions (tCO2e)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-600">
                  <tr>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200 font-bold text-slate-900 dark:text-slate-900">Scope 1</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200">Direct operational emissions</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200 text-right font-medium">845.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200 font-bold text-slate-900 dark:text-slate-900">Scope 2</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200">Purchased electricity</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200 text-right font-medium">1,200.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200 font-bold text-slate-900 dark:text-slate-900">Scope 3</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200">Supply chain & travel</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-200 text-right font-medium">800.00</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          
          {/* Footer */}
          <div className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-200 text-center text-sm text-slate-500 dark:text-slate-500">
            <p>EcoTrack B2B Solutions • Confidential Internal Data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
