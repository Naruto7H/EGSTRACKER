"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Zap, Loader2 } from "lucide-react";

interface AIAdvisorProps {
  targetProgress?: number;
  totalEmissions?: string;
}

export default function AIAdvisor({ targetProgress = 0, totalEmissions = "0" }: AIAdvisorProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);

  const generateInsight = () => {
    setIsAnalyzing(true);
    setInsight(null);
    
    setTimeout(() => {
      // Dynamic response based on the props passed from the dashboard
      const advice = targetProgress < 100 
        ? `Insight: You are at ${targetProgress}% of your target. Switching 20% of your fleet to EVs will reduce your ${totalEmissions}t CO2e by an estimated 15 tons, accelerating your goals.`
        : `Insight: Outstanding. You've hit your ${targetProgress}% goal. Let's focus on Scope 3 supply chain optimization next.`;
        
      setInsight(advice);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="rounded-xl border border-indigo-200 dark:border-indigo-900 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-950 p-6 shadow-sm relative overflow-hidden transition-colors h-full flex flex-col justify-between">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Nexus AI Advisor</h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Analyze your current metrics against industry benchmarks to find reduction opportunities.
        </p>
      </div>

      <div className="mt-auto z-10">
        {!insight && !isAnalyzing && (
          <button 
            onClick={generateInsight}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm"
          >
            Generate Strategy <ArrowRight className="h-4 w-4" />
          </button>
        )}

        {isAnalyzing && (
          <div className="flex items-center justify-center py-3 text-indigo-600 dark:text-indigo-400 gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm font-medium animate-pulse">Analyzing metrics...</span>
          </div>
        )}

        {insight && !isAnalyzing && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-800 rounded-lg p-4 shadow-sm relative">
            <Zap className="absolute -top-3 -left-3 h-6 w-6 text-amber-500 bg-white dark:bg-slate-900 rounded-full p-1 border border-indigo-100 dark:border-indigo-800" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
              {insight}
            </p>
            <button 
              onClick={() => setInsight(null)}
              className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
