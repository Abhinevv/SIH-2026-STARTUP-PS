import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  Lock, 
  Building2
} from 'lucide-react';
import { mockAuditLogs } from '../../data/mockData';

interface RecentActivityAuditProps {
  onOpenFullAudit?: () => void;
}

export const RecentActivityAudit: React.FC<RecentActivityAuditProps> = ({ onOpenFullAudit }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      {/* Title */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Immutable Audit Trail & Compliance Feed
          </h3>
        </div>
        <button
          onClick={onOpenFullAudit}
          className="text-[11px] text-blue-700 hover:text-blue-800 font-semibold flex items-center gap-1 transition cursor-pointer"
        >
          <span>Full Audit Log</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      {/* Audit Log Entries */}
      <div className="py-2 divide-y divide-slate-100">
        {mockAuditLogs.slice(0, 4).map((log) => (
          <div key={log.id} className="py-2.5 flex items-start justify-between gap-3 text-xs">
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-slate-900">
                  {log.officer}
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded border border-slate-200 font-semibold">
                  {log.role}
                </span>
              </div>
              <div className="text-[11px] text-slate-600">
                <span className="text-blue-700 font-mono font-bold">{log.action}</span> on{' '}
                <span className="text-slate-800 font-semibold">{log.entity}</span>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1 justify-end font-medium">
                <Clock className="w-2.5 h-2.5" />
                <span>{log.timestamp.split(' ')[1]}</span>
              </div>
              <div className="text-[9px] text-emerald-700 font-mono mt-0.5 flex items-center gap-1 justify-end font-bold">
                <Lock className="w-2 h-2" />
                <span>{log.hash}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Bottom Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
        <span className="flex items-center gap-1">
          <Building2 className="w-3.5 h-3.5 text-slate-400" />
          MeitY Empanelled Cloud • CVC & CAG Audit Ready
        </span>
        <span className="text-emerald-700 font-mono font-bold">100% Verified</span>
      </div>
    </div>
  );
};
