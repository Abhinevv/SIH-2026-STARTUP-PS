import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface NotificationsViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
}

export const NotificationsView: React.FC<NotificationsViewProps> = ({ onNavigateTab }) => {
  const alerts = [
    {
      id: 'al-1',
      title: 'KPI Baseline Missing: Pune Municipal Waste Sensor Calibration',
      department: 'Pune Municipal Corporation',
      time: '18 mins ago',
      type: 'warning',
      actionTab: 'challenges' as NavigationTab,
      actionText: 'Update Baseline'
    },
    {
      id: 'al-2',
      title: 'Pilot Milestone Overdue: BWSSB Acoustic Sensor Firmware',
      department: 'Bengaluru Water Supply',
      time: '2 hours ago',
      type: 'critical',
      actionTab: 'pilots' as NavigationTab,
      actionText: 'Inspect Milestone'
    },
    {
      id: 'al-3',
      title: 'Scale Sanction Ready: RouteAI 90-Day Sandbox Milestone Exceeded',
      department: 'Joint Secretary Secretariat',
      time: 'Yesterday',
      type: 'success',
      actionTab: 'scale' as NavigationTab,
      actionText: 'Authorize Scale'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-amber-600" />
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Procurement Risk Alerts & Official Notifications
          </h2>
        </div>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          Automated rule checks against GFR 2017 timelines and pilot milestone SLAs.
        </p>
      </div>

      <div className="space-y-3">
        {alerts.map((al) => (
          <div key={al.id} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border font-mono ${
                  al.type === 'critical' ? 'bg-red-50 text-red-900 border-red-200' :
                  al.type === 'warning' ? 'bg-amber-50 text-amber-900 border-amber-200' :
                  'bg-emerald-50 text-emerald-900 border-emerald-200'
                }`}>
                  {al.type}
                </span>
                <span className="text-xs text-slate-400 font-mono font-medium">{al.time}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">{al.title}</h4>
              <p className="text-xs text-slate-500 font-medium">{al.department}</p>
            </div>

            <button
              onClick={() => onNavigateTab(al.actionTab)}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition self-start sm:self-auto shadow-2xs cursor-pointer"
            >
              <span>{al.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
