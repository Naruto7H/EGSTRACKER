"use client";

import { Moon, Sun, Bell, Menu, X, CheckCircle2, AlertCircle, LogOut, User, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotifs(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setShowProfile(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between md:justify-end px-6 shadow-sm transition-colors relative z-40">
      
      <button className="md:hidden p-2 text-slate-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className="flex items-center gap-4">
        
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false); }} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-slate-900"></span>
          </button>

          {showNotifs && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
              <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex justify-between bg-slate-50 dark:bg-slate-950/50">
                <span className="font-semibold text-slate-900 dark:text-slate-50">Notifications</span>
              </div>
              <div className="p-4 border-b border-slate-100 dark:border-slate-800/50 flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">Data Entry Missing</p>
                  <p className="text-xs text-slate-500 mt-1">Scope 2 data pending.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {mounted && (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        )}

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }} className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center ml-2 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-300">AD</span>
          </div>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
              <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Admin User</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">admin@company.com</p>
              </div>
              <div className="py-1">
                <Link href="/settings" onClick={() => setShowProfile(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <User className="h-4 w-4" /> Profile
                </Link>
                <Link href="/settings" onClick={() => setShowProfile(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 py-1">
                <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">
                  <LogOut className="h-4 w-4" /> Sign out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
