import Link from "next/link";
import { Leaf, Mail, Lock, ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="absolute inset-0 z-50 flex min-h-screen bg-white dark:bg-slate-950 transition-colors">
      
      {/* Left Panel - Branding/Marketing */}
      <div className="hidden lg:flex w-1/2 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col justify-between p-12 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg shadow-sm">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">EcoTrack B2B</h1>
        </div>

        <div className="relative z-10 space-y-6 max-w-md">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
            Manage your ESG compliance effortlessly.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Join industry leaders in tracking, reducing, and reporting carbon emissions with our enterprise-grade dashboard.
          </p>
        </div>

        <div className="relative z-10 text-sm text-slate-500 dark:text-slate-500">
          © 2026 EcoTrack Solutions. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 relative">
        {/* Mobile Header */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-md">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-slate-50">EcoTrack</span>
        </div>

        <div className="w-full max-w-sm mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Welcome back</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <a href="#" className="text-sm font-medium text-primary hover:text-green-700 dark:hover:text-green-400">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition-all shadow-sm active:scale-[0.98]">
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200 dark:border-slate-800" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-950 px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-2.5 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            <Github className="h-5 w-5" /> GitHub
          </button>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
