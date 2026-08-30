import React from 'react';
import { 
  LayoutGrid, 
  Target, 
  Compass, 
  Award, 
  FlaskConical, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  FileText,
  Rocket,
  BellRing, 
  SlidersHorizontal, 
  Shield,
  IndianRupee,
  Sparkles,
  Radio
} from 'lucide-react';
import { NavigationTab, UserRole } from '../../types/procurement';

interface SidebarProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  currentRole: UserRole;
  onChangeRole: (role: UserRole) => void;
  pendingEvaluationCount?: number;
  activePilotsCount?: number;
  alertsCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  currentRole,
  pendingEvaluationCount = 9,
  activePilotsCount = 6,
  alertsCount = 3,
}) => {
  // Government Officer Navigation Items
  const officerNavItems = [
    {
      id: 'dashboard' as NavigationTab,
      label: 'Dashboard',
      icon: LayoutGrid,
      badge: null,
      iconColor: 'text-blue-600',
    },
    {
      id: 'challenges' as NavigationTab,
      label: 'Challenges',
      icon: Target,
      badge: '12 Active',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200 font-semibold',
      iconColor: 'text-indigo-600',
    },
    {
      id: 'matching' as NavigationTab,
      label: 'Startup Discovery',
      icon: Compass,
      badge: '48 AI',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold',
      iconColor: 'text-cyan-600',
    },
    {
      id: 'evaluations' as NavigationTab,
      label: 'Evaluations',
      icon: Award,
      badge: `${pendingEvaluationCount} Pending`,
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200 font-bold',
      iconColor: 'text-amber-600',
    },
    {
      id: 'pilots' as NavigationTab,
      label: 'Active Pilots',
      icon: FlaskConical,
      badge: `${activePilotsCount} Live`,
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'kpi-impact' as NavigationTab,
      label: 'KPI & Impact',
      icon: TrendingUp,
      badge: null,
      iconColor: 'text-teal-600',
    },
    {
      id: 'validation' as NavigationTab,
      label: 'Validation',
      icon: ShieldCheck,
      badge: '4 Audit',
      badgeClass: 'bg-teal-50 text-teal-800 border-teal-200 font-semibold',
      iconColor: 'text-emerald-700',
    },
    {
      id: 'scale' as NavigationTab,
      label: 'Procurement & Scale',
      icon: Scale,
      badge: '3 Ready',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold animate-pulse',
      iconColor: 'text-amber-700',
    },
    {
      id: 'templates' as NavigationTab,
      label: 'Template Manager',
      icon: FileText,
      badge: '4 GFR',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200 font-semibold',
      iconColor: 'text-blue-700',
    },
  ];

  // Dedicated Startup Innovator Navigation Items
  const startupNavItems = [
    {
      id: 'startup-dashboard' as NavigationTab,
      label: 'Startup Overview',
      icon: Rocket,
      badge: 'Live',
      badgeClass: 'bg-cyan-100 text-cyan-900 border-cyan-300 font-bold',
      iconColor: 'text-cyan-600',
    },
    {
      id: 'challenges' as NavigationTab,
      label: 'Open Civic Tenders',
      icon: Target,
      badge: '12 Open',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200 font-semibold',
      iconColor: 'text-blue-600',
    },
    {
      id: 'pilots' as NavigationTab,
      label: 'Pilot Field Telemetry',
      icon: Radio,
      badge: 'Day 47/90',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'startup-portal' as NavigationTab,
      label: 'Escrow Milestone Claims',
      icon: IndianRupee,
      badge: 'Tranche 3',
      badgeClass: 'bg-amber-50 text-amber-900 border-amber-300 font-bold',
      iconColor: 'text-amber-600',
    },
    {
      id: 'matching' as NavigationTab,
      label: 'AI Match Profile (92%)',
      icon: Sparkles,
      badge: '#1 Rank',
      badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200 font-bold',
      iconColor: 'text-indigo-600',
    },
    {
      id: 'evaluations' as NavigationTab,
      label: 'Committee Evaluation',
      icon: Award,
      badge: '90/100',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold',
      iconColor: 'text-emerald-700',
    },
    {
      id: 'scale' as NavigationTab,
      label: 'GeM Scale Transition',
      icon: Scale,
      badge: '₹3.80 Cr',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-black',
      iconColor: 'text-amber-700',
    },
    {
      id: 'templates' as NavigationTab,
      label: 'SLA & Legal Templates',
      icon: FileText,
      badge: null,
      iconColor: 'text-slate-600',
    },
  ];

  const secondaryNavItems = [
    {
      id: 'notifications' as NavigationTab,
      label: 'Notifications',
      icon: BellRing,
      badge: `${alertsCount} Alert`,
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
      iconColor: 'text-amber-600',
    },
    {
      id: 'settings' as NavigationTab,
      label: currentRole === 'officer' ? 'Settings & GFR Rules' : 'Company Profile & DPIIT',
      icon: SlidersHorizontal,
      badge: null,
      iconColor: 'text-slate-600',
    },
  ];

  const activeNavList = currentRole === 'officer' ? officerNavItems : startupNavItems;

  return (
    <aside className="w-68 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 select-none min-h-[calc(100vh-60px)] shadow-xs">
      {/* Brand Header */}
      <div>
        <div className={`p-5 border-b ${
          currentRole === 'officer' ? 'bg-slate-50/70 border-slate-100' : 'bg-indigo-50/50 border-indigo-100'
        }`}>
          <div className="flex items-center gap-3.5">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md text-white font-black text-xl tracking-wider shrink-0 ${
              currentRole === 'officer'
                ? 'bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-600'
                : 'bg-gradient-to-tr from-cyan-600 via-indigo-600 to-blue-700'
            }`}>
              {currentRole === 'officer' ? 'MS' : 'RA'}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[17px] font-extrabold tracking-wider text-slate-900">
                  {currentRole === 'officer' ? 'MahaStartup' : 'RouteAI OS'}
                </span>
                <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${
                  currentRole === 'officer'
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-cyan-100 text-cyan-900 border-cyan-300'
                }`}>
                  {currentRole === 'officer' ? 'Govt' : 'DPIIT'}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-tight mt-0.5">
                {currentRole === 'officer' ? 'Innovation Command Center' : 'Startup Innovator Portal'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <div className="p-3.5 space-y-1.5">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {currentRole === 'officer' ? 'Command Modules' : 'Startup Workspace'}
          </div>

          {activeNavList.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold transition-all group cursor-pointer ${
                  isActive
                    ? currentRole === 'officer'
                      ? 'bg-blue-600 text-white shadow-sm font-bold'
                      : 'bg-indigo-600 text-white shadow-sm font-bold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : `${item.iconColor} group-hover:scale-110`} transition-transform`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-md border ${
                      isActive 
                        ? 'bg-white/20 text-white border-white/30 font-bold' 
                        : item.badgeClass || 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="px-4 py-2">
          <div className="border-t border-slate-200" />
        </div>

        {/* Secondary Links */}
        <div className="p-3.5 space-y-1.5">
          {secondaryNavItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold transition-all group cursor-pointer ${
                  isActive
                    ? currentRole === 'officer'
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : item.iconColor}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[11px] px-2 py-0.5 rounded-md border ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Profile Card */}
      <div className="p-3.5 m-3.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs">
        {currentRole === 'officer' ? (
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-950 font-bold text-sm shadow-xs">
                RV
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white" title="Active Clearance" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-extrabold text-slate-900 truncate">
                Shri Rajesh Verma, IAS
              </div>
              <div className="text-[11px] text-slate-500 truncate font-medium">
                Joint Secretary (Procurement)
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <Shield className="w-3 h-3 text-amber-600" />
                <span className="text-[10px] text-amber-800 font-mono font-bold">
                  Level-1 Approver (MahaGEMS)
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-950 font-bold text-sm shadow-xs">
                RA
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-cyan-500 rounded-full ring-2 ring-white" title="DPIIT Verified" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-extrabold text-slate-900 truncate">
                RouteAI Technologies
              </div>
              <div className="text-[11px] text-slate-500 truncate font-medium">
                DIPP-89421-IN • Pune
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <Rocket className="w-3 h-3 text-cyan-600" />
                <span className="text-[10px] text-cyan-800 font-mono font-bold">
                  Active Sandbox Pilot (PMC)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
