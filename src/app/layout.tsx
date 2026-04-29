import type { Metadata } from "next";
import "./globals.css"; // Ensure you create this file with basic Tailwind directives

export const metadata: Metadata = {
  title: "ESG Footprint Tracker",
  description: "B2B Environmental Impact Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex">
        {/* Placeholder for Sidebar Component */}
        <aside className="w-64 bg-white border-r hidden md:block p-6">
          <h1 className="text-xl font-bold text-primary">EcoTrack B2B</h1>
          <nav className="mt-8 flex flex-col gap-4 text-sm text-slate-600">
            <a href="#" className="font-semibold text-slate-900">Dashboard</a>
            <a href="#">Data Entry</a>
            <a href="#">Calculator</a>
            <a href="#">Reports</a>
          </nav>
        </aside>
        
        <main className="flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
