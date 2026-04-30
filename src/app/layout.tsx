import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "EcoTrack | ESG Dashboard Template",
  description: "B2B Environmental Impact Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex antialiased transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          
          <main className="flex-1 flex flex-col min-w-0">
            {/* The interactive TopNav replaces the old placeholder header */}
            <TopNav />
            
            <div className="p-8 max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
