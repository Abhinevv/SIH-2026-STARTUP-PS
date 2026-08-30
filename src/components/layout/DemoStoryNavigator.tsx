import React from 'react';
import { 
  ChevronRight, 
  LayoutGrid, 
  Target, 
  Compass, 
  Award, 
  FlaskConical, 
  Scale, 
} from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface DemoStoryNavigatorProps {
  currentTab: NavigationTab;
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenExplainability?: () => void;
  onOpenDossier?: () => void;
}

export const DemoStoryNavigator: React.FC<DemoStoryNavigatorProps> = ({
  currentTab,
  onNavigateTab,
}) => {
  const storySteps = [
    {
      stepNumber: 1,
      tab: 'dashboard' as NavigationTab,
      label: '1. Dashboard',
      icon: LayoutGrid
    },
    {
      stepNumber: 2,
      tab: 'challenges' as NavigationTab,
      label: '2. AI Challenge Builder',
      icon: Target
    },
    {
      stepNumber: 3,
      tab: 'matching' as NavigationTab,
      label: '3. AI Matching & Explainability',
      icon: Compass
    },
    {
      stepNumber: 4,
      tab: 'evaluations' as NavigationTab,
      label: '4. Expert Evaluation',
      icon: Award
    },
    {
      stepNumber: 5,
      tab: 'pilots' as NavigationTab,
      label: '5. Live Pilot & KPIs',
      icon: FlaskConical
    },
    {
      stepNumber: 6,
      tab: 'scale' as NavigationTab,
      label: '6. Scale Decision & GeM',
      icon: Scale
    }
  ];

  return (
    <nav aria-label="Demo Flow" className="bg-white border-b border-slate-200 px-6 py-2.5 shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left Story Tag */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-[12px] font-black uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 shadow-2xs">
            SIH Walkthrough
          </span>
          <span className="text-[13px] text-slate-600 font-medium hidden sm:inline">
            Case: <strong className="text-slate-900 font-bold">Pune Municipal Waste Optimization</strong>
          </span>
        </div>

        {/* Stepper Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {storySteps.map((step, idx) => {
            const isActive = currentTab === step.tab;
            const Icon = step.icon;

            return (
              <React.Fragment key={step.stepNumber}>
                <button
                  onClick={() => onNavigateTab(step.tab)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[13px] font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs scale-102'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span>{step.label}</span>
                </button>

                {idx < storySteps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
