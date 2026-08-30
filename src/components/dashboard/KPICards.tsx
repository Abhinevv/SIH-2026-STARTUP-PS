import React from 'react';
import { 
  FileText, 
  Users, 
  PlayCircle, 
  Clock, 
  ArrowUpRight,
} from 'lucide-react';

interface KPICardsProps {
  onNavigateTab?: (tab: any) => void;
}

export const KPICards: React.FC<KPICardsProps> = ({ onNavigateTab }) => {
  const cards = [
    {
      id: 'challenges',
      title: 'Active Challenges',
      value: '12',
      change: '↑ 18%',
      changeType: 'positive',
      subtext: 'across 8 Municipal Bodies',
      icon: FileText,
      targetTab: 'challenges',
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'startups',
      title: 'Startups Matched',
      value: '48',
      change: '↑ 24%',
      changeType: 'positive',
      subtext: 'DPIIT AI Semantic Indexed',
      icon: Users,
      targetTab: 'matching',
      iconBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 'pilots',
      title: 'Active Pilots',
      value: '6',
      change: '↑ 12%',
      changeType: 'positive',
      subtext: 'in Live Sandbox Testbeds',
      icon: PlayCircle,
      targetTab: 'pilots',
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'evaluations',
      title: 'Pending Evaluations',
      value: '9',
      change: '3 urgent',
      changeType: 'warning',
      subtext: 'Expert Committee Review',
      icon: Clock,
      targetTab: 'evaluations',
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            onClick={() => onNavigateTab && onNavigateTab(card.targetTab)}
            className="group bg-white border border-slate-200 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 relative overflow-hidden shadow-xs"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                {card.title}
              </span>
              <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${card.iconBg}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Main KPI Stat */}
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-3xl font-black tracking-tight text-slate-900 font-mono">
                {card.value}
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                  card.changeType === 'positive'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200 animate-pulse'
                }`}
              >
                {card.change}
              </span>
            </div>

            {/* Subtext */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2.5 border-t border-slate-100">
              <span className="truncate font-medium">{card.subtext}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
