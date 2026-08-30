import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Bell, 
  Sparkles,
  Rocket,
  UserCheck
} from 'lucide-react';
import { NavigationTab, UserRole } from '../../types/procurement';

interface HeaderProps {
  currentRole: UserRole;
  onChangeRole: (role: UserRole) => void;
  onOpenNotifications?: () => void;
  onOpenAuditLog?: () => void;
  onOpenAIInsights?: () => void;
  onNavigateTab: (tab: NavigationTab) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  onChangeRole,
  onOpenNotifications,
  onOpenAuditLog,
  onOpenAIInsights,
  onNavigateTab,
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
                MahaStartup • Innovation Procurement Command Center
              </h1>
            </div>
          </div>
        </div>

        {/* Center Role Switcher (Government Officer vs Startup Portal) */}
        <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-2xs">
          <button
            onClick={() => {
              onChangeRole('officer');
              onNavigateTab('dashboard');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              currentRole === 'officer'
                ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Government Officer Portal</span>
          </button>

          <button
            onClick={() => {
              onChangeRole('startup');
              onNavigateTab('startup-portal');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              currentRole === 'startup'
                ? 'bg-white text-indigo-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Rocket className="w-3.5 h-3.5 text-indigo-600" />
            <span>Startup Innovator Portal</span>
          </button>
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
            <span className="hidden xl:inline">AI Intelligence</span>
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

          {/* Node Indicator */}
          <div className="hidden 2xl:flex items-center gap-2 pl-2 border-l border-slate-200 text-[12px] text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>MahaState Node #04</span>
          </div>
        </div>
      </div>
    </header>
  );
};
