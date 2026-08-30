import React, { useState } from 'react';
import { 
  CheckCircle2, 
  UserCheck, 
  ArrowRight, 
  BarChart3, 
  Lock
} from 'lucide-react';
import { mockExpertEvaluation } from '../../data/mockData';
import { NavigationTab } from '../../types/procurement';

interface ExpertEvaluationViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onSanctionPilot?: () => void;
}

export const ExpertEvaluationView: React.FC<ExpertEvaluationViewProps> = ({
  onNavigateTab,
  onSanctionPilot,
}) => {
  const [evaluation] = useState(mockExpertEvaluation);
  const [isSanctioning, setIsSanctioning] = useState(false);

  const handleSanction = () => {
    setIsSanctioning(true);
    setTimeout(() => {
      setIsSanctioning(false);
      if (onSanctionPilot) onSanctionPilot();
      onNavigateTab('pilots');
    }, 700);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700">
              Module 04 • Multi-Criteria Expert Scoring
            </span>
            <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded border border-amber-200 font-mono">
              Independent Panel Review
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Expert Evaluation & Scoring Committee
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Tripartite committee review evaluating technical robustness, cost efficiency, data security, and civic integration readiness.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <span className="text-[10px] text-slate-500 uppercase font-bold">Evaluation Status</span>
            <div className="text-xs font-bold text-emerald-700 font-mono flex items-center gap-1 justify-end">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CONSENSUS ACHIEVED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Consensus Result Card */}
      <div className="bg-gradient-to-r from-blue-50/70 via-white to-indigo-50/70 border border-blue-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
                INNO-2026-014 Evaluation
              </span>
              <span className="text-xs text-slate-500 font-medium">Candidate:</span>
              <span className="text-sm font-extrabold text-slate-900">
                {evaluation.startupName}
              </span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-black font-mono text-slate-900 tracking-tight">
                {evaluation.overallScore.toFixed(1)}{' '}
                <span className="text-lg text-slate-500 font-normal">/ 100</span>
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 tracking-wider">
                RECOMMENDED FOR PILOT PHASE
              </span>
            </div>

            <p className="text-xs text-slate-700 max-w-2xl leading-relaxed mt-2 font-medium">
              "{evaluation.consensusRemarks}"
            </p>
          </div>

          {/* Sanction Recommendation Block */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shrink-0 text-right space-y-2 shadow-xs">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">
                Sanction Recommended Budget
              </span>
              <div className="text-xl font-black text-amber-700 font-mono mt-0.5">
                ₹ {evaluation.sanctionRecommendedAmount.toFixed(2)} Lakhs
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Against ₹25.00L sanctioned ceiling
              </div>
            </div>

            <button
              onClick={handleSanction}
              disabled={isSanctioning}
              className="w-full px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition cursor-pointer"
            >
              {isSanctioning ? (
                <span>Generating Sanction Contract...</span>
              ) : (
                <>
                  <span>Sanction Pilot Contract</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 6-Factor Multi-Criteria Scoring Matrix */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              6-Dimensional Evaluation Matrix
            </h3>
          </div>
          <span className="text-[10px] text-slate-500 font-mono font-bold">
            Weighted Score Sum: 90.0%
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {evaluation.criteria.map((item, idx) => (
            <div key={idx} className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-3 text-xs items-center">
              {/* Factor Title & Weight */}
              <div className="md:col-span-4">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <span>{item.name}</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 font-mono font-medium">
                  Weight: {item.weight}% • Benchmark: {item.benchmark}%
                </div>
              </div>

              {/* Progress bar and Score */}
              <div className="md:col-span-3">
                <div className="flex items-center justify-between font-mono mb-1">
                  <span className="text-slate-500 text-[10px] font-medium">Assessed:</span>
                  <span className="font-bold text-blue-700">{item.score}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>

              {/* Evaluator Notes */}
              <div className="md:col-span-5 text-slate-700 text-[11px] bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-relaxed font-medium">
                "{item.comments}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Committee Sign-Off & Verification Signatures */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Committee Member Sign-Offs & Digital Stamps
            </h3>
          </div>
          <span className="text-[10px] text-emerald-800 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">3 of 3 Signatures Cleared</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {evaluation.panelMembers.map((member, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800">
                  {member.role}
                </span>
                <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-300 shadow-2xs">
                  {member.scoreGiven}/100
                </span>
              </div>

              <div>
                <div className="font-bold text-slate-900">{member.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-snug font-medium">
                  {member.designation}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-emerald-700 font-semibold">
                <span className="flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" />
                  <span>Digitally Signed</span>
                </span>
                <span className="font-mono text-slate-400 font-medium">{member.signedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
