"use client";

import { useState } from "react";
import { calculateElectricityCO2, calculateFlightCO2 } from "@/lib/esg-math";
import { Calculator, Zap, Plane } from "lucide-react";

export default function CalculatorPage() {
  const [kwh, setKwh] = useState<number>(0);
  const [miles, setMiles] = useState<number>(0);

  const electricityCO2 = calculateElectricityCO2(kwh);
  const flightCO2 = calculateFlightCO2(miles);
  const totalCO2 = electricityCO2 + flightCO2;

  return (
    <div className="max-w-3xl space-y-6">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">Carbon Calculator</h2>
        <p className="text-slate-500">Instantly convert activity data into CO2e (Tons).</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Input Form */}
        <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Zap className="h-4 w-4 text-amber-500" />
              Electricity Usage (kWh)
            </label>
            <input
              type="number"
              className="w-full rounded-md border border-slate-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="e.g., 5000"
              onChange={(e) => setKwh(Number(e.target.value) || 0)}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Plane className="h-4 w-4 text-blue-500" />
              Flight Distance (Miles)
            </label>
            <input
              type="number"
              className="w-full rounded-md border border-slate-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="e.g., 1200"
              onChange={(e) => setMiles(Number(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Results Widget */}
        <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border bg-slate-900 p-6 text-white shadow-sm">
          <Calculator className="h-8 w-8 text-primary" />
          <div className="text-center">
            <div className="text-sm font-medium text-slate-400">Estimated Impact</div>
            <div className="text-5xl font-bold text-primary">
              {totalCO2.toFixed(2)}
            </div>
            <div className="text-sm text-slate-400 mt-1">Tons of CO2e</div>
          </div>
          
          <div className="w-full pt-4 mt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between">
            <span>Electricity: {electricityCO2.toFixed(2)} t</span>
            <span>Flights: {flightCO2.toFixed(2)} t</span>
          </div>
        </div>
      </div>
    </div>
  );
}
