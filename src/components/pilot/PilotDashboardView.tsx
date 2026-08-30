import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingDown, 
  TrendingUp, 
  IndianRupee, 
  Clock, 
  Activity, 
  Layers, 
  Radio,
} from 'lucide-react';
import { mockPilotProject } from '../../data/mockData';
import { NavigationTab } from '../../types/procurement';

interface PilotDashboardViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onProceedToScale?: () => void;
  onOpenDossier?: () => void;
}

export const PilotDashboardView: React.FC<PilotDashboardViewProps> = ({
  onNavigateTab,
  onProceedToScale,
}) => {
  const [pilot] = useState(mockPilotProject);

  const percentDays = Math.round((pilot.dayElapsed / pilot.dayTotal) * 100);
  const percentBudget = Math.round((pilot.utilizedBudgetLakhs / pilot.sanctionedBudgetLakhs) * 100);

  return (
    <div className="space-y-6 pb-12">
      {/* Top Breadcrumb & Status Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Module 05 • Sandbox Pilot & Live Telemetry
            </span>
            <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
              Pilot Active
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            {pilot.challengeTitle}
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            {pilot.department} • Startup: <strong className="text-blue-700">{pilot.startupName}</strong> • Pilot ID: <strong className="text-slate-800 font-mono font-bold">{pilot.id}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              if (onProceedToScale) onProceedToScale();
              onNavigateTab('scale');
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <span>Evaluate Scale Readiness</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Pilot Progress & Budget Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Days Progress */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Sandbox Timeline Progress</span>
            </span>
            <span className="font-mono font-bold text-slate-900">
              Day {pilot.dayElapsed} / {pilot.dayTotal} ({percentDays}%)
            </span>
          </div>

          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 rounded-full"
              style={{ width: `${percentDays}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 font-medium">
            <span>Started: Aug 01, 2026</span>
            <span className="text-emerald-700 font-bold">43 Days Remaining in Sandbox</span>
          </div>
        </div>

        {/* Budget Utilization */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <IndianRupee className="w-4 h-4 text-amber-600" />
              <span>Sanctioned Pilot Budget vs Utilized</span>
            </span>
            <span className="font-mono font-bold text-amber-800">
              ₹ {pilot.utilizedBudgetLakhs.toFixed(2)}L / ₹ {pilot.sanctionedBudgetLakhs.toFixed(2)}L ({percentBudget}%)
            </span>
          </div>

          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
              style={{ width: `${percentBudget}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 font-medium">
            <span>Milestone Escrow: Tranche 2/3 Active</span>
            <span className="text-slate-800 font-bold">Remaining: ₹ {(pilot.sanctionedBudgetLakhs - pilot.utilizedBudgetLakhs).toFixed(2)}L</span>
          </div>
        </div>
      </div>

      {/* 3 Live KPI Variance Hero Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Live Baseline vs Current Outcome Variance
            </h3>
          </div>
          <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono font-bold">
            3 of 3 Targets Exceeded
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* KPI 1: Fuel */}
          <div className="bg-white border border-emerald-300 rounded-xl p-5 shadow-xs relative overflow-hidden group">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                FUEL CONSUMPTION
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded border border-emerald-300">
                EXCEEDED
              </span>
            </div>

            <div className="my-4 flex items-baseline justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Baseline → Current</div>
                <div className="text-2xl font-black font-mono text-slate-900 tracking-tight mt-0.5">
                  100 <span className="text-slate-400 font-normal">→</span> <span className="text-emerald-700">82</span> <span className="text-xs text-slate-500 font-normal">L/day</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-extrabold text-emerald-700 font-mono flex items-center justify-end">
                  <TrendingDown className="w-4 h-4 mr-0.5" />
                  ↓ 18%
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase font-mono mt-0.5">
                  TARGET: ↓15%
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
              <span className="truncate">Audit: IOCL CAN-bus Logs</span>
              <span className="text-emerald-700 font-bold">✓ Verified</span>
            </div>
          </div>

          {/* KPI 2: Missed Pickups */}
          <div className="bg-white border border-emerald-300 rounded-xl p-5 shadow-xs relative overflow-hidden group">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                MISSED PICKUPS
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded border border-emerald-300">
                EXCEEDED
              </span>
            </div>

            <div className="my-4 flex items-baseline justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Baseline → Current</div>
                <div className="text-2xl font-black font-mono text-slate-900 tracking-tight mt-0.5">
                  14 <span className="text-slate-400 font-normal">→</span> <span className="text-emerald-700">5</span> <span className="text-xs text-slate-500 font-normal">/wk/ward</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-extrabold text-emerald-700 font-mono flex items-center justify-end">
                  <TrendingDown className="w-4 h-4 mr-0.5" />
                  ↓ 64%
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase font-mono mt-0.5">
                  TARGET: ↓50%
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
              <span className="truncate">Audit: PMC 311 Citizen Grievance</span>
              <span className="text-emerald-700 font-bold">✓ Verified</span>
            </div>
          </div>

          {/* KPI 3: Route Efficiency */}
          <div className="bg-white border border-emerald-300 rounded-xl p-5 shadow-xs relative overflow-hidden group">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                ROUTE EFFICIENCY
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded border border-emerald-300">
                EXCEEDED
              </span>
            </div>

            <div className="my-4 flex items-baseline justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Baseline → Current</div>
                <div className="text-2xl font-black font-mono text-slate-900 tracking-tight mt-0.5">
                  72 <span className="text-slate-400 font-normal">→</span> <span className="text-emerald-700">91</span> <span className="text-xs text-slate-500 font-normal">/100</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-extrabold text-emerald-700 font-mono flex items-center justify-end">
                  <TrendingUp className="w-4 h-4 mr-0.5" />
                  ↑ 26%
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase font-mono mt-0.5">
                  TARGET: 85
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
              <span className="truncate">Audit: GIS Telemetry Polyline Index</span>
              <span className="text-emerald-700 font-bold">✓ Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pilot Workflow Timeline (Workflow Engine Representation) */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Pilot Lifecycle Timeline & Milestones
            </h3>
          </div>
          <span className="text-[10px] text-slate-600 font-mono font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Stage 5 of 8 in Progress</span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2">
          {pilot.timeline.map((step, idx) => {
            const isCompleted = step.status === 'completed';
            const isActive = step.status === 'active';

            return (
              <div
                key={step.id}
                className={`p-3 rounded-xl border flex flex-col justify-between text-xs transition-all ${
                  isCompleted
                    ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                    : isActive
                    ? 'bg-blue-50 border-blue-500 text-blue-950 ring-2 ring-blue-500/20 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-bold text-slate-500">0{idx + 1}</span>
                    {isCompleted ? (
                      <span className="text-emerald-700 font-bold text-xs">✓</span>
                    ) : isActive ? (
                      <span className="text-blue-700 font-bold text-xs animate-pulse">●</span>
                    ) : (
                      <span className="text-slate-400 text-xs">○</span>
                    )}
                  </div>
                  <div className="font-bold text-[11px] leading-tight text-slate-900">
                    {step.title}
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-200 text-[9px] font-mono text-slate-500 truncate font-medium">
                  {step.completedDate ? `Done ${step.completedDate}` : step.expectedDate || 'In Progress'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Telemetry Stream */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-red-600 animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Live Field Sensor Telemetry & API Sync Stream
            </h3>
          </div>
          <span className="text-[10px] text-emerald-800 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">1,440 pings/hr • 99.98% Healthy</span>
        </div>

        <div className="space-y-2">
          {pilot.telemetryLogs.map((log, i) => (
            <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-slate-400 text-[10px]">{log.timestamp}</span>
                <span className="text-blue-700 font-bold">{log.sensorNode}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-medium">{log.metric}:</span>
                <span className="text-emerald-800 font-bold">{log.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
