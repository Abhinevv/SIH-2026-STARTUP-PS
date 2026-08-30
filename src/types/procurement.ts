export type NavigationTab = 
  | 'dashboard'
  | 'challenges'
  | 'matching'
  | 'evaluations'
  | 'pilots'
  | 'kpi-impact'
  | 'validation'
  | 'scale'
  | 'notifications'
  | 'settings';

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
  direction: 'reduction' | 'increase' | 'optimization';
  unit: string;
  measurementMethod: string;
}

export interface Challenge {
  id: string;
  code: string;
  title: string;
  department: string;
  ministry: string;
  budgetInLakhs: number;
  pilotDurationDays: number;
  stage: PipelineStageKey;
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

export interface StartupMatch {
  id: string;
  startupName: string;
  tagline: string;
  dpiitRecognitionNo: string;
  city: string;
  state: string;
  overallMatchScore: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  scores: {
    technologyMatch: number;
    problemDomainMatch: number;
    budgetFit: number;
    pilotReadiness: number;
    relevantExperience: number;
    pastPerformance: number;
  };
  keyTechStack: string[];
  positiveEvidence: string[];
  riskFlags: string[];
  whyRecommendedSummary: string;
  conceptAlignment: {
    challengeConcept: string;
    startupCapability: string;
  }[];
  municipalDeploymentsCount: number;
  isShortlisted?: boolean;
}

export interface ExpertScoreItem {
  name: string;
  weight: number;
  score: number;
  benchmark: number;
  comments: string;
}

export interface ExpertEvaluationData {
  challengeId: string;
  startupId: string;
  startupName: string;
  overallScore: number;
  recommendationStatus: 'RECOMMENDED_FOR_PILOT' | 'NEEDS_REVISION' | 'REJECTED';
  criteria: ExpertScoreItem[];
  panelMembers: {
    name: string;
    designation: string;
    role: string;
    scoreGiven: number;
    signedAt: string;
  }[];
  consensusRemarks: string;
  sanctionRecommendedAmount: number;
}

export interface PilotKPIItem {
  id: string;
  metric: string;
  baselineVal: number;
  currentVal: number;
  targetVal: number;
  unit: string;
  direction: 'down' | 'up';
  changePercent: number;
  targetPercent: number;
  status: 'exceeded' | 'on-track' | 'lagging';
  evidenceDocumentName: string;
  verifiedByThirdParty: boolean;
}

export interface PilotTimelineMilestone {
  id: number;
  title: string;
  stageName: string;
  status: 'completed' | 'active' | 'pending';
  completedDate?: string;
  expectedDate?: string;
  officerNote?: string;
}

export interface PilotProject {
  id: string;
  challengeCode: string;
  challengeTitle: string;
  department: string;
  startupName: string;
  pilotStatus: 'Active' | 'Under Review' | 'Completed' | 'Milestone Overdue';
  dayElapsed: number;
  dayTotal: number;
  sanctionedBudgetLakhs: number;
  utilizedBudgetLakhs: number;
  kpis: PilotKPIItem[];
  timeline: PilotTimelineMilestone[];
  telemetryLogs: {
    timestamp: string;
    sensorNode: string;
    metric: string;
    value: string;
    status: 'normal' | 'optimal' | 'alert';
  }[];
}

export interface ScaleReadinessData {
  pilotId: string;
  challengeTitle: string;
  startupName: string;
  scaleReadinessScore: number;
  readinessLabel: 'READY TO SCALE' | 'CONDITIONAL SCALE' | 'PILOT EXTENSION REQUIRED';
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
