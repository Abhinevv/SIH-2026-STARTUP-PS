import React from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';
import { mockAuditLogs } from '../../data/mockData';

interface AuditLogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditLogModal: React.FC<AuditLogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-300 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-900 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-800">
                CVC & CAG Transparency Vault
              </div>
              <h2 className="text-base font-extrabold text-slate-900">
                Immutable Cryptographic Audit Trail (GFR 2017)
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
        <div className="p-6 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-mono font-bold">
                  <th className="py-2.5 px-3">Timestamp (IST)</th>
                  <th className="py-2.5 px-3">Authorized Actor</th>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Action Event</th>
                  <th className="py-2.5 px-3">Entity Target</th>
                  <th className="py-2.5 px-3">SHA-256 Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800 font-mono text-[11px]">
                {mockAuditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 text-slate-500">{log.timestamp}</td>
                    <td className="py-3 px-3 font-bold text-slate-900 font-sans">{log.officer}</td>
                    <td className="py-3 px-3 text-slate-600 font-sans font-medium">{log.role}</td>
                    <td className="py-3 px-3 text-blue-700 font-bold">{log.action}</td>
                    <td className="py-3 px-3 text-slate-700 font-medium">{log.entity}</td>
                    <td className="py-3 px-3 text-emerald-700 font-mono font-bold flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" />
                      <span>{log.hash}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition cursor-pointer"
          >
            Close Audit Log
          </button>
        </div>
      </div>
    </div>
  );
};
