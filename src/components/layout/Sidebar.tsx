"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calculator, Database, FileBarChart, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Data Entry", href: "/data-entry", icon: Database },
  { name: "Calculator", href: "/calculator", icon: Calculator },
  { name: "Reports", href: "/reports", icon: FileBarChart },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 min-h-screen flex flex-col p-6 shadow-sm hidden md:flex transition-colors">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-primary p-2 rounded-lg shadow-sm">
          <Leaf className="h-5 w-5 text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">EcoTrack</h1>
      </div>

      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-green-50 dark:bg-primary/10 text-primary dark:text-primary" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-slate-400 dark:text-slate-500")} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
