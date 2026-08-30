import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  ArrowRight, 
  Building2, 
  Clock, 
  IndianRupee, 
  Check, 
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import { mockChallenges } from '../../data/mockData';
import { Challenge, NavigationTab } from '../../types/procurement';

interface ChallengeBuilderViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onChallengeCreated?: (challenge: Challenge) => void;
}

export const ChallengeBuilderView: React.FC<ChallengeBuilderViewProps> = ({
  onNavigateTab,
}) => {
  const [activeTab, setActiveTab] = useState<'builder' | 'repository'>('builder');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(true);

  // Form states initialized with SIH Pune waste management story data
  const [rawProblemInput, setRawProblemInput] = useState(
    "Municipal waste collection is inefficient and diesel fuel costs are high. Garbage trucks follow static fixed route sheets regardless of bin fill levels, leading to missed pickups, citizen complaints, and excessive idle engine running during morning peak-hour traffic."
  );
  const [department, setDepartment] = useState("Pune Municipal Corporation - Solid Waste Management");
  const [budget, setBudget] = useState("25.00");
  const [duration, setDuration] = useState("90");

  const [structuredChallenge, setStructuredChallenge] = useState<Challenge>(mockChallenges[0]);

  const handleRunAIStructuring = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      setStructuredChallenge(mockChallenges[0]);
    }, 800);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700">
              Module 02 • AI Challenge Structuring
            </span>
            <span className="text-[10px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded border border-blue-200 font-mono">
              GFR 194 Compliant
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            AI-Assisted Challenge Formulation Engine
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Converts vague municipal problem statements into structured, outcome-driven tenders with verifiable KPI baselines.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition cursor-pointer ${
              activeTab === 'builder'
                ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            AI Structuring Studio
          </button>
          <button
            onClick={() => setActiveTab('repository')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition cursor-pointer ${
              activeTab === 'repository'
                ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Challenges (12)
          </button>
        </div>
      </div>

      {activeTab === 'builder' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Input Form (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Input Civic Problem
                  </h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono font-medium">Step 1 of 2</span>
              </div>

              {/* Department Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Target Municipal Department / Ministry
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs"
                  />
                </div>
              </div>

              {/* Problem Description Area */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Raw Problem Statement (As observed by Department)</span>
                  <span className="text-[10px] text-slate-500 font-normal">Natural Language</span>
                </label>
                <textarea
                  rows={5}
                  value={rawProblemInput}
                  onChange={(e) => setRawProblemInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-900 font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 leading-relaxed shadow-2xs"
                  placeholder="Describe the department bottleneck, current pain points, and why traditional methods have failed..."
                />
              </div>

              {/* Budget & Timeline Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Max Pilot Budget
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-8 pr-8 py-2 text-xs text-slate-900 font-bold font-mono focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs"
                    />
                    <span className="text-[10px] text-slate-500 font-medium absolute right-2.5 top-1/2 -translate-y-1/2">
                      Lakhs
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Pilot Duration
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-8 pr-12 py-2 text-xs text-slate-900 font-bold font-mono focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs"
                    />
                    <span className="text-[10px] text-slate-500 font-medium absolute right-2.5 top-1/2 -translate-y-1/2">
                      Days
                    </span>
                  </div>
                </div>
              </div>

              {/* Trigger Button */}
              <button
                onClick={handleRunAIStructuring}
                disabled={isGenerating}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Analyzing Problem & Structuring KPIs...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Run AI Challenge Structuring Engine</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Demo Context Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 font-bold text-blue-900">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>How AI Solves Government Tender Ambiguity</span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-medium">
                Traditional tenders fail when requirements are vague or feature-centric. INNO-PROC AI structures problems into <strong>quantifiable baseline → target variance metrics</strong> with cryptographic telemetry validation rules.
              </p>
            </div>
          </div>

          {/* Right Column: Structured AI Challenge Specification (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {hasGenerated ? (
              <div className="bg-white border border-blue-300 rounded-xl p-6 shadow-xs space-y-5 relative">
                {/* AI Badge Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      FORMAL SPECIFICATION GENERATED
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-600">
                    Challenge Code: <strong className="text-blue-700 font-bold">{structuredChallenge.code}</strong>
                  </span>
                </div>

                {/* Challenge Title */}
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Standardized Challenge Title
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    {structuredChallenge.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {structuredChallenge.ministry} • {structuredChallenge.department}
                  </p>
                </div>

                {/* Budget & Timeline Pill Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Sanctioned Budget</div>
                    <div className="text-sm font-extrabold text-slate-900 font-mono mt-0.5">₹ {structuredChallenge.budgetInLakhs.toFixed(2)} Lakhs</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Pilot Sandbox Duration</div>
                    <div className="text-sm font-extrabold text-slate-900 font-mono mt-0.5">{structuredChallenge.pilotDurationDays} Calendar Days</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Procurement Route</div>
                    <div className="text-xs font-bold text-blue-700 mt-0.5">GFR Rule 194 (Innovation)</div>
                  </div>
                </div>

                {/* Structured Problem & Desired Outcomes */}
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Formal Problem Formulation
                    </div>
                    <p className="text-xs text-slate-800 mt-1 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200 font-medium">
                      {structuredChallenge.problemStatement}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Desired Quantifiable Outcomes
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1.5">
                      {structuredChallenge.desiredOutcomes.map((outcome, idx) => (
                        <div key={idx} className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-bold text-blue-900 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI-Generated Quantifiable KPI Baselines */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      AI-Derived Baseline & Verification Telemetry
                    </span>
                    <span className="text-[10px] text-amber-800 font-mono font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">3 Verifiable Metrics</span>
                  </div>

                  <div className="space-y-2">
                    {structuredChallenge.kpiBaselines.map((kpi) => (
                      <div key={kpi.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="font-bold text-slate-900">{kpi.metric}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                            Method: {kpi.measurementMethod}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <div className="text-[10px] text-slate-500 font-medium">Baseline</div>
                            <div className="font-mono font-bold text-slate-700">{kpi.baseline}</div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                          <div className="text-left">
                            <div className="text-[10px] text-emerald-700 font-bold">Target</div>
                            <div className="font-mono font-black text-emerald-700">{kpi.target}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Standing Committee clearance pre-verified</span>
                  </div>

                  <button
                    onClick={() => onNavigateTab('matching')}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                  >
                    <span>Publish Challenge & Run AI Startup Matching</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        /* Repository Tab */
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Active Municipal Challenges Repository
            </h3>
            <span className="text-xs text-slate-500 font-mono font-medium">{mockChallenges.length} Active Records</span>
          </div>

          <div className="divide-y divide-slate-100">
            {mockChallenges.map((ch) => (
              <div key={ch.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      {ch.code}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{ch.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {ch.ministry} • {ch.department} • Budget: ₹{ch.budgetInLakhs} Lakhs
                  </p>
                  <p className="text-xs text-slate-700 line-clamp-1">{ch.problemStatement}</p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setStructuredChallenge(ch);
                      setActiveTab('builder');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
                  >
                    Load in Studio
                  </button>
                  <button
                    onClick={() => onNavigateTab('matching')}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
                  >
                    View Matches
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
