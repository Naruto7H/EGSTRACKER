"use client";

import { Moon, Sun, Bell, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between md:justify-end px-6 shadow-sm transition-colors relative z-50">
      
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-slate-500 dark:text-slate-400"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop & Right Side Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
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

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg md:hidden flex flex-col p-4 space-y-4 animate-in slide-in-from-top-2">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200 font-medium px-2 py-1">Dashboard</Link>
          <Link href="/data-entry" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200 font-medium px-2 py-1">Data Entry</Link>
          <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200 font-medium px-2 py-1">Calculator</Link>
          <Link href="/reports" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200 font-medium px-2 py-1">Reports</Link>
        </div>
      )}
    </header>
  );
}
