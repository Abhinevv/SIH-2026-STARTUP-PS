import React, { useState } from 'react';
import { 
  Rocket, 
  Sparkles, 
  Send, 
  Upload, 
  CheckCircle2, 
  Clock, 
  Building2, 
  IndianRupee, 
  Radio, 
  ShieldCheck, 
  FileText, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface StartupPortalViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenExplainability?: () => void;
}

export const StartupPortalView: React.FC<StartupPortalViewProps> = ({
  onNavigateTab,
  onOpenExplainability,
}) => {
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'applications' | 'telemetry' | 'open_challenges'>('applications');

  const handleSubmitClaim = () => {
    setClaimSubmitted(true);
    setTimeout(() => setClaimSubmitted(false), 4000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Startup Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-300">
                MahaStartup • DPIIT Innovator Workspace
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-400/30">
                Verified DPIIT Entity
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              RouteAI Technologies Pvt Ltd
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              DPIIT Reg: <strong className="text-white font-mono">DIPP-89421-IN</strong> • Pune, Maharashtra • Connected to MahaGEMS & GeM
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenExplainability}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View AI Compatibility Score (92%)</span>
            </button>
          </div>
        </div>

        {/* View Switcher inside Startup Portal */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Active Pilot & Applications
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'telemetry'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Live IoT Telemetry Uplink
          </button>
          <button
            onClick={() => setActiveTab('open_challenges')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'open_challenges'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Open Civic Tenders (12)
          </button>
        </div>
      </div>

      {activeTab === 'applications' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Application Status Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Active Sandbox Pilot Status
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                PLT-2026-088
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-500 font-medium">Tender Reference: MAHA-2026-014</div>
              <h4 className="text-lg font-extrabold text-slate-900">
                AI-Based Dynamic Waste Collection Optimization
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Client: <strong>Pune Municipal Corporation (Solid Waste Management Division)</strong>
              </p>
            </div>

            {/* Live Progress Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Pilot Progress</div>
                <div className="text-sm font-extrabold text-slate-900 font-mono mt-0.5">Day 47 / 90</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Escrow Disbursed</div>
                <div className="text-sm font-extrabold text-emerald-700 font-mono mt-0.5">₹ 5.12 L (Tranche 2)</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Evaluation Score</div>
                <div className="text-sm font-extrabold text-blue-700 font-mono mt-0.5">90.0 / 100</div>
              </div>
            </div>

            {/* Performance Variance */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Verified Telemetry Milestones
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <div className="font-semibold text-emerald-950">
                    Fuel Consumption: <strong>18.2% Reduction</strong> (Target was 15%)
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">✓ Exceeded</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <div className="font-semibold text-emerald-950">
                    Missed Bin Grievances: <strong>64.2% Reduction</strong> (Target was 50%)
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">✓ Exceeded</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigateTab('pilots')}
                className="text-xs text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Full Pilot Dashboard Telemetry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigateTab('scale')}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Check GeM Scale Sanction</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Submit Milestone Claim Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <FileText className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Submit Escrow Milestone Claim
                </h3>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Milestone Tranche</label>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 font-bold font-mono">
                  Tranche 3 Final Verification (₹ 3.08 Lakhs)
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Evidence Documentation</label>
                <div className="p-4 border-2 border-dashed border-slate-300 rounded-xl text-center space-y-1 bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-800">Upload IOCL Telemetry Log / Third-Party Audit PDF</div>
                  <div className="text-[10px] text-slate-500">PDF, XLSX up to 25MB • Digitally signed</div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-[11px] text-blue-900 leading-relaxed font-medium">
                <span className="font-bold text-blue-950">Escrow Security:</span> Disbursed directly to startup bank account within 48 hours of municipal officer verification.
              </div>
            </div>

            <button
              onClick={handleSubmitClaim}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
            >
              {claimSubmitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Disbursement Claim Submitted to Treasury!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Tranche 3 Claim for Verification</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'telemetry' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Live IoT & OBD-II Telemetry Feed (Wards 4, 7, 9)
              </h3>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded border border-emerald-200">
              Uptime: 99.98%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase font-bold">Active Fleet Nodes</div>
              <div className="text-2xl font-black font-mono text-slate-900">24 / 24 Trucks</div>
              <div className="text-[11px] text-emerald-700 font-semibold">100% AIS-140 GPS Connected</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase font-bold">Graph Solver Latency</div>
              <div className="text-2xl font-black font-mono text-blue-700">384 ms</div>
              <div className="text-[11px] text-slate-500">Capacitated VRP Algorithm</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase font-bold">MeitY Cloud Node</div>
              <div className="text-2xl font-black font-mono text-slate-900">AWS-MUMBAI-01</div>
              <div className="text-[11px] text-emerald-700 font-semibold">ISO 27001 Data Localised</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'open_challenges' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Open Maharashtra Municipal Challenges (Turnover Exempt)
            </h3>
            <span className="text-xs text-slate-500 font-mono font-medium">12 Active Tenders</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  MAHA-2026-009
                </span>
                <h4 className="text-sm font-bold text-slate-900">Smart Acoustic Water Leakage Detection</h4>
                <p className="text-xs text-slate-500">Maharashtra Urban Water Directorate • ₹32.00L Pilot Budget</p>
              </div>
              <button
                onClick={() => onNavigateTab('challenges')}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition self-start sm:self-auto cursor-pointer"
              >
                Apply via DPIIT Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
