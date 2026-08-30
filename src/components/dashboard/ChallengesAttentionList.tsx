import React from 'react';
import { 
  AlertTriangle, 
  ArrowRight, 
} from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface ChallengesAttentionListProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onSelectChallenge?: (challengeId: string) => void;
}

export const ChallengesAttentionList: React.FC<ChallengesAttentionListProps> = ({
  onNavigateTab,
  onSelectChallenge,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Challenges Requiring Attention
            </h3>
          </div>
          <span className="text-[10px] text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-mono font-bold">
            2 Action Items
          </span>
        </div>

        {/* Cards List */}
        <div className="divide-y divide-slate-100">
          {/* Item 1: Waste Management */}
          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  MAHA-2026-014
                </span>
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  Smart Waste Collection Optimization
                </h4>
              </div>
              <p className="text-xs text-slate-500 font-medium truncate">
                Pune Municipal Department • Solid Waste Management
              </p>

              <div className="flex items-center gap-3 pt-0.5 text-xs text-slate-700 flex-wrap">
                <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[11px]">
                  Status: Evaluation
                </span>
                <span className="text-slate-600 text-xs font-medium">
                  <strong className="text-slate-900">8</strong> matched • <strong className="text-slate-900">4</strong> shortlisted
                </span>
              </div>

              {/* Warning banner */}
              <div className="flex items-center gap-1.5 text-xs text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-md mt-1.5 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>⚠ KPI baseline missing for Ward 11 sensor calibration</span>
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <button
                onClick={() => {
                  if (onSelectChallenge) onSelectChallenge('ch-014');
                  onNavigateTab('challenges');
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
              >
                <span>Review Challenge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Item 2: Water Leakage Detection */}
          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  MAHA-2026-009
                </span>
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  Smart Water Leakage Detection
                </h4>
              </div>
              <p className="text-xs text-slate-500 font-medium truncate">
                Maharashtra Urban Water Directorate (BWSSB/CIDCO)
              </p>

              <div className="flex items-center gap-3 pt-0.5 text-xs text-slate-700 flex-wrap">
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                  Status: Pilot (Day 82)
                </span>
                <span className="text-slate-600 text-xs font-medium">
                  KPI Achievement: <strong className="text-emerald-700 font-mono font-bold">76%</strong>
                </span>
              </div>

              {/* Critical banner */}
              <div className="flex items-center gap-1.5 text-xs text-red-900 bg-red-50 border border-red-200 px-2.5 py-1.5 rounded-md mt-1.5 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>⚠ Pilot milestone overdue (Sensor Node 4B)</span>
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <button
                onClick={() => onNavigateTab('pilots')}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
              >
                <span>Open Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
