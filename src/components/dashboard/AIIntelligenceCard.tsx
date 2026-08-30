import React from 'react';
import { 
  Sparkles, 
  Search, 
  Zap, 
  AlertTriangle, 
  TrendingUp, 
  Lightbulb, 
  ArrowRight,
} from 'lucide-react';
import { mockAIIntelligenceSummary } from '../../data/mockData';

interface AIIntelligenceCardProps {
  onOpenAIInsights?: () => void;
  onNavigateTab?: (tab: any) => void;
}

export const AIIntelligenceCard: React.FC<AIIntelligenceCardProps> = ({
  onOpenAIInsights,
}) => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/20 to-white border border-blue-200 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-950">
                AI Procurement Intelligence
              </h3>
              <p className="text-[10px] text-slate-500 font-medium">
                Live neural risk assessment & semantic synthesis
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded border border-blue-200">
            Active
          </span>
        </div>

        {/* 5 Core Intelligence Bullets */}
        <div className="py-3.5 space-y-2 text-xs">
          {/* 1 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold text-slate-800">
                {mockAIIntelligenceSummary.challengesAnalyzedCount} challenges analyzed & structured
              </span>
            </div>
            <span className="text-[10px] text-blue-700 font-mono font-bold">100% Ingested</span>
          </div>

          {/* 2 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold text-slate-800">
                {mockAIIntelligenceSummary.startupMatchesCount} startup matches generated
              </span>
            </div>
            <span className="text-[10px] text-amber-800 font-mono font-bold">DPIIT Mapped</span>
          </div>

          {/* 3 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold text-amber-950">
                {mockAIIntelligenceSummary.potentialRisksDetectedCount} potential procurement risks detected
              </span>
            </div>
            <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded border border-amber-300 font-mono font-bold">
              Action Needed
            </span>
          </div>

          {/* 4 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-emerald-950">
                {mockAIIntelligenceSummary.pilotsReadyForScaleCount} pilots predicted ready for scale
              </span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.2 rounded border border-emerald-300 font-mono font-bold">
              High Fit
            </span>
          </div>

          {/* 5 */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2.5">
              <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold text-slate-800">
                {mockAIIntelligenceSummary.kpiDefinitionsNeededCount} challenges need better KPI definitions
              </span>
            </div>
            <span className="text-[10px] text-blue-700 font-mono font-bold">Refinement</span>
          </div>
        </div>
      </div>

      {/* Single Clean CTA Button */}
      <div className="pt-2 border-t border-blue-100 flex justify-end">
        <button
          onClick={onOpenAIInsights}
          className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition group cursor-pointer"
        >
          <span>View AI Insights & Risk Radar</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
