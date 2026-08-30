import React from 'react';
import { 
  X, 
  Printer, 
  Lock, 
  FileSpreadsheet,
} from 'lucide-react';
import { mockScaleReadiness } from '../../data/mockData';

interface ProcurementDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcurementDossierModal: React.FC<ProcurementDossierModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-300 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-900 flex flex-col">
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-800">
                Official Document Dossier
              </div>
              <h2 className="text-base font-extrabold text-slate-900">
                Government Procurement Sanction Order & GeM Transition Dossier
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

        {/* Printable Official Gov Memorandum Sheet */}
        <div className="p-8 bg-white text-slate-900 font-sans space-y-6">
          {/* Gov Letterhead */}
          <div className="text-center pb-6 border-b border-slate-200 space-y-1">
            <div className="text-3xl">🏛️</div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-slate-700">
              GOVERNMENT OF INDIA • MINISTRY OF HOUSING & URBAN AFFAIRS
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              National Innovation Procurement Portal • GFR 2017 Rule 194 Fast-Track Cell
            </div>
            <div className="text-sm font-black text-slate-900 pt-2 uppercase tracking-wide">
              FORMAL SCALE SANCTION ORDER & GeM CATALOGUE AUTHORIZATION
            </div>
            <div className="text-[11px] text-blue-700 font-mono font-bold">
              SANCTION NO: {mockScaleReadiness.officerApproval?.sanctionOrderNumber}
            </div>
          </div>

          {/* Key Particulars Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div>
              <div className="text-slate-500 text-[10px] font-bold">CHALLENGE CODE</div>
              <div className="font-bold text-slate-900 font-mono mt-0.5">INNO-2026-014</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] font-bold">SELECTED STARTUP</div>
              <div className="font-bold text-slate-900 mt-0.5">RouteAI Technologies Pvt Ltd</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] font-bold">DPIIT REGISTRATION</div>
              <div className="font-bold text-blue-700 font-mono mt-0.5">DIPP-89421-IN</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] font-bold">ESTIMATED SCALE CAP</div>
              <div className="font-bold text-amber-800 font-mono mt-0.5">₹ 3.80 Crores (15 ULBs)</div>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-2 text-xs leading-relaxed text-slate-700">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              1. Sandbox Pilot Performance Certification
            </h4>
            <p>
              Under the sandbox provisions of GFR 2017 Rule 194, candidate startup <strong>RouteAI Technologies Pvt Ltd</strong> was deployed for a 90-day sandbox pilot across Wards 4, 7, and 9 of Pune Municipal Corporation. Third-party telemetry audits independently verified:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-800 font-medium">
              <li><strong>Fuel Consumption:</strong> 18.2% reduction in bulk diesel consumption (Target was 15.0%).</li>
              <li><strong>Citizen Grievance Rate:</strong> 64.2% reduction in missed waste collection tickets (Target was 50.0%).</li>
              <li><strong>Route Efficiency Score:</strong> 91.0 / 100 on post-facto GPS polyline alignment index.</li>
            </ul>
          </div>

          {/* Section 2: Scale Recommendation & GeM Transition */}
          <div className="space-y-2 text-xs leading-relaxed text-slate-700">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
              2. Government e-Marketplace (GeM) Transition Route
            </h4>
            <p>
              In accordance with Ministry of Commerce & Industry guidelines for scaling validated innovation pilots, this solution is hereby approved for direct catalogue listing under GeM Category: <em>"Smart Municipal Fleet Route Optimization & Autonomous Dispatch Software"</em>.
            </p>
          </div>

          {/* Official Seal & Digital Signature Representation */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-emerald-200 font-mono text-[11px] text-emerald-800 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>NIC Cryptographic Time-Seal Verified</span>
              </div>
              <div className="text-slate-500 text-[10px]">
                SHA-256: {mockScaleReadiness.officerApproval?.digitalSignatureSha}
              </div>
            </div>

            <div className="text-center sm:text-right space-y-1">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-amber-600 mx-auto sm:ml-auto flex items-center justify-center text-amber-700 text-xs font-bold rotate-12">
                SEAL
              </div>
              <div className="font-bold text-slate-900">{mockScaleReadiness.officerApproval?.officerName}</div>
              <div className="text-[10px] text-slate-500 font-medium">{mockScaleReadiness.officerApproval?.designation}</div>
              <div className="text-[10px] text-blue-700 font-mono font-bold">Ministry of Housing & Urban Affairs, New Delhi</div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition border border-slate-300 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Formal Dossier</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
