"use client";

import { useState } from "react";
import { calculateElectricityCO2, calculateFlightCO2, calculateFuelCO2 } from "@/lib/esg-math";
import { Calculator, Zap, Plane, Fuel, RotateCcw } from "lucide-react";

export default function CalculatorPage() {
  const [kwh, setKwh] = useState<number | "">("");
  const [miles, setMiles] = useState<number | "">("");
  const [gallons, setGallons] = useState<number | "">("");

  const electricityCO2 = calculateElectricityCO2(Number(kwh) || 0);
  const flightCO2 = calculateFlightCO2(Number(miles) || 0);
  const fuelCO2 = calculateFuelCO2(Number(gallons) || 0);
  const totalCO2 = electricityCO2 + flightCO2 + fuelCO2;

  const handleClear = () => {
    setKwh("");
    setMiles("");
    setGallons("");
  };

  return (
    <div className="max-w-3xl space-y-6 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Carbon Calculator</h2>
          <p className="text-slate-500 dark:text-slate-400">Instantly convert activity data into CO2e (Tons).</p>
        </div>
        <button onClick={handleClear} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          <RotateCcw className="h-4 w-4" /> Clear
        </button>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Zap className="h-4 w-4 text-amber-500" /> Electricity Usage (kWh)
            </label>
            <input
              type="number"
              min="0"
              value={kwh}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              placeholder="e.g., 5000"
              onChange={(e) => setKwh(Math.max(0, Number(e.target.value)) || "")}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Plane className="h-4 w-4 text-blue-500" /> Flight Distance (Miles)
            </label>
            <input
              type="number"
              min="0"
              value={miles}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              placeholder="e.g., 1200"
              onChange={(e) => setMiles(Math.max(0, Number(e.target.value)) || "")}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Fuel className="h-4 w-4 text-red-500" /> Fleet Fuel (Gallons)
            </label>
            <input
              type="number"
              min="0"
              value={gallons}
              className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              placeholder="e.g., 500"
              onChange={(e) => setGallons(Math.max(0, Number(e.target.value)) || "")}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-slate-800 dark:border-slate-700 bg-slate-900 dark:bg-slate-950 p-6 text-white shadow-sm transition-colors">
          <Calculator className="h-8 w-8 text-primary" />
          <div className="text-center">
            <div className="text-sm font-medium text-slate-400">Estimated Impact</div>
            <div className="text-5xl font-bold text-primary">
              {totalCO2.toFixed(2)}
            </div>
            <div className="text-sm text-slate-400 mt-1">Tons of CO2e</div>
          </div>
          
          <div className="w-full pt-4 mt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col gap-2">
            <div className="flex justify-between"><span>Electricity:</span> <span>{electricityCO2.toFixed(2)} t</span></div>
            <div className="flex justify-between"><span>Flights:</span> <span>{flightCO2.toFixed(2)} t</span></div>
            <div className="flex justify-between"><span>Fuel:</span> <span>{fuelCO2.toFixed(2)} t</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
