import React from 'react';
import { 
  Plus, 
  Shield, 
} from 'lucide-react';
import { KPICards } from './KPICards';
import { InnovationPipeline } from './InnovationPipeline';
import { AIIntelligenceCard } from './AIIntelligenceCard';
import { ChallengesAttentionList } from './ChallengesAttentionList';
import { RecentActivityAudit } from './RecentActivityAudit';
import { NavigationTab, PipelineStageKey } from '../../types/procurement';

interface DashboardViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenCreateChallenge: () => void;
  onOpenAIInsights: () => void;
  onOpenAuditLog: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigateTab,
  onOpenCreateChallenge,
  onOpenAIInsights,
  onOpenAuditLog,
}) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Officer Top Greeting & Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700">
              Executive Command Center
            </span>
            <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
              Live Operations
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Good Morning, Officer
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
            Innovation Procurement Overview: Track citizen challenges, AI-matched startups, active sandbox pilots, and verified outcomes ready for national scaling.
          </p>
        </div>

        {/* Primary CTA: Create New Challenge */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCreateChallenge}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create New Challenge</span>
          </button>
        </div>
      </div>

      {/* 4 Summary KPI Cards */}
      <KPICards onNavigateTab={onNavigateTab} />

      {/* The MOST IMPORTANT Dashboard Component: Innovation Procurement Pipeline */}
      <InnovationPipeline 
        onSelectStage={(stage: PipelineStageKey) => {
          if (stage === 'challenge') onNavigateTab('challenges');
          else if (stage === 'matching') onNavigateTab('matching');
          else if (stage === 'evaluation') onNavigateTab('evaluations');
          else if (stage === 'pilot') onNavigateTab('pilots');
          else if (stage === 'validation') onNavigateTab('validation');
          else if (stage === 'scale') onNavigateTab('scale');
          else onNavigateTab('challenges');
        }}
      />

      {/* Two Column Section: AI Intelligence (Left) and Challenges Requiring Attention (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* AI Intelligence Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <AIIntelligenceCard 
            onOpenAIInsights={onOpenAIInsights}
            onNavigateTab={onNavigateTab}
          />
        </div>

        {/* Challenges Needing Attention (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <ChallengesAttentionList 
            onNavigateTab={onNavigateTab}
          />
        </div>
      </div>

      {/* Bottom Row: Audit Feed & GFR 194 Regulatory Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <RecentActivityAudit onOpenFullAudit={onOpenAuditLog} />
        </div>

        {/* Quick Gov Innovation Sandbox Policy Summary */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Shield className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                GFR Rule 194 Sandbox Fast-Track
              </h3>
            </div>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed font-medium">
              Under GFR 2017 Rule 194 & Startup India guidelines, government entities can conduct non-traditional pilot procurements up to <strong>₹50 Lakhs</strong> with validated DPIIT startups prior to floating open tenders.
            </p>
            <div className="mt-3 p-2.5 bg-blue-50/80 rounded-lg border border-blue-200 text-[11px] text-blue-900 font-medium">
              <span className="font-bold text-blue-800">Scale Transition:</span> Pilots with &gt;85% KPI verification qualify for direct catalog integration on Government e-Marketplace (GeM).
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-500 font-medium">
            <span>Ministry of Finance Reference</span>
            <span className="text-blue-700 font-mono font-bold">OM-2023-F.1/26</span>
          </div>
        </div>
      </div>
    </div>
  );
};
