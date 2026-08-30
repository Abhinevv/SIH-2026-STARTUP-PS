import React from 'react';
import { 
  HelpCircle, 
  FileCode, 
  Cpu, 
  Award, 
  PlayCircle, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
} from 'lucide-react';
import { mockPipelineStages } from '../../data/mockData';
import { PipelineStageKey } from '../../types/procurement';

interface InnovationPipelineProps {
  onSelectStage: (stage: PipelineStageKey) => void;
}

export const InnovationPipeline: React.FC<InnovationPipelineProps> = ({ onSelectStage }) => {
  const getStageIcon = (key: PipelineStageKey) => {
    switch (key) {
      case 'problem': return HelpCircle;
      case 'challenge': return FileCode;
      case 'matching': return Cpu;
      case 'evaluation': return Award;
      case 'pilot': return PlayCircle;
      case 'validation': return CheckCircle2;
      case 'scale': return TrendingUp;
    }
  };

  const getStageTheme = (key: PipelineStageKey) => {
    switch (key) {
      case 'problem': return 'border-slate-200 bg-slate-50/70 hover:border-slate-400 text-slate-800';
      case 'challenge': return 'border-blue-200 bg-blue-50/60 hover:border-blue-400 text-blue-950';
      case 'matching': return 'border-indigo-200 bg-indigo-50/60 hover:border-indigo-400 text-indigo-950';
      case 'evaluation': return 'border-amber-200 bg-amber-50/60 hover:border-amber-400 text-amber-950';
      case 'pilot': return 'border-emerald-200 bg-emerald-50/60 hover:border-emerald-400 text-emerald-950';
      case 'validation': return 'border-teal-200 bg-teal-50/60 hover:border-teal-400 text-teal-950';
      case 'scale': return 'border-emerald-300 bg-gradient-to-br from-amber-50 to-emerald-50 hover:border-emerald-500 text-emerald-950 shadow-xs';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              National Innovation Procurement Pipeline
            </h2>
            <span className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded border border-slate-200 font-semibold">
              GFR Rule 194
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Click any stage below to inspect active tenders and projects in that lifecycle phase
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 hidden sm:block font-mono">
          Total Inflow: 18 Civic Problems → 3 Scaled
        </div>
      </div>

      {/* Visual Pipeline Grid */}
      <div className="py-5 px-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
          {mockPipelineStages.map((stage, idx) => {
            const Icon = getStageIcon(stage.key);
            const styleClass = getStageTheme(stage.key);

            return (
              <div key={stage.key} className="relative flex flex-col items-center">
                <button
                  onClick={() => onSelectStage(stage.key)}
                  className={`w-full p-3.5 rounded-xl border flex flex-col items-center text-center transition-all duration-150 cursor-pointer hover:-translate-y-0.5 hover:shadow-xs group ${styleClass}`}
                  title={`Open ${stage.label} module`}
                >
                  {/* Step number badge */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  </div>

                  {/* Stage Name */}
                  <span className="text-[11px] font-bold uppercase tracking-tight leading-tight line-clamp-1">
                    {stage.label}
                  </span>

                  {/* Count */}
                  <span className="text-2xl font-black font-mono my-1 tracking-tight text-slate-900">
                    {stage.count}
                  </span>

                  {/* Trend pill */}
                  <span className="text-[9px] font-semibold text-slate-600 bg-white/90 px-1.5 py-0.5 rounded border border-slate-200 w-full truncate">
                    {stage.trend}
                  </span>
                </button>

                {/* Arrow Connector */}
                {idx < mockPipelineStages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
