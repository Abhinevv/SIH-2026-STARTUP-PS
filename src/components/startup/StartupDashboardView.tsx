import React from 'react';
import { 
  Rocket, 
  IndianRupee, 
  CheckCircle2, 
  Sparkles, 
  Radio, 
  ArrowRight, 
  Building2, 
  Clock, 
  TrendingUp, 
  FileText,
  AlertCircle,
  Award
} from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface StartupDashboardViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenExplainability?: () => void;
  onOpenDossier?: () => void;
}

export const StartupDashboardView: React.FC<StartupDashboardViewProps> = ({
  onNavigateTab,
  onOpenExplainability,
  onOpenDossier,
}) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Startup Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30 font-mono">
                DPIIT Innovator Hub
              </span>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>DIPP-89421-IN Verified</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Welcome, RouteAI Technologies
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
              Track your active government sandbox pilots, milestone escrow payouts, real-time IoT fleet telemetry, and GeM fast-track scale status.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenExplainability}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>AI Match Profile (92% Match)</span>
            </button>
            <button
              onClick={() => onNavigateTab('challenges')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/20 transition cursor-pointer"
            >
              <span>Browse Open Civic Tenders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Startup KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Active Sandbox Pilots */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Active Sandbox Pilot</span>
            <Rocket className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-slate-900">1</span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Day 47 / 90
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Pune Municipal Corporation (SWM)</p>
        </div>

        {/* Card 2: Sanctioned Escrow */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Sanctioned Escrow</span>
            <IndianRupee className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-amber-700">₹ 8.20L</span>
            <span className="text-[10px] font-bold text-slate-500">Cap: ₹25L</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">100% GFR 194 Treasury Backed</p>
        </div>

        {/* Card 3: Disbursed Escrow */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Disbursed to Bank</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-emerald-700">₹ 5.12L</span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              62.4% Paid
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">Tranche 1 & 2 Released (48hr SLA)</p>
        </div>

        {/* Card 4: Scale Readiness Score */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Scale Readiness Score</span>
            <Award className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black font-mono text-indigo-700">87 / 100</span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              READY
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">GeM Scale Sanction Cap: ₹3.80 Cr</p>
        </div>
      </div>

      {/* Main Two-Column Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Active Pilot Live Status (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Current Field Testbed (Pune Municipal Corp)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              PLT-2026-088 • MAHA-2026-014
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-extrabold text-slate-900">
              AI-Based Dynamic Waste Collection Optimization
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Deployed across 24 compactors in Wards 4, 7, and 9 (Kothrud, Shivajinagar, Hadapsar)
            </p>
          </div>

          {/* KPI Achievement Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <div className="text-[10px] uppercase font-bold text-emerald-900">Diesel Conservation</div>
              <div className="text-2xl font-black font-mono text-emerald-700">↓ 18.2%</div>
              <div className="text-[10px] text-emerald-800 font-semibold">Target: ↓15.0% (Exceeded)</div>
            </div>

            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <div className="text-[10px] uppercase font-bold text-emerald-900">Missed Pickups</div>
              <div className="text-2xl font-black font-mono text-emerald-700">↓ 64.2%</div>
              <div className="text-[10px] text-emerald-800 font-semibold">Target: ↓50.0% (Exceeded)</div>
            </div>

            <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200 space-y-1">
              <div className="text-[10px] uppercase font-bold text-blue-900">Route Efficiency</div>
              <div className="text-2xl font-black font-mono text-blue-700">91.0 / 100</div>
              <div className="text-[10px] text-blue-800 font-semibold">Baseline: 72.0 (↑26%)</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>24/24 vehicle nodes transmitting OBD-II telematics</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigateTab('pilots')}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Open Full Pilot Telemetry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Escrow & GeM Scale Status (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Escrow Status Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-emerald-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Milestone Escrow Tranche Status
                </h3>
              </div>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Safe Escrow
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">Tranche 1 (Onboarding)</div>
                  <div className="text-[11px] text-slate-500 font-mono">₹ 2.56 Lakhs (30%)</div>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ✓ PAID
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">Tranche 2 (Mid-Term Telemetry)</div>
                  <div className="text-[11px] text-slate-500 font-mono">₹ 2.56 Lakhs (30%)</div>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ✓ PAID
                </span>
              </div>

              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-blue-950">Tranche 3 (Final Verification)</div>
                  <div className="text-[11px] text-blue-700 font-mono font-bold">₹ 3.08 Lakhs (40%)</div>
                </div>
                <span className="text-[10px] text-blue-800 font-bold bg-white px-2 py-0.5 rounded border border-blue-300">
                  READY TO CLAIM
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('startup-portal')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
            >
              <span>Submit Tranche 3 Proof Claim</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* GeM Scale Sanction Card */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border border-emerald-300 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-900">
                GeM / MahaGEMS Fast-Track Bridge
              </span>
              <span className="text-[10px] font-mono font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                READY TO SCALE
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Upon final Sanction Order sign-off, RouteAI Technologies will be directly listed in the GeM Custom Category: <em>"Smart Municipal Fleet Route Optimization Software"</em> with an estimated <strong>₹3.80 Cr</strong> state-wide rollout allocation across 15 Municipal Corporations.
            </p>

            <button
              onClick={onOpenDossier}
              className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Preview Government Sanction Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
