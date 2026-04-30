import Link from "next/link";
import { Wind, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-in fade-in duration-700">
      <div className="relative mb-8">
        <Wind className="h-24 w-24 text-slate-300 dark:text-slate-700 mx-auto animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-slate-900/5 dark:text-white/5 select-none pointer-events-none">
          404
        </div>
      </div>
      
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
        Zero Carbon Footprint.
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mb-8">
        Congratulations! The page you are looking for doesn't exist, which means it generates absolutely zero emissions.
      </p>
      
      <Link 
        href="/" 
        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-sm hover:shadow-md"
      >
        <ArrowLeft className="h-5 w-5" /> Back to Dashboard
      </Link>
    </div>
  );
}
