import React from 'react';
import { 
  Lock, 
  Download, 
} from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface ValidationViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenDossier?: () => void;
}

export const ValidationView: React.FC<ValidationViewProps> = ({
  onOpenDossier
}) => {
  const auditPackages = [
    {
      id: 'val-01',
      title: 'IOCL Fleet Telemetry & Fuel Audit',
      entity: 'Indian Oil Corporation Ltd (IOCL)',
      date: 'Aug 28, 2026',
      status: 'VERIFIED_100',
      findings: 'Verified 18.2% reduction in bulk diesel dispensing across Wards 4, 7, and 9 compactors.',
      sha: 'sha256:88fa7210b642e19a'
    },
    {
      id: 'val-02',
      title: 'PMC 311 Citizen Grievance Resolution Audit',
      entity: 'Pune Municipal Corporation e-Governance Cell',
      date: 'Aug 29, 2026',
      status: 'VERIFIED_100',
      findings: 'Grievance ticket frequency reduced from 14/wk to 5/wk with 94.2% citizen resolution rating.',
      sha: 'sha256:44c098df2187b5a1'
    },
    {
      id: 'val-03',
      title: 'MeitY Cloud Data Localisation & ISO 27001 Audit',
      entity: 'STQC Directorate (Ministry of Electronics & IT)',
      date: 'Aug 24, 2026',
      status: 'VERIFIED_100',
      findings: 'Zero cross-border data leakage; all telematics stored exclusively in MeitY Mumbai zone.',
      sha: 'sha256:19bc6340f892a71d'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Module 08 • Third-Party Independent Validation
            </span>
            <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200 font-mono">
              CVC Audit Trail Compliant
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Independent Verification & Evidence Lock
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Cryptographically sealed testbed telemetry verified by authorized public institutions and empanelled third-party auditors.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenDossier}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Master Audit Certificate</span>
          </button>
        </div>
      </div>

      {/* Verification Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {auditPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white border border-emerald-300 rounded-xl p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded border border-emerald-300 font-mono">
                  ✓ VERIFIED
                </span>
                <span className="text-[10px] text-slate-500 font-mono font-medium">{pkg.date}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 leading-snug">{pkg.title}</h4>
              <p className="text-[11px] text-slate-500">Auditor: <strong className="text-slate-800">{pkg.entity}</strong></p>
              <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-relaxed font-medium">
                "{pkg.findings}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                <Lock className="w-2.5 h-2.5" />
                <span>{pkg.sha}</span>
              </span>
              <button 
                onClick={onOpenDossier}
                className="text-blue-700 hover:underline font-bold cursor-pointer"
              >
                View Cert
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
