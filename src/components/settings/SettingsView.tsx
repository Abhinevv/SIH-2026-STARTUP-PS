import React from 'react';
import { Settings } from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-blue-600" />
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            System Configuration & GFR 2017 Compliance Matrix
          </h2>
        </div>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          Configure DPIIT API endpoints, GeM marketplace integration keys, and Standing Committee threshold limits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2">
            Government e-Marketplace (GeM) Fast-Track Bridge
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="font-bold text-slate-900">GeM Pilot-to-Catalog API v4.2</div>
                <div className="text-[11px] text-slate-500 font-medium">Automatic custom category publishing upon Scale Sanction</div>
              </div>
              <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">CONNECTED</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="font-bold text-slate-900">DPIIT Startup India Registry Sync</div>
                <div className="text-[11px] text-slate-500 font-medium">Daily verification of recognized entity certificates</div>
              </div>
              <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2">
            Security & Data Localisation Certifications
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="font-bold text-slate-900">NIC / STQC Security Audit</div>
                <div className="text-[11px] text-slate-500 font-medium">Zero vulnerability clearance certificate #STQC-2026-881</div>
              </div>
              <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">CLEARED</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="font-bold text-slate-900">CVC Immutable Hash Anchor</div>
                <div className="text-[11px] text-slate-500 font-medium">SHA-256 state chain validated every 60 seconds</div>
              </div>
              <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">ENFORCED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
