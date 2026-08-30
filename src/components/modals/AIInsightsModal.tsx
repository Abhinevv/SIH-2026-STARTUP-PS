import React from 'react';
import { 
  X, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb, 
} from 'lucide-react';
import { mockAIIntelligenceSummary } from '../../data/mockData';
import { NavigationTab } from '../../types/procurement';

interface AIInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: NavigationTab) => void;
}

export const AIInsightsModal: React.FC<AIInsightsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-300 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-900 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-blue-700">
                Neural Intelligence Engine
              </div>
              <h2 className="text-base font-extrabold text-slate-900">
                Comprehensive AI Procurement Insights & Risk Radar
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

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-blue-700 font-mono">12</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Analyzed Tenders</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-indigo-700 font-mono">48</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Startup Matches</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-amber-700 font-mono">7</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Procurement Risks</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-emerald-700 font-mono">4</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Scale Predicted</div>
            </div>
          </div>

          {/* Deep Insight Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Synthesized Recommendations
            </h3>

            {mockAIIntelligenceSummary.insights.map((ins) => (
              <div
                key={ins.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ins.severity === 'high' ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                    ) : ins.severity === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Lightbulb className="w-4 h-4 text-cyan-600" />
                    )}
                    <h4 className="text-xs font-bold text-slate-900">{ins.title}</h4>
                  </div>
                  <span className="text-[9px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    {ins.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pl-6 font-medium">
                  {ins.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
