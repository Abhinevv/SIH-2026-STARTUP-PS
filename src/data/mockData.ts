import { 
  Challenge, 
  StartupMatch, 
  PilotProject, 
  ExpertEvaluationData, 
  ScaleReadinessData, 
  PipelineStageInfo,
  AuditLogEntry 
} from '../types/procurement';

export const mockPipelineStages: PipelineStageInfo[] = [
  { key: 'problem', label: 'Civic Problems', count: 18, description: 'Citizen & department pain points ingested', trend: '+4 this month', iconName: 'HelpCircle' },
  { key: 'challenge', label: 'Challenges', count: 12, description: 'AI-structured procurement problem statements', trend: '↑ 18% vs Q3', iconName: 'FileCode' },
  { key: 'matching', label: 'AI Matching', count: 48, description: 'DPIIT & Maha startups semantically mapped', trend: '↑ 24% matches', iconName: 'Cpu' },
  { key: 'evaluation', label: 'Evaluation', count: 9, description: 'Multi-criteria expert panel reviews', trend: '3 urgent reviews', iconName: 'Award' },
  { key: 'pilot', label: 'Pilots', count: 6, description: 'Active sandbox testbeds & telemetry', trend: '↑ 12% on-track', iconName: 'PlayCircle' },
  { key: 'validation', label: 'Validation', count: 4, description: 'Third-party KPI verification audits', trend: '100% verified', iconName: 'CheckCircle2' },
  { key: 'scale', label: 'Scale', count: 3, description: 'MahaGEMS / GeM procurement ready', trend: '₹14.2 Cr pipeline', iconName: 'TrendingUp' },
];

export const mockChallenges: Challenge[] = [
  {
    id: 'ch-014',
    code: 'MAHA-2026-014',
    title: 'AI-Based Dynamic Waste Collection Optimization',
    department: 'Solid Waste Management Division',
    ministry: 'Pune Municipal Corporation (Govt of Maharashtra)',
    budgetInLakhs: 25.0,
    pilotDurationDays: 90,
    stage: 'evaluation',
    statusText: 'Evaluation Phase (4 Shortlisted)',
    rawProblemText: 'Inefficient garbage collection routes leading to high diesel fuel consumption, delayed truck dispatches, and missed bin pickups across 14 high-density municipal wards in Pune.',
    problemStatement: 'Pune Municipal Corporation requires a dynamic, algorithmic routing & dispatch engine that integrates with existing vehicle GPS and bin sensor telemetry to optimize daily collection paths, reduce diesel expenditure by >=15%, and minimize citizen missed-pickup grievances by >=50%.',
    rootCauseAnalysis: [
      'Static legacy route sheets ignore real-time bin filling levels',
      'Morning peak-hour traffic bottlenecks causing 35% idle engine run-time',
      'Absence of automated dispatch rescheduling for breakdowns'
    ],
    desiredOutcomes: [
      '↓ Fuel consumption by at least 15%',
      '↓ Missed bin pickups by at least 50%',
      '↑ Route efficiency score to >85/100'
    ],
    kpiBaselines: [
      { id: 'kpi-1', metric: 'Fuel Consumption', baseline: '100 Litres/route/day', target: '85 Litres/route/day (↓15%)', direction: 'reduction', unit: 'L/day', measurementMethod: 'OBD-II CAN-bus telemetry verified by IOCL fleet cards' },
      { id: 'kpi-2', metric: 'Missed Pickups', baseline: '14 incidents/ward/week', target: '5 incidents/ward/week (↓64%)', direction: 'reduction', unit: 'incidents/ward', measurementMethod: 'Municipal 311 Citizen Portal grievance logs' },
      { id: 'kpi-3', metric: 'Route Efficiency Score', baseline: '72 / 100', target: '85 / 100 (↑18%)', direction: 'increase', unit: 'score/100', measurementMethod: 'GPS tracking vs planned polyline variance index' }
    ],
    matchedStartupsCount: 8,
    shortlistedCount: 4,
    attentionFlag: {
      type: 'warning',
      message: 'KPI baseline missing for Ward 11 sensor network calibration'
    },
    gfrCompliance: {
      rule194Cleared: true,
      cpcApprovalStatus: 'Approved by Standing Committee',
      procurementMethod: 'GFR Rule 194 (Procurement of Innovation & Sandbox Testing)'
    },
    createdAt: '2026-08-12'
  },
  {
    id: 'ch-009',
    code: 'MAHA-2026-009',
    title: 'Smart Acoustic Water Leakage Detection & Pressure Optimization',
    department: 'Water Supply & Sewerage Board',
    ministry: 'Maharashtra Urban Water Directorate (BWSSB/CIDCO)',
    budgetInLakhs: 32.0,
    pilotDurationDays: 120,
    stage: 'pilot',
    statusText: 'Active Pilot (Day 82/120)',
    rawProblemText: 'Non-revenue water (NRW) loss exceeding 38% due to undetected subterranean distribution pipe micro-cracks.',
    problemStatement: 'Deploy non-invasive IoT acoustic hydrophones and ML transient pressure wave analysis across 45km trunk pipeline network to detect subsurface leaks within 3 meters precision.',
    rootCauseAnalysis: [
      'Aging cast iron pipelines with subterranean fractures',
      'Intermittent supply pressure transients triggering pipe fatigue'
    ],
    desiredOutcomes: [
      '↓ Non-Revenue Water loss from 38% to 22%',
      '↑ Leak localization precision to within 3.5m radius',
      '↓ Repair response time from 72hrs to <12hrs'
    ],
    kpiBaselines: [
      { id: 'kpi-w1', metric: 'NRW Loss Volume', baseline: '38% total supply', target: '22% total supply', direction: 'reduction', unit: '%', measurementMethod: 'District Metered Area (DMA) inflow-outflow mass balance' }
    ],
    matchedStartupsCount: 6,
    shortlistedCount: 2,
    attentionFlag: {
      type: 'critical',
      message: 'Pilot milestone overdue: Sensor Node 4B firmware update pending calibration'
    },
    gfrCompliance: {
      rule194Cleared: true,
      cpcApprovalStatus: 'Approved by Board',
      procurementMethod: 'GFR Rule 194'
    },
    createdAt: '2026-07-04'
  },
  {
    id: 'ch-018',
    code: 'MAHA-2026-018',
    title: 'Edge-AI Adaptive Traffic Signal Coordination at Urban Chokepoints',
    department: 'Urban Mobility & Traffic Authority',
    ministry: 'Mumbai Metropolitan Region Development Authority (MMRDA)',
    budgetInLakhs: 45.0,
    pilotDurationDays: 90,
    stage: 'matching',
    statusText: 'AI Matching (14 Startups Screened)',
    rawProblemText: 'Fixed timer signals creating massive commuter delays and emergency vehicle blockades during peak rush hours.',
    problemStatement: 'Computer vision video analytics edge devices at 12 critical intersections to dynamically adjust green light splits based on queue length and emergency vehicle priority.',
    rootCauseAnalysis: ['Static pre-timed signal controllers without real-time vehicle density adaptation'],
    desiredOutcomes: [
      '↓ Average intersection delay by 28%',
      '↑ Emergency vehicle corridor passage time by 40%'
    ],
    kpiBaselines: [],
    matchedStartupsCount: 14,
    shortlistedCount: 3,
    attentionFlag: {
      type: 'info',
      message: '3 challenges need better KPI definitions before evaluation signoff'
    },
    gfrCompliance: {
      rule194Cleared: false,
      cpcApprovalStatus: 'Under Legal Review',
      procurementMethod: 'Special Innovation Sandbox'
    },
    createdAt: '2026-08-20'
  }
];

export const mockStartups: StartupMatch[] = [
  {
    id: 'st-01',
    startupName: 'RouteAI Technologies Pvt Ltd',
    tagline: 'Dynamic Fleet Routing & Autonomous Dispatch OS for Smart Cities',
    dpiitRecognitionNo: 'DIPP-89421-IN',
    city: 'Pune',
    state: 'Maharashtra',
    overallMatchScore: 92,
    riskLevel: 'LOW',
    scores: {
      technologyMatch: 95,
      problemDomainMatch: 94,
      budgetFit: 88,
      pilotReadiness: 91,
      relevantExperience: 89,
      pastPerformance: 84
    },
    keyTechStack: ['Graph Neural Networks', 'VRP Optimization Engines', 'Real-time OBD-II/GPS Ingestion', 'PostGIS', 'Edge IoT'],
    positiveEvidence: [
      '3 proven municipal deployments (Nagpur, Surat Smart City pilot projects)',
      'Proprietary GIS-based Vehicle Routing Problem (VRP) solving in <400ms',
      'Pre-integrated with Maharashtra ICCC / Bharat-VTS data specs',
      'Demonstrated 19.4% average fuel reduction in Nagpur pilot trial'
    ],
    riskFlags: [
      'Limited mega-city deployment (scale >500 trucks requires cloud auto-scaling validation)',
      'ISO 27001 annual audit renewal currently in progress (expected in 30 days)'
    ],
    whyRecommendedSummary: 'RouteAI Technologies demonstrates an exceptional 95% technology match with deep domain expertise in municipal solid waste collection. Their algorithm directly targets fuel reduction and dynamic missed-bin rerouting with low financial risk within the ₹25L pilot budget.',
    conceptAlignment: [
      { challengeConcept: 'Dynamic Route Optimization', startupCapability: 'Proprietary Capacitated VRP engine with real-time traffic weighting' },
      { challengeConcept: 'Municipal Fleet Ingestion', startupCapability: 'Ready connectors for AIS-140 GPS & OBD-II vehicle tracking' },
      { challengeConcept: 'Fuel Consumption Reduction', startupCapability: 'Continuous speed profile smoothing & engine idle reduction heuristics' },
      { challengeConcept: 'Missed Pickup Resolution', startupCapability: 'Dynamic on-the-fly deviation route insertion for drivers via mobile terminal' }
    ],
    municipalDeploymentsCount: 3,
    isShortlisted: true
  },
  {
    id: 'st-02',
    startupName: 'SmartRoute Labs Inc',
    tagline: 'Logistics AI & Commercial Delivery Path Optimizer',
    dpiitRecognitionNo: 'DIPP-72109-IN',
    city: 'Bengaluru',
    state: 'Karnataka',
    overallMatchScore: 86,
    riskLevel: 'MEDIUM',
    scores: {
      technologyMatch: 91,
      problemDomainMatch: 82,
      budgetFit: 92,
      pilotReadiness: 84,
      relevantExperience: 76,
      pastPerformance: 80
    },
    keyTechStack: ['Genetic Algorithms', 'OpenStreetMap Router', 'React Native Driver App'],
    positiveEvidence: [
      'High-throughput commercial e-commerce fleet routing experience (over 10,000 deliveries/day)',
      'Very competitive cost structure (₹18L proposal vs ₹25L cap)',
      'Clean modern mobile application interface for truck drivers'
    ],
    riskFlags: [
      'Limited municipal deployment evidence (primary experience is private B2B logistics)',
      'Does not natively support AIS-140 protocol without middleware adapter'
    ],
    whyRecommendedSummary: 'Strong technological capability in algorithmic fleet routing, but scored lower on direct municipal waste domain experience and compliance with government vehicle telemetry protocols.',
    conceptAlignment: [
      { challengeConcept: 'Route Optimization', startupCapability: 'Multi-stop Traveling Salesperson heuristic engine' },
      { challengeConcept: 'Municipal Integration', startupCapability: 'REST API adapters require custom data pipeline development' }
    ],
    municipalDeploymentsCount: 0,
    isShortlisted: true
  },
  {
    id: 'st-03',
    startupName: 'UrbanTech AI Solutions',
    tagline: 'Smart Waste Bin Sensors & Predictive Cleansing Analytics',
    dpiitRecognitionNo: 'DIPP-63114-IN',
    city: 'Hyderabad',
    state: 'Telangana',
    overallMatchScore: 81,
    riskLevel: 'MEDIUM',
    scores: {
      technologyMatch: 84,
      problemDomainMatch: 89,
      budgetFit: 78,
      pilotReadiness: 75,
      relevantExperience: 82,
      pastPerformance: 79
    },
    keyTechStack: ['Ultrasonic Bin Fill Sensors', 'LoRaWAN Mesh', 'Time-series Forecasting'],
    positiveEvidence: [
      'Excellent proprietary ultrasonic bin volume telemetry hardware',
      'Strong domain focus exclusively on municipal cleanliness'
    ],
    riskFlags: [
      'Hardware dependency: Requires installing proprietary bin sensors to achieve optimal results',
      'Budget exceeds ideal software-only allocation due to sensor procurement requirements'
    ],
    whyRecommendedSummary: 'High domain alignment in smart sanitation, but solution heavily leans on physical IoT sensor installation rather than purely dynamic routing algorithms.',
    conceptAlignment: [
      { challengeConcept: 'Bin Level Sensing', startupCapability: 'LoRaWAN bin fullness sensors deployed in 4 pilot wards' }
    ],
    municipalDeploymentsCount: 1,
    isShortlisted: false
  }
];

export const mockExpertEvaluation: ExpertEvaluationData = {
  challengeId: 'ch-014',
  startupId: 'st-01',
  startupName: 'RouteAI Technologies Pvt Ltd',
  overallScore: 90.0,
  recommendationStatus: 'RECOMMENDED_FOR_PILOT',
  criteria: [
    { name: 'Technical Feasibility & Architecture', weight: 25, score: 91, benchmark: 75, comments: 'Robust microservice architecture; demonstrates sub-500ms route calculation on 40-node graphs.' },
    { name: 'Innovation & Algorithmic Novelty', weight: 20, score: 94, benchmark: 70, comments: 'Novel integration of graph reinforcement learning with real-time Indian traffic patterns.' },
    { name: 'Cost Effectiveness & RoI', weight: 15, score: 84, benchmark: 70, comments: 'Budget request of ₹8.2L for 90-day pilot is well within the ₹25L sanctioned ceiling. Estimated 6-month payback.' },
    { name: 'Scalability & Interoperability', weight: 15, score: 88, benchmark: 75, comments: 'Native compliance with Maharashtra Urban Development & MoHUA ICCC standards.' },
    { name: 'Security & Data Governance', weight: 15, score: 90, benchmark: 80, comments: 'Data hosted entirely on MeitY-empanelled Indian Cloud (NIC/AWS Mumbai); encrypted in transit and at rest.' },
    { name: 'Pilot Readiness & Time to Deploy', weight: 10, score: 93, benchmark: 70, comments: 'Can begin fleet integration within 7 days of contract sanction with zero vehicle modifications.' }
  ],
  panelMembers: [
    { name: 'Dr. Arvind Swaminathan', designation: 'Professor of Transportation Systems, IIT Bombay', role: 'Technical Chair', scoreGiven: 92, signedAt: '2026-08-16' },
    { name: 'Smt. Vandana Deshmukh, IAS', designation: 'Additional Municipal Commissioner (SWM), PMC', role: 'Department Head', scoreGiven: 89, signedAt: '2026-08-16' },
    { name: 'Shri R. K. Mittal, IA&AS', designation: 'Director (Procurement & Finance), Ministry of Finance', role: 'Financial Assessor', scoreGiven: 89, signedAt: '2026-08-17' }
  ],
  consensusRemarks: 'The Expert Committee unanimously finds RouteAI Technologies technically sound, cost-effective, and fully ready for immediate 90-day sandbox pilot deployment across Wards 4, 7, and 9 of Pune Municipal Corporation under GFR Rule 194.',
  sanctionRecommendedAmount: 8.20
};

export const mockPilotProject: PilotProject = {
  id: 'PLT-2026-088',
  challengeCode: 'MAHA-2026-014',
  challengeTitle: 'AI-Based Dynamic Waste Collection Optimization',
  department: 'Pune Municipal Corporation - Solid Waste Management',
  startupName: 'RouteAI Technologies Pvt Ltd',
  pilotStatus: 'Active',
  dayElapsed: 47,
  dayTotal: 90,
  sanctionedBudgetLakhs: 8.20,
  utilizedBudgetLakhs: 5.12,
  kpis: [
    {
      id: 'kpi-fuel',
      metric: 'Fuel Consumption (Diesel Litres/Day)',
      baselineVal: 100,
      currentVal: 82,
      targetVal: 85,
      unit: 'L/day/truck',
      direction: 'down',
      changePercent: -18,
      targetPercent: -15,
      status: 'exceeded',
      evidenceDocumentName: 'IOCL_FleetFuel_Audit_W4_W7_Aug2026.pdf',
      verifiedByThirdParty: true
    },
    {
      id: 'kpi-missed',
      metric: 'Missed Bin Pickups (Weekly Grievances)',
      baselineVal: 14,
      currentVal: 5,
      targetVal: 7,
      unit: 'complaints/ward/wk',
      direction: 'down',
      changePercent: -64,
      targetPercent: -50,
      status: 'exceeded',
      evidenceDocumentName: 'PMC_311_Grievance_Log_Week33.xlsx',
      verifiedByThirdParty: true
    },
    {
      id: 'kpi-eff',
      metric: 'Route Efficiency Score',
      baselineVal: 72,
      currentVal: 91,
      targetVal: 85,
      unit: 'Index / 100',
      direction: 'up',
      changePercent: 26.4,
      targetPercent: 18.0,
      status: 'exceeded',
      evidenceDocumentName: 'VTS_GIS_Telemetry_Variance_Report.json',
      verifiedByThirdParty: true
    }
  ],
  timeline: [
    { id: 1, title: 'Challenge Approved', stageName: 'Admin Approval', status: 'completed', completedDate: '2026-07-10', officerNote: 'Standing Committee approved under GFR 194 sandbox' },
    { id: 2, title: 'Startup Selected', stageName: 'AI Matching & Scoring', status: 'completed', completedDate: '2026-07-18', officerNote: 'RouteAI selected with 92% match score' },
    { id: 3, title: 'Contract Signed', stageName: 'Legal & Escrow', status: 'completed', completedDate: '2026-07-25', officerNote: 'Pilot Agreement & Milestone Escrow of ₹8.2L sanctioned' },
    { id: 4, title: 'Prototype Deployed', stageName: 'Field Testbed', status: 'completed', completedDate: '2026-08-01', officerNote: '24 GPS-enabled compactors onboarded in Wards 4, 7, and 9' },
    { id: 5, title: 'Municipal Integration', stageName: 'Live Telemetry', status: 'active', officerNote: 'Real-time API sync with PMC Command & Control Center (ICCC)' },
    { id: 6, title: 'KPI Evaluation', stageName: 'Mid-term Audit', status: 'pending', expectedDate: 'Day 60' },
    { id: 7, title: 'Independent Validation', stageName: 'Third-Party Audit', status: 'pending', expectedDate: 'Day 75' },
    { id: 8, title: 'Scale Decision', stageName: 'Procurement Sanction', status: 'pending', expectedDate: 'Day 90' }
  ],
  telemetryLogs: [
    { timestamp: '10:24:18 IST', sensorNode: 'Truck PMC-MH-12-8821', metric: 'Dynamic Route Recalculation', value: '4.2 km avoided; saved ~2.8L diesel', status: 'optimal' },
    { timestamp: '10:18:02 IST', sensorNode: 'Bin Cluster #419 (Kothrud)', metric: 'Fill Level Reached 90%', value: 'Auto-dispatched compactor #14 (ETA 12 min)', status: 'optimal' },
    { timestamp: '10:05:44 IST', sensorNode: 'OBD Telemetry Node #08', metric: 'Engine Idle Time', value: 'Reduced from 42 min to 11 min on route', status: 'optimal' },
    { timestamp: '09:48:19 IST', sensorNode: 'PMC ICCC Gateway', metric: 'API Sync Health', value: '99.98% uptime; 1,440 pings/hr', status: 'normal' }
  ]
};

export const mockScaleReadiness: ScaleReadinessData = {
  pilotId: 'PLT-2026-088',
  challengeTitle: 'AI-Based Dynamic Waste Collection Optimization',
  startupName: 'RouteAI Technologies Pvt Ltd',
  scaleReadinessScore: 87,
  readinessLabel: 'READY TO SCALE',
  dimensionScores: {
    technicalFeasibility: 91,
    kpiAchievement: 88,
    costEffectiveness: 84,
    securityDataGovernance: 90,
    scalability: 87,
    userSatisfaction: 92
  },
  aiAssessmentChecklist: [
    { id: 'chk-1', title: 'Target KPIs Achieved & Exceeded', passed: true, description: 'Fuel reduced by 18% (target 15%), Missed pickups reduced by 64% (target 50%).' },
    { id: 'chk-2', title: 'Pilot Completed Successfully', passed: true, description: '47 days of live field testing with zero system crashes or service disruptions.' },
    { id: 'chk-3', title: 'Independent Evidence Verified', passed: true, description: 'IOCL fuel logs and PMC 311 citizen grievance logs independently audited and cryptographically sealed.' },
    { id: 'chk-4', title: 'Security & GFR 2017 Compliance', passed: true, description: 'MeitY data localisation verified; complies with GFR Rule 194 & Rule 149 for GeM / MahaGEMS transition.' },
    { id: 'chk-5', title: 'Human Officer Approval Required', passed: true, description: 'Procurement sanction order requires digital signature of Authorized Joint Secretary.' }
  ],
  officerApproval: {
    isApproved: false,
    officerName: 'Shri Rajesh Verma, IAS',
    designation: 'Joint Secretary (Public Procurement), Govt of Maharashtra',
    approvedAt: '',
    sanctionOrderNumber: 'MAHA-STARTUP-2026/PUNE-SWM-088',
    procurementRoute: 'Direct GeM & MahaGEMS Category Creation via GFR Rule 194 Fast-Track Scale',
    estimatedPanStateBudgetLakhs: 380.0,
    digitalSignatureSha: 'sha256:e8f9a0c1b72354e69d71c890fa21e64b85c391d842',
    officialRemarks: 'Validated outcome demonstrates recurring municipal savings of ~₹1.8 Cr annually across all 15 wards. Sanction granted for state-wide procurement onboarding.'
  }
};

export const mockAuditLogs: AuditLogEntry[] = [
  { id: 'aud-109', timestamp: '2026-08-30 09:15:22', officer: 'Shri Rajesh Verma, IAS', role: 'Joint Secretary', action: 'SCALE_READINESS_REVIEW', entity: 'Pilot PLT-2026-088', referenceId: 'MAHA-2026-014', hash: 'e8f9...4b85' },
  { id: 'aud-108', timestamp: '2026-08-29 17:40:11', officer: 'Third-Party Auditor (PwC India)', role: 'Independent Auditor', action: 'EVIDENCE_VERIFIED', entity: 'IOCL Fuel Logs', referenceId: 'PMC-W4-W7', hash: 'c2a1...78ef' },
  { id: 'aud-107', timestamp: '2026-08-28 11:30:00', officer: 'MahaStartup AI Engine', role: 'System Model 3.7', action: 'KPI_TELEMETRY_ANALYZE', entity: 'Telemetry Stream', referenceId: 'PLT-2026-088', hash: '89ba...5512' },
  { id: 'aud-106', timestamp: '2026-08-16 14:22:05', officer: 'Dr. Arvind Swaminathan', role: 'Tech Expert Chair', action: 'EXPERT_SCORE_SIGNED', entity: 'RouteAI Tech', referenceId: 'EVAL-014-01', hash: '4f5a...3319' },
  { id: 'aud-105', timestamp: '2026-08-12 10:00:00', officer: 'Smt. Vandana Deshmukh, IAS', role: 'Addl Municipal Comm.', action: 'CHALLENGE_CREATED', entity: 'MAHA-2026-014', referenceId: 'PMC-SWM', hash: '11e2...90aa' }
];

export const mockAIIntelligenceSummary = {
  challengesAnalyzedCount: 12,
  startupMatchesCount: 48,
  potentialRisksDetectedCount: 7,
  pilotsReadyForScaleCount: 4,
  kpiDefinitionsNeededCount: 3,
  insights: [
    { id: 'ins-1', type: 'risk', title: '7 Potential Procurement Risks Detected', description: '2 startups lack ISO 27001 data certs; 1 pilot milestone in urban water project is 12 days overdue.', severity: 'high' },
    { id: 'ins-2', type: 'opportunity', title: '4 Active Pilots Predicted Ready for Scale', description: 'Pune Waste Management and Surat Solar Grid have exceeded target KPIs with verified evidence.', severity: 'success' },
    { id: 'ins-3', type: 'action', title: '3 Challenges Need Quantifiable Baseline Refinement', description: 'MMRDA Traffic Challenge MAHA-2026-018 requires sensor node calibration baselines prior to final evaluation.', severity: 'warning' },
    { id: 'ins-4', type: 'match', title: 'High Semantic Density in Maharashtra Startups', description: 'Over 28 Maharashtra-registered DPIIT startups matched with >85% weighted compatibility for smart municipal tenders.', severity: 'info' }
  ]
};
