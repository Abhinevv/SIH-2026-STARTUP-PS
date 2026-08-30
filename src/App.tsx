import React, { useState } from 'react';
import { NavigationTab, StartupMatch, UserRole } from './types/procurement';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { DemoStoryNavigator } from './components/layout/DemoStoryNavigator';

import { DashboardView } from './components/dashboard/DashboardView';
import { ChallengeBuilderView } from './components/challenges/ChallengeBuilderView';
import { StartupMatchingView } from './components/matching/StartupMatchingView';
import { ExpertEvaluationView } from './components/evaluation/ExpertEvaluationView';
import { PilotDashboardView } from './components/pilot/PilotDashboardView';
import { KPIImpactView } from './components/impact/KPIImpactView';
import { ValidationView } from './components/validation/ValidationView';
import { ScaleDecisionView } from './components/scale/ScaleDecisionView';
import { TemplateManagerView } from './components/templates/TemplateManagerView';
import { StartupPortalView } from './components/startup/StartupPortalView';
import { NotificationsView } from './components/notifications/NotificationsView';
import { SettingsView } from './components/settings/SettingsView';

import { AIInsightsModal } from './components/modals/AIInsightsModal';
import { ProcurementDossierModal } from './components/modals/ProcurementDossierModal';
import { AuditLogModal } from './components/modals/AuditLogModal';
import { ExplainabilityModal } from './components/matching/ExplainabilityModal';
import { mockStartups } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const [currentRole, setCurrentRole] = useState<UserRole>('officer');
  
  // Modals state
  const [isAIInsightsOpen, setIsAIInsightsOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isAuditLogOpen, setIsAuditLogOpen] = useState(false);
  const [isExplainabilityOpen, setIsExplainabilityOpen] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState<StartupMatch>(mockStartups[0]);

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    if (tab === 'startup-portal') {
      setCurrentRole('startup');
    } else {
      setCurrentRole('officer');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStartupForEval = (startupId: string) => {
    const found = mockStartups.find(s => s.id === startupId) || mockStartups[0];
    setSelectedStartup(found);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Enterprise Government Header */}
      <Header
        currentRole={currentRole}
        onChangeRole={(role) => {
          setCurrentRole(role);
          if (role === 'startup') {
            setActiveTab('startup-portal');
          } else {
            setActiveTab('dashboard');
          }
        }}
        onNavigateTab={handleNavigate}
        onOpenNotifications={() => handleNavigate('notifications')}
        onOpenAuditLog={() => setIsAuditLogOpen(true)}
        onOpenAIInsights={() => setIsAIInsightsOpen(true)}
      />

      {/* Interactive SIH Demo Walkthrough Navigator */}
      <DemoStoryNavigator
        currentTab={activeTab}
        onNavigateTab={handleNavigate}
        onOpenExplainability={() => setIsExplainabilityOpen(true)}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      {/* Main Layout Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={handleNavigate}
          currentRole={currentRole}
          onChangeRole={setCurrentRole}
        />

        {/* Dynamic Main Workspace Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 gov-grid-pattern">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && (
              <DashboardView
                onNavigateTab={handleNavigate}
                onOpenCreateChallenge={() => handleNavigate('challenges')}
                onOpenAIInsights={() => setIsAIInsightsOpen(true)}
                onOpenAuditLog={() => setIsAuditLogOpen(true)}
              />
            )}

            {activeTab === 'challenges' && (
              <ChallengeBuilderView
                onNavigateTab={handleNavigate}
              />
            )}

            {activeTab === 'matching' && (
              <StartupMatchingView
                onNavigateTab={handleNavigate}
                onSelectStartupForEvaluation={handleSelectStartupForEval}
              />
            )}

            {activeTab === 'evaluations' && (
              <ExpertEvaluationView
                onNavigateTab={handleNavigate}
                onSanctionPilot={() => handleNavigate('pilots')}
              />
            )}

            {activeTab === 'pilots' && (
              <PilotDashboardView
                onNavigateTab={handleNavigate}
                onProceedToScale={() => handleNavigate('scale')}
                onOpenDossier={() => setIsDossierOpen(true)}
              />
            )}

            {activeTab === 'kpi-impact' && (
              <KPIImpactView
                onNavigateTab={handleNavigate}
              />
            )}

            {activeTab === 'validation' && (
              <ValidationView
                onNavigateTab={handleNavigate}
                onOpenDossier={() => setIsDossierOpen(true)}
              />
            )}

            {activeTab === 'scale' && (
              <ScaleDecisionView
                onNavigateTab={handleNavigate}
                onOpenDossier={() => setIsDossierOpen(true)}
                onOpenAuditLog={() => setIsAuditLogOpen(true)}
              />
            )}

            {activeTab === 'templates' && (
              <TemplateManagerView
                onNavigateTab={handleNavigate}
                onOpenDossier={() => setIsDossierOpen(true)}
              />
            )}

            {activeTab === 'startup-portal' && (
              <StartupPortalView
                onNavigateTab={handleNavigate}
                onOpenExplainability={() => setIsExplainabilityOpen(true)}
              />
            )}

            {activeTab === 'notifications' && (
              <NotificationsView
                onNavigateTab={handleNavigate}
              />
            )}

            {activeTab === 'settings' && (
              <SettingsView />
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      <AIInsightsModal
        isOpen={isAIInsightsOpen}
        onClose={() => setIsAIInsightsOpen(false)}
        onNavigateTab={handleNavigate}
      />

      <ProcurementDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      <AuditLogModal
        isOpen={isAuditLogOpen}
        onClose={() => setIsAuditLogOpen(false)}
      />

      <ExplainabilityModal
        startup={selectedStartup}
        isOpen={isExplainabilityOpen}
        onClose={() => setIsExplainabilityOpen(false)}
        onSendToEvaluation={(id) => {
          handleSelectStartupForEval(id);
          handleNavigate('evaluations');
        }}
      />
    </div>
  );
}

export default App;
