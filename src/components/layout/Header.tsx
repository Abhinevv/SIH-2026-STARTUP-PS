import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Bell, 
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  onOpenNotifications?: () => void;
  onOpenAuditLog?: () => void;
  onOpenAIInsights?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNotifications,
  onOpenAuditLog,
  onOpenAIInsights,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-2xs">
      {/* Top national tricolor ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />
      
      <div className="px-6 py-3 flex items-center justify-between gap-4">
        {/* Left branding & national portal breadcrumb */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-3">
            {/* Ashoka/Gov Seal representation */}
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-xs text-lg shrink-0">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase font-extrabold tracking-wider text-slate-500">
                  Govt of Maharashtra • MSInS
                </span>
                <span className="text-[10px] bg-blue-50 text-blue-800 font-extrabold px-2 py-0.5 rounded border border-blue-200">
                  SIH PS #26136 • GFR 194
                </span>
              </div>
              <h1 className="text-[15px] font-bold text-slate-900 tracking-tight">
                INNO-PROC • Startup Innovation Procurement Command Center
              </h1>
            </div>
          </div>
        </div>

        {/* Center Search bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search challenges, DPIIT startups, pilot IDs, PS #26136..." 
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs font-medium"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-500 bg-slate-200/80 px-1.5 py-0.5 rounded border border-slate-300 font-mono">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Tools & Officer Quick Status */}
        <div className="flex items-center gap-3">
          {/* AI Intelligence Live Beacon */}
          <button 
            onClick={onOpenAIInsights}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 transition text-[13px] font-bold shadow-2xs cursor-pointer"
            title="Open AI Procurement Intelligence Radar"
          >
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="hidden lg:inline">AI Intelligence</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </button>

          {/* CVC / Immutable Audit Log Trigger */}
          <button 
            onClick={onOpenAuditLog}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition text-[13px] font-semibold shadow-2xs cursor-pointer"
            title="View Immutable CVC/CAG Audit Trail"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">Audit Trail</span>
          </button>

          {/* Notifications */}
          <button 
            onClick={onOpenNotifications}
            className="relative p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs cursor-pointer"
            title="Notifications & Alerts"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Session Security Indicator */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-slate-200 text-[12px] text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>MahaState Secure Node</span>
          </div>
        </div>
      </div>
    </header>
  );
};
