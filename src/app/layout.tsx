import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "EcoTrack | ESG Dashboard Template",
  description: "B2B Environmental Impact Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex antialiased">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Top Navbar Placeholder */}
          <header className="h-16 bg-white border-b flex items-center justify-end px-8 shadow-sm">
            <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
              <span className="text-xs font-bold text-slate-500">Admin</span>
            </div>
          </header>
          
          <div className="p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
