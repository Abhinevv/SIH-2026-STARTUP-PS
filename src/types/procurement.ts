export type NavigationTab = 
  | 'dashboard' 
  | 'challenges' 
  | 'matching' 
  | 'evaluations' 
  | 'pilots' 
  | 'kpi-impact' 
  | 'validation' 
  | 'scale'
  | 'templates'
  | 'startup-portal'
  | 'notifications' 
  | 'settings';

export type UserRole = 'officer' | 'startup';

export type PipelineStageKey = 
  | 'problem' 
  | 'challenge' 
  | 'matching' 
  | 'evaluation' 
  | 'pilot' 
  | 'validation' 
  | 'scale';

export interface PipelineStageInfo {
  key: PipelineStageKey;
  label: string;
  count: number;
  description: string;
  trend: string;
  iconName: string;
}

export interface KPIBaseline {
  id: string;
  metric: string;
  baseline: string;
  target: string;
  direction: 'reduction' | 'increase';
  unit: string;
  measurementMethod: string;
}

export interface Challenge {
  id: string;
  code: string; // e.g. MAHA-2026-014
  title: string;
  department: string;
  ministry: string;
  budgetInLakhs: number;
  pilotDurationDays: number;
  stage: 'problem' | 'formulated' | 'matching' | 'evaluation' | 'pilot' | 'validated' | 'scaled';
  statusText: string;
  rawProblemText: string;
  problemStatement: string;
  rootCauseAnalysis: string[];
  desiredOutcomes: string[];
  kpiBaselines: KPIBaseline[];
  matchedStartupsCount: number;
  shortlistedCount: number;
  attentionFlag?: {
    type: 'warning' | 'critical' | 'info';
    message: string;
  };
  gfrCompliance: {
    rule194Cleared: boolean;
    cpcApprovalStatus: string;
    procurementMethod: string;
  };
  createdAt: string;
}

export interface StartupScores {
  technologyMatch: number;      // 0-100
  problemDomainMatch: number;   // 0-100
  budgetFit: number;            // 0-100
  pilotReadiness: number;       // 0-100
  relevantExperience: number;   // 0-100
  pastPerformance: number;      // 0-100
}

export interface StartupMatch {
  id: string;
  startupName: string;
  tagline: string;
  dpiitRecognitionNo: string;
  city: string;
  state: string;
  overallMatchScore: number;    // 0-100
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  scores: StartupScores;
  keyTechStack: string[];
  positiveEvidence: string[];
  riskFlags: string[];
  whyRecommendedSummary: string;
  conceptAlignment: {
    challengeConcept: string;
    startupCapability: string;
  }[];
  municipalDeploymentsCount: number;
  isShortlisted: boolean;
}

export interface EvaluationCriterion {
  name: string;
  weight: number;
  score: number; // 0-100
  benchmark: number;
  comments: string;
}

export interface PanelMemberSignOff {
  name: string;
  designation: string;
  role: string;
  scoreGiven: number;
  signedAt: string;
}

export interface ExpertEvaluationData {
  challengeId: string;
  startupId: string;
  startupName: string;
  overallScore: number;
  recommendationStatus: 'RECOMMENDED_FOR_PILOT' | 'CONDITIONAL_APPROVAL' | 'REJECTED';
  criteria: EvaluationCriterion[];
  panelMembers: PanelMemberSignOff[];
  consensusRemarks: string;
  sanctionRecommendedAmount: number; // In Lakhs
}

export interface PilotKPIVariance {
  id: string;
  metric: string;
  baselineVal: number;
  currentVal: number;
  targetVal: number;
  unit: string;
  direction: 'up' | 'down';
  changePercent: number;
  targetPercent: number;
  status: 'exceeded' | 'on-track' | 'lagging';
  evidenceDocumentName: string;
  verifiedByThirdParty: boolean;
}

export interface PilotTimelineStep {
  id: number;
  title: string;
  stageName: string;
  status: 'completed' | 'active' | 'pending';
  completedDate?: string;
  expectedDate?: string;
  officerNote?: string;
}

export interface PilotTelemetryLog {
  timestamp: string;
  sensorNode: string;
  metric: string;
  value: string;
  status: 'optimal' | 'warning' | 'normal';
}

export interface PilotProject {
  id: string; // e.g. PLT-2026-088
  challengeCode: string;
  challengeTitle: string;
  department: string;
  startupName: string;
  pilotStatus: 'Active' | 'Under Review' | 'Completed' | 'Suspended';
  dayElapsed: number;
  dayTotal: number;
  sanctionedBudgetLakhs: number;
  utilizedBudgetLakhs: number;
  kpis: PilotKPIVariance[];
  timeline: PilotTimelineStep[];
  telemetryLogs: PilotTelemetryLog[];
}

export interface ScaleReadinessData {
  pilotId: string;
  challengeTitle: string;
  startupName: string;
  scaleReadinessScore: number; // e.g. 87
  readinessLabel: 'READY TO SCALE' | 'NEEDS_FURTHER_EVALUATION' | 'PILOT_FAILED';
  dimensionScores: {
    technicalFeasibility: number;
    kpiAchievement: number;
    costEffectiveness: number;
    securityDataGovernance: number;
    scalability: number;
    userSatisfaction: number;
  };
  aiAssessmentChecklist: {
    id: string;
    title: string;
    passed: boolean;
    description: string;
  }[];
  officerApproval?: {
    isApproved: boolean;
    officerName: string;
    designation: string;
    approvedAt: string;
    sanctionOrderNumber: string;
    procurementRoute: string;
    estimatedPanStateBudgetLakhs: number;
    digitalSignatureSha: string;
    officialRemarks: string;
  };
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  officer: string;
  role: string;
  action: string;
  entity: string;
  referenceId: string;
  hash: string;
}

export interface ProcurementTemplate {
  id: string;
  category: 'problem_statement' | 'evaluation_criteria' | 'contract_sla' | 'scale_memorandum';
  title: string;
  gfrRule: string;
  description: string;
  complianceLevel: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string;
  }[];
}
