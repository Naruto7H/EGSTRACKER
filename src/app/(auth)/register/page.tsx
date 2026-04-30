import Link from "next/link";
import { Leaf, Mail, Lock, User, Building } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="absolute inset-0 z-50 flex min-h-screen bg-white dark:bg-slate-950 transition-colors">
      
      {/* Right Panel - Form (Swapped sides for variety) */}
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Create an account</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Start tracking your ESG compliance today.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Acme Corp" 
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="john@acme.com" 
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <button type="button" className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition-all shadow-sm active:scale-[0.98] mt-2">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Left Panel - Branding (Rendered on the right for variety) */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 border-l border-slate-800 flex-col justify-center items-center p-12 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-primary/60 to-transparent blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-md space-y-6">
          <div className="mx-auto bg-primary/20 p-4 rounded-2xl w-fit mb-8">
            <Leaf className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            "EcoTrack saved us 40 hours a month on compliance reporting alone."
          </h2>
          <p className="text-slate-400 font-medium">
            — Sarah Jenkins, Sustainability Director at TechFlow
          </p>
        </div>
      </div>

    </div>
  );
}
