import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Copy, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Award, 
  Scale, 
  Sparkles 
} from 'lucide-react';
import { mockProcurementTemplates } from '../../data/mockData';
import { NavigationTab, ProcurementTemplate } from '../../types/procurement';

interface TemplateManagerViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenDossier?: () => void;
}

export const TemplateManagerView: React.FC<TemplateManagerViewProps> = ({
  onNavigateTab,
  onOpenDossier,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<ProcurementTemplate>(mockProcurementTemplates[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (tpl: ProcurementTemplate) => {
    const text = `# ${tpl.title}\n**Regulation**: ${tpl.gfrRule}\n**Description**: ${tpl.description}\n\n` +
      tpl.sections.map(s => `### ${s.heading}\n${s.content}`).join('\n\n');
    
    navigator.clipboard.writeText(text);
    setCopiedId(tpl.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTemplateIcon = (category: string) => {
    switch (category) {
      case 'problem_statement': return Layers;
      case 'contract_sla': return FileText;
      case 'evaluation_criteria': return Award;
      case 'scale_memorandum': return Scale;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-700">
              Module 09 • Standardized Procurement Template Library
            </span>
            <span className="text-[10px] bg-blue-50 text-blue-800 font-extrabold px-2 py-0.5 rounded border border-blue-200 font-mono">
              SIH PS #26136 Core Feature
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
            Government & Startup Legal Framework Manager
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
            Standardized, legally vetted templates for problem statements, pilot SLA agreements, IP clauses, and GeM scale memorandums under GFR 2017 Rule 194.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenDossier}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Official Gazette Dossier</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Template Selector (Left) & Live Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Template Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Standard Procurement Templates
          </div>

          {mockProcurementTemplates.map((tpl) => {
            const Icon = getTemplateIcon(tpl.category);
            const isSelected = selectedTemplate.id === tpl.id;

            return (
              <div
                key={tpl.id}
                onClick={() => setSelectedTemplate(tpl)}
                className={`p-4 rounded-xl border transition-all cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-500 ring-1 ring-blue-500'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {tpl.title}
                      </h4>
                      <p className="text-[11px] text-blue-700 font-mono font-semibold mt-0.5">
                        {tpl.gfrRule}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-medium">
                        {tpl.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {tpl.complianceLevel}
                  </span>
                  <span className="text-slate-400 font-mono">{tpl.lastUpdated}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Document Sheet (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Header of Preview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                  Template Inspection Sheet
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
                  {selectedTemplate.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono font-medium">
                  Statutory Reference: {selectedTemplate.gfrRule}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(selectedTemplate)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 border border-slate-200 transition cursor-pointer"
                >
                  {copiedId === selectedTemplate.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Template Summary Note */}
            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed font-medium">
              <span className="font-bold text-blue-950">Statutory Purpose:</span> {selectedTemplate.description}
            </div>

            {/* Sections Accordion / Content */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Standard Clauses & Required Fields
              </div>

              {selectedTemplate.sections.map((sec, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-mono text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{sec.heading}</span>
                  </h4>
                  <p className="text-xs text-slate-700 pl-7 leading-relaxed font-medium">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>CVC & GFR 2017 Certified Clause Library</span>
            </div>

            {selectedTemplate.category === 'problem_statement' ? (
              <button
                onClick={() => onNavigateTab('challenges')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Use in AI Challenge Builder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : selectedTemplate.category === 'scale_memorandum' ? (
              <button
                onClick={() => onNavigateTab('scale')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Open Scale Sanction Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onNavigateTab('evaluations')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>View Evaluation Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
