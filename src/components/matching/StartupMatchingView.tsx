import React, { useState } from 'react';
import { 
  Sparkles, 
  AlertTriangle, 
  ArrowRight, 
  Building2, 
  TrendingDown, 
  TrendingUp 
} from 'lucide-react';
import { mockChallenges, mockStartups } from '../../data/mockData';
import { StartupMatch, NavigationTab } from '../../types/procurement';
import { ExplainabilityModal } from './ExplainabilityModal';

interface StartupMatchingViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onSelectStartupForEvaluation?: (startupId: string) => void;
}

export const StartupMatchingView: React.FC<StartupMatchingViewProps> = ({
  onNavigateTab,
  onSelectStartupForEvaluation,
}) => {
  const [selectedStartup, setSelectedStartup] = useState<StartupMatch | null>(null);
  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);
  const [activeChallenge] = useState(mockChallenges[0]);

  const handleOpenExplainability = (startup: StartupMatch) => {
    setSelectedStartup(startup);
    setIsExplainModalOpen(true);
  };

  const handleSendToEvaluation = (startupId: string) => {
    if (onSelectStartupForEvaluation) {
      onSelectStartupForEvaluation(startupId);
    }
    onNavigateTab('evaluations');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700">
              Module 03 • AI Semantic Startup Discovery
            </span>
            <span className="text-[10px] bg-indigo-50 text-indigo-800 font-bold px-2 py-0.5 rounded border border-indigo-200 font-mono">
              DPIIT Startup India API Connected
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            AI Semantic Startup Matching & Ranking
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Multi-factor weighted compatibility engine evaluating technology fit, domain experience, budget headroom, and past performance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-600 font-mono font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <strong className="text-slate-900">48</strong> Startups Evaluated • <strong className="text-blue-700">3</strong> Shortlisted
          </span>
        </div>
      </div>

      {/* Challenge Context Hero Card */}
      <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-xs text-slate-900">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {activeChallenge.code}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                {activeChallenge.title}
              </h3>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Department: <strong className="text-slate-800">{activeChallenge.ministry}</strong> • Budget: <strong className="text-amber-700">₹{activeChallenge.budgetInLakhs} Lakhs</strong> • Pilot Duration: <strong className="text-slate-800">{activeChallenge.pilotDurationDays} Days</strong>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs bg-blue-50 text-blue-800 font-bold px-3 py-1.5 rounded-lg border border-blue-200">
              Target Testbed: Pune Wards 4, 7, 9
            </span>
          </div>
        </div>

        {/* Problem and Desired Outcomes Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 text-xs">
          <div className="md:col-span-6 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
              Problem Statement
            </span>
            <p className="text-slate-800 mt-1 leading-relaxed font-medium">
              {activeChallenge.rawProblemText}
            </p>
          </div>

          <div className="md:col-span-6 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
              Desired Outcomes
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1.5">
              <div className="flex items-center gap-1.5 text-blue-900 font-bold bg-white p-2 rounded border border-slate-200">
                <TrendingDown className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>↓ Fuel consumption</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-900 font-bold bg-white p-2 rounded border border-slate-200">
                <TrendingDown className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>↓ Missed pickups</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-900 font-bold bg-white p-2 rounded border border-slate-200">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>↑ Route efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI MATCH RESULTS SECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              AI Match Results & Semantic Ranking
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Ranked by Weighted Algorithmic Fit
          </span>
        </div>

        {/* Startups List */}
        <div className="space-y-4">
          {mockStartups.map((startup, index) => {
            const isRankOne = index === 0;

            return (
              <div
                key={startup.id}
                className={`bg-white border rounded-xl p-5 shadow-xs transition-all ${
                  isRankOne
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50/20 via-white to-blue-50/20 shadow-md ring-1 ring-blue-400'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Top Row: Rank, Startup Name, Score, Risk Level */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm shrink-0 shadow-2xs ${
                        isRankOne
                          ? 'bg-amber-400 text-amber-950 font-bold'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      #{index + 1}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-extrabold text-slate-900">
                          {startup.startupName}
                        </h4>
                        <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200 font-mono font-medium">
                          {startup.city}, {startup.state}
                        </span>
                        <span className="text-[10px] text-blue-800 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200 font-mono font-bold">
                          {startup.dpiitRecognitionNo}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {startup.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Match Score & Risk Level */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">
                        Overall AI Match
                      </div>
                      <div className="text-2xl font-black font-mono text-blue-700">
                        {startup.overallMatchScore}%{' '}
                        <span className="text-xs font-bold text-slate-500 uppercase">Match</span>
                      </div>
                    </div>

                    <div className="text-right pl-3 border-l border-slate-200">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">
                        Risk Level
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                          startup.riskLevel === 'LOW'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {startup.riskLevel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle: Breakdown Scores (if Rank 1) or Summary */}
                {isRankOne ? (
                  <div className="py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[10px] font-bold">Technology Match</div>
                      <div className="text-sm font-bold font-mono text-emerald-700 mt-0.5 flex items-center gap-1">
                        <span>✓</span>
                        <span>{startup.scores.technologyMatch}%</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[10px] font-bold">Problem Domain</div>
                      <div className="text-sm font-bold font-mono text-emerald-700 mt-0.5 flex items-center gap-1">
                        <span>✓</span>
                        <span>{startup.scores.problemDomainMatch}%</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[10px] font-bold">Budget Fit</div>
                      <div className="text-sm font-bold font-mono text-emerald-700 mt-0.5 flex items-center gap-1">
                        <span>✓</span>
                        <span>{startup.scores.budgetFit}%</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[10px] font-bold">Pilot Readiness</div>
                      <div className="text-sm font-bold font-mono text-emerald-700 mt-0.5 flex items-center gap-1">
                        <span>✓</span>
                        <span>{startup.scores.pilotReadiness}%</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[10px] font-bold">Relevant Experience</div>
                      <div className="text-sm font-bold font-mono text-emerald-700 mt-0.5 flex items-center gap-1">
                        <span>✓</span>
                        <span>{startup.scores.relevantExperience}%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-3 text-xs">
                    {startup.riskFlags.length > 0 && (
                      <div className="flex items-center gap-2 text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{startup.riskFlags[0]}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Row: Actions */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-600 flex items-center gap-1 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {startup.municipalDeploymentsCount > 0
                        ? `${startup.municipalDeploymentsCount} Verified Municipal Deployments`
                        : 'Commercial / Private Fleet Experience'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      onClick={() => handleOpenExplainability(startup)}
                      className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-300 transition cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>View Explanation (XAI)</span>
                    </button>

                    <button
                      onClick={() => handleSendToEvaluation(startup.id)}
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-2xs cursor-pointer ${
                        isRankOne
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                      }`}
                    >
                      <span>Send to Evaluation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explainability Modal Component */}
      {selectedStartup && (
        <ExplainabilityModal
          startup={selectedStartup}
          isOpen={isExplainModalOpen}
          onClose={() => setIsExplainModalOpen(false)}
          onSendToEvaluation={handleSendToEvaluation}
        />
      )}
    </div>
  );
};
