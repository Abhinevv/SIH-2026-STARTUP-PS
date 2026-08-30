import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  BarChart2,
} from 'lucide-react';
import { StartupMatch } from '../../types/procurement';

interface ExplainabilityModalProps {
  startup: StartupMatch;
  isOpen: boolean;
  onClose: () => void;
  onSendToEvaluation: (startupId: string) => void;
}

export const ExplainabilityModal: React.FC<ExplainabilityModalProps> = ({
  startup,
  isOpen,
  onClose,
  onSendToEvaluation,
}) => {
  if (!isOpen) return null;

  const scoreBars = [
    { label: 'Technology Architecture & Algorithmic Fit', score: startup.scores.technologyMatch, weight: '30%' },
    { label: 'Problem Domain & Municipal Experience', score: startup.scores.problemDomainMatch, weight: '25%' },
    { label: 'Budget Compatibility (Within ₹25L Cap)', score: startup.scores.budgetFit, weight: '15%' },
    { label: 'Pilot Sandbox Readiness & Deployment Speed', score: startup.scores.pilotReadiness, weight: '15%' },
    { label: 'Past Performance & Validated Trials', score: startup.scores.pastPerformance, weight: '15%' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-300 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-900 flex flex-col">
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-blue-700">
                Explainable AI (XAI) Recommendation Dossier
              </div>
              <h2 className="text-base font-extrabold text-slate-900">
                Why Did AI Recommend {startup.startupName}?
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Hero Fit Rating Box */}
          <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-blue-50/90 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-800">
                Semantic Weighted Compatibility
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl font-black font-mono text-slate-900 tracking-tight">
                  {startup.overallMatchScore} <span className="text-xl text-slate-500 font-normal">/ 100</span>
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 tracking-wider">
                  EXCELLENT FIT
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-2 max-w-lg leading-relaxed font-medium">
                {startup.whyRecommendedSummary}
              </p>
            </div>

            <div className="text-right shrink-0 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-[10px] text-slate-500 uppercase font-bold">DPIIT Registry</div>
              <div className="text-xs font-mono font-bold text-blue-700 mt-0.5">{startup.dpiitRecognitionNo}</div>
              <div className="text-[10px] text-emerald-700 font-bold mt-1">✓ Verified Startup India</div>
            </div>
          </div>

          {/* Semantic Concept Alignment Tree */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Problem-to-Capability Semantic Graph Mapping</span>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200 font-mono text-xs text-slate-800 space-y-2 shadow-2xs">
              <div className="text-blue-700 font-bold">
                Challenge: INNO-2026-014 (Pune Waste Route Optimization)
              </div>
              <div className="pl-4 border-l-2 border-slate-300 space-y-1.5 text-[11px]">
                <div className="flex items-start gap-2">
                  <span className="text-slate-400">├──</span>
                  <div>
                    <span className="text-slate-900 font-bold">Dynamic Waste Route Optimization:</span>{' '}
                    <span className="text-slate-600 font-sans">Mapped to RouteAI's Capacitated VRP engine with traffic weights</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400">├──</span>
                  <div>
                    <span className="text-slate-900 font-bold">Municipal Fleet Telemetry:</span>{' '}
                    <span className="text-slate-600 font-sans">Pre-built AIS-140 GPS & OBD-II vehicle ingestion connectors</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400">└──</span>
                  <div>
                    <span className="text-slate-900 font-bold">Target Fuel Reduction (≥15%):</span>{' '}
                    <span className="text-slate-600 font-sans">Nagpur pilot validated 19.4% average fuel reduction record</span>
                  </div>
                </div>
              </div>
              <div className="text-emerald-700 font-bold pt-1 flex items-center gap-1.5">
                <span className="text-slate-400">▼ Match Target:</span>
                <span>{startup.startupName} (Pune, Maharashtra)</span>
              </div>
            </div>
          </div>

          {/* Match Explanation Dimensional Progress Bars */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Weighted Scoring Breakdown</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono font-bold">Weighted Sum = 92.4%</span>
            </div>

            <div className="space-y-3">
              {scoreBars.map((bar, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-semibold">{bar.label}</span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-[10px] text-slate-500">wt: {bar.weight}</span>
                      <span className="font-bold text-slate-900">{bar.score}%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      style={{ width: `${bar.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positive Evidence & Risk Flags Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Positive Evidence */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Positive Evidence Verified</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                {startup.positiveEvidence.map((ev, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks Detected */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Procurement Risks & Mitigations</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                {startup.riskFlags.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">⚠</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Explainability auditable under GFR Rule 194</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSendToEvaluation(startup.id);
                onClose();
              }}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <span>Send to Expert Evaluation Committee</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
