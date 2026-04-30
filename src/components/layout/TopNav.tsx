"use client";

import { Moon, Sun, Bell } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center justify-end px-8 shadow-sm transition-colors">
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          <Bell className="h-5 w-5" />
        </button>
        
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        )}

        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 shadow-sm overflow-hidden flex items-center justify-center ml-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-300">SN</span>
        </div>
      </div>
    </header>
  );
}
