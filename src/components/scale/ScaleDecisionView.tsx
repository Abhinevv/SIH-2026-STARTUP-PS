import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileSpreadsheet, 
  ShieldCheck, 
  Lock, 
  Award, 
  Stamp, 
  Sparkles,
  Download,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { mockScaleReadiness } from '../../data/mockData';
import { NavigationTab } from '../../types/procurement';

interface ScaleDecisionViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenDossier: () => void;
  onOpenAuditLog: () => void;
}

export const ScaleDecisionView: React.FC<ScaleDecisionViewProps> = ({
  onOpenDossier,
}) => {
  const [scaleData] = useState(mockScaleReadiness);
  const [isApproved, setIsApproved] = useState(false);
  const [approvalTime, setApprovalTime] = useState<string | null>(null);

  const dimensionList = [
    { name: 'TECHNICAL FEASIBILITY', score: scaleData.dimensionScores.technicalFeasibility },
    { name: 'KPI ACHIEVEMENT', score: scaleData.dimensionScores.kpiAchievement },
    { name: 'COST EFFECTIVENESS', score: scaleData.dimensionScores.costEffectiveness },
    { name: 'SECURITY & DATA LOCALISATION', score: scaleData.dimensionScores.securityDataGovernance },
    { name: 'SCALABILITY & INTEROPERABILITY', score: scaleData.dimensionScores.scalability },
    { name: 'USER SATISFACTION (PMC CITIZENS)', score: scaleData.dimensionScores.userSatisfaction },
  ];

  const handleApproveScale = () => {
    setIsApproved(true);
    const now = new Date().toLocaleTimeString() + ' IST, 30 Aug 2026';
    setApprovalTime(now);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Module 06 • Final Pilot Outcome & Scale Decision
            </span>
            <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200 font-mono">
              Human-in-the-Loop Governance
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            State-Wide Scale Authorization & GeM Onboarding
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Objective decision-support summarizing multi-month sandbox evidence for authorized public procurement approval.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDossier}
            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 border border-slate-300 transition shadow-2xs cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Preview GeM Procurement Dossier</span>
          </button>
        </div>
      </div>

      {/* Hero Outcome Box: READY TO SCALE 87/100 */}
      <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 border-2 border-emerald-500 rounded-2xl p-8 shadow-xs text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5 pointer-events-none select-none">
          🏛️
        </div>

        <div className="max-w-xl mx-auto space-y-3 relative z-10">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-800">
            Validated Pilot Outcome
          </div>

          <div className="inline-block bg-white border-2 border-emerald-500 rounded-2xl px-8 py-5 shadow-md">
            <div className="text-xs uppercase font-extrabold tracking-widest text-slate-600">
              {scaleData.challengeTitle}
            </div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-wider uppercase mt-1">
              {scaleData.readinessLabel}
            </div>
            <div className="text-4xl sm:text-5xl font-mono font-black text-slate-900 mt-2">
              {scaleData.scaleReadinessScore} <span className="text-2xl text-slate-400 font-normal">/ 100</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 font-mono">
              Tested by: <strong className="text-blue-700 font-bold">{scaleData.startupName}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Two Columns: 6-Dimension Score Matrix (Left) & AI Assessment Checklist (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 6-Dimension Score Matrix (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Evaluation Factor Scores
              </h3>
            </div>
            <span className="text-[10px] text-slate-500 font-mono font-bold">Benchmark: 80% Min</span>
          </div>

          <div className="space-y-3 pt-1">
            {dimensionList.map((dim, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-700 font-bold tracking-tight">{dim.name}</span>
                  <span className="font-black text-emerald-700">{dim.score}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 rounded-full"
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Assessment & Evidence Checklist (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  AI Assessment & Compliance Check
                </h3>
              </div>
              <span className="text-[10px] text-emerald-800 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">4/4 Passed</span>
            </div>

            <div className="py-3 space-y-2.5">
              {scaleData.aiAssessmentChecklist.slice(0, 4).map((item) => (
                <div key={item.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5 font-medium">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-center gap-2 font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>⚠ Scale requires authorized procurement officer approval</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <button
              onClick={onOpenDossier}
              className="text-blue-700 hover:text-blue-800 font-bold underline text-[11px] cursor-pointer"
            >
              [View Raw Evidence Files]
            </button>
            <button
              onClick={onOpenDossier}
              className="text-emerald-700 hover:text-emerald-800 font-bold underline text-[11px] cursor-pointer"
            >
              [Generate Audit Report]
            </button>
          </div>
        </div>
      </div>

      {/* Crucial Section: "AI RECOMMENDS → HUMAN APPROVES" Decision Box */}
      <div className="bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Core Governance Principle
              </span>
              <span className="text-xs text-slate-600 font-semibold">
                Decision Support (Non-Autonomous)
              </span>
            </div>
            <h3 className="text-lg font-black text-slate-900 mt-1">
              "AI Recommends → Authorized Public Officer Approves"
            </h3>
            <p className="text-xs text-slate-600 mt-0.5 font-medium">
              The AI does not autonomously award public contracts. It synthesizes objective performance data and prepares formal sanction orders for authorized IAS/Secretariat sign-off.
            </p>
          </div>

          <div className="text-right shrink-0 bg-slate-50 p-3.5 rounded-xl border border-slate-200 font-mono text-xs shadow-2xs">
            <div className="text-slate-500 text-[10px] font-bold">Estimated Pan-State Value</div>
            <div className="text-base font-black text-amber-700 mt-0.5">₹ 3.80 Crores</div>
            <div className="text-[10px] text-slate-500">15 Municipal Corporations</div>
          </div>
        </div>

        {/* Approver Action Card */}
        {isApproved ? (
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-emerald-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shadow-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    SANCTION ORDER EXECUTED & SEALED
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Order No: {scaleData.officerApproval?.sanctionOrderNumber}
                  </div>
                  <div className="text-xs text-slate-600">
                    Signed by: <strong className="text-slate-900">{scaleData.officerApproval?.officerName}</strong> ({scaleData.officerApproval?.designation})
                  </div>
                </div>
              </div>

              <div className="text-right font-mono text-xs text-slate-600 shrink-0">
                <div className="text-[10px] text-slate-500">Timestamp:</div>
                <div className="text-emerald-800 font-bold">{approvalTime}</div>
              </div>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans shadow-2xs">
              <span className="font-bold text-slate-900">Official Remarks:</span> "{scaleData.officerApproval?.officialRemarks}"
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-800 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Digital Seal SHA: {scaleData.officerApproval?.digitalSignatureSha.substring(0, 32)}...</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenDossier}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download GeM Sanction Order (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900">
                  Authorized Officer Digital Sanction
                </span>
              </div>
              <p className="text-xs text-slate-600 max-w-lg font-medium leading-relaxed">
                I hereby certify that the 90-day sandbox pilot outcomes have been independently audited and satisfy GFR Rule 194. Sanction is hereby granted for GeM marketplace category creation and scaled rollout across 15 municipal corporations.
              </p>
              <div className="text-[11px] text-slate-500 pt-1 font-mono">
                Approver: <strong className="text-slate-800">Shri Rajesh Verma, IAS</strong> (Joint Secretary, Public Procurement)
              </div>
            </div>

            <button
              onClick={handleApproveScale}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102 shrink-0 cursor-pointer"
            >
              <Stamp className="w-4 h-4 text-amber-300" />
              <span>Sign & Sanction Scale Procurement</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
