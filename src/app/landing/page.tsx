import Link from "next/link";
import { ArrowRight, BarChart3, Globe, ShieldCheck, Zap, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-primary/30">
      
      {/* Public Top Navbar */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">EcoTrack</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Sign In</Link>
            <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 dark:bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            {/* Updated Badge Colors for High Contrast */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-sm font-semibold mb-8 border border-green-300 dark:border-green-700/50 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-600 dark:bg-green-400 animate-pulse"></span>
              EcoTrack v2.0 is now live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Carbon tracking, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">simplified for B2B.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Automate your ESG reporting, track Scope 1-3 emissions in real-time, and generate audit-ready compliance reports with a single click.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-medium hover:bg-green-700 transition-all shadow-lg shadow-primary/25 active:scale-95">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 px-8 py-3.5 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                View Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Everything you need to reach Net Zero</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Powerful tools designed specifically for modern compliance teams.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor your carbon footprint across all facilities with live data integrations." },
                { icon: ShieldCheck, title: "Audit-Ready Reports", desc: "Export GHG Protocol compliant PDFs instantly for your stakeholders and regulators." },
                { icon: Zap, title: "AI Strategy Advisor", desc: "Get automated insights on the fastest and cheapest ways to reduce your emissions." },
              ].map((feature, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-green-50 dark:bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 text-center text-slate-500 dark:text-slate-400">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-5 w-5 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-slate-200">EcoTrack Solutions</span>
        </div>
        <p className="text-sm">© 2026 EcoTrack. Built for ThemeForest.</p>
      </footer>
    </div>
  );
}
