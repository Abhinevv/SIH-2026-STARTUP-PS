# 🏛️ MahaStartup: System Architecture & Technical Specification
> **Smart India Hackathon (SIH 2026)** | Problem Statement ID: `26136`  
> **System**: **MahaStartup • Innovation Procurement Command Center**

---

## 📐 1. Master System Architecture Diagram (Mermaid)

```mermaid
flowchart TB
    %% STYLING DEFINITIONS
    classDef clientLayer fill:#EBF5FF,stroke:#2563EB,stroke-width:2px,color:#1E3A8A;
    classDef gatewayLayer fill:#F3F4F6,stroke:#4B5563,stroke-width:2px,color:#111827;
    classDef coreServiceLayer fill:#EEF2FF,stroke:#4F46E5,stroke-width:2px,color:#312E81;
    classDef telemetryLayer fill:#ECFDF5,stroke:#059669,stroke-width:2px,color:#064E3B;
    classDef dataLayer fill:#FEF3C7,stroke:#D97706,stroke-width:2px,color:#78350F;
    classDef externalLayer fill:#FDF2F8,stroke:#DB2777,stroke-width:2px,color:#831843;

    %% 1. PRESENTATION LAYER
    subgraph Presentation_Layer["1. PRESENTATION & DUAL-PORTAL LAYER (React 18 + Tailwind v4)"]
        GovUI["🏛️ Government Officer Command Center\n(Executive Dashboard, AI Challenge Studio, Evaluation Panel, Scale Sanction)"]:::clientLayer
        StartupUI["🚀 Startup Innovator Workspace\n(1-Click DPIIT Bidding, Telemetry Uplink, Escrow Claims, GeM Catalog Preview)"]:::clientLayer
        AuditorUI["🛡️ 3rd-Party Auditor & Verification Portal\n(Evidence Check, STQC / IOCL Telemetry Verification)"]:::clientLayer
    end

    %% 2. GATEWAY & AUTH LAYER
    subgraph Gateway_Layer["2. SECURE API GATEWAY & RBAC LAYER"]
        APIGateway["🛡️ API Gateway & Rate Limiter (TLS 1.3 / OWASP Top 10)"]:::gatewayLayer
        RBAC["🔐 Role-Based Access Control (RBAC)\n(IAS Approver | Committee Reviewer | DPIIT Startup | Auditor)"]:::gatewayLayer
        AuthService["🔑 Identity & Digital Signature Service\n(Aadhaar eSign / NIC DSC / DPIIT Token Sync)"]:::gatewayLayer
    end

    %% 3. CORE SERVICE LAYER
    subgraph Core_Services["3. CORE APPLICATION & ORCHESTRATION ENGINES"]
        ChallengeEngine["📝 AI Challenge Formulation Studio\n(Raw civic text to quantifiable baseline KPIs under GFR 194)"]:::coreServiceLayer
        XAIMatching["🤖 Explainable AI (XAI) Discovery Engine\n(Semantic Graph Alignment + Multi-Factor Weighted Compatibility)"]:::coreServiceLayer
        EvaluationEngine["👨‍⚖️ Tripartite Committee Consensus Engine\n(6-Factor Scoring Matrix + Digital Sanctions)"]:::coreServiceLayer
        SandboxPilotManager["📊 Sandbox Pilot & Milestone Escrow Engine\n(90-Day Timeline, SLA enforcement, 3-Tranche Releases)"]:::coreServiceLayer
        ScaleEngine["🏆 Scale Sanction & GeM Transition Bridge\n('AI Recommends → Human Approves' + Sanction Orders)"]:::coreServiceLayer
        TemplateManager["📄 Standardized GFR Legal Template Engine\n(Problem Statements, Tripartite SLAs, IP clauses)"]:::coreServiceLayer
    end

    %% 4. TELEMETRY & VERIFICATION
    subgraph Telemetry_Pipeline["4. IOT TELEMETRY & EMPIRICAL VERIFICATION PIPELINE"]
        IoTIngest["📡 Telematics Ingestion Service\n(AIS-140 GPS, CAN-bus OBD-II, LoRaWAN sensors)"]:::telemetryLayer
        VarianceProcessor["⚡ Real-Time Variance Processor\n(Compares baseline vs live telemetry: Fuel ↓18%, Grievances ↓64%)"]:::telemetryLayer
        AuditConnector["📋 Independent Evidence Aggregator\n(IOCL Bulk Fuel Logs + Municipal 311 Citizen Grievances)"]:::telemetryLayer
    end

    %% 5. STORAGE & COMPLIANCE
    subgraph Data_Layer["5. SECURE STORAGE & COMPLIANCE LAYER (MeitY Empanelled Indian Cloud)"]
        PostgresDB[("🗄️ Relational Core DB (PostgreSQL / PostGIS)\n(Tenders, Startups, Contracts, Evaluator Scores)")]:::dataLayer
        VectorDB[("🧠 Semantic Graph & Vector Store\n(Problem-to-Capability embeddings & XAI Trees)")]:::dataLayer
        DocStore[("📁 Encrypted Evidence & Dossier Vault (S3)\n(Audit certificates, Sanction orders, Telemetry logs)")]:::dataLayer
        AuditLedger[("🔒 Immutable CVC/CAG Audit Trail\n(SHA-256 Cryptographic Hash Chain)")]:::dataLayer
    end

    %% 6. EXTERNAL INTEGRATIONS
    subgraph External_Integrations["6. NATIONAL & STATE PUBLIC INFRASTRUCTURE"]
        DPIIT["🇮🇳 DPIIT Startup India Registry\n(Entity & 80-IAC turnover exemption sync)"]:::externalLayer
        GeM["🛍️ Government e-Marketplace (GeM / MahaGEMS)\n(Direct innovation catalog onboarding API v4.2)"]:::externalLayer
        MeitYCloud["☁️ MeitY Empanelled Cloud & STQC\n(ISO 27001 data localisation & security seal)"]:::externalLayer
        MunicipalICCC["🏙️ Municipal Command Centers (ICCC / VTS)\n(Live fleet tracking & citizen 311 portal sync)"]:::externalLayer
    end

    %% CONNECTIONS
    Presentation_Layer --> Gateway_Layer
    Gateway_Layer --> Core_Services
    Core_Services --> Telemetry_Pipeline
    Core_Services --> Data_Layer
    Telemetry_Pipeline --> Data_Layer
    Core_Services <--> External_Integrations
    Telemetry_Pipeline <--> MunicipalICCC
```

---

## 🏛️ 2. Architectural Layer-by-Layer Deep Dive

### Layer 1: Presentation & Dual-Portal Layer
- **Tech Stack**: React 18, TypeScript, Tailwind CSS v4, Plus Jakarta Sans, Lucide React, Canvas Confetti.
- **Components**:
  - **Government Officer Portal**: High-level Executive Dashboard, 7-stage visual pipeline funnel, AI Challenge Builder, 6-factor evaluation scoring sheet, live pilot monitor, GeM Scale Decision, and CVC audit viewer.
  - **Startup Innovator Portal**: 1-click DPIIT bidding feed, active pilot telemetry dashboard, milestone escrow claim uploader, and XAI match profile.
  - **Auditor Portal**: Independent certificate and telemetry verification.

---

### Layer 2: Secure API Gateway & Identity Management
- **Role-Based Access Control (RBAC)**:
  - `GOVT_OFFICER_APPROVER` (IAS / Joint Secretary — full sanction authority)
  - `COMMITTEE_EVALUATOR` (IIT Professor / Department Head — scoring permissions)
  - `STARTUP_ADMIN` (DPIIT Entity — bid submission, escrow claims, telemetry uplink)
  - `INDEPENDENT_AUDITOR` (IOCL / STQC / PwC — evidence verification)
- **Security Standards**: TLS 1.3 end-to-end encryption, digital signature (DSC) validation, and JWT session handling.

---

### Layer 3: Core Application & Orchestration Services
1. **AI Challenge Formulation Service**: Ingests unstructured problem complaints and applies NLP to construct standardized outcome-based problem statements with quantifiable KPI baselines under GFR Rule 194.
2. **Explainable AI (XAI) Matching Engine**: Performs semantic graph alignment between municipal challenges and DPIIT startup capabilities, outputting multi-factor weighted match scores (0–100%) and concept trees.
3. **Tripartite Consensus Engine**: Gathers multi-member scoring across 6 dimensions and automatically computes weighted consensus benchmarks.
4. **Sandbox Pilot & Milestone Escrow Manager**: Enforces 90-day sandbox pilot SLAs and triggers 3-tranche milestone budget disbursements (30% $\rightarrow$ 40% $\rightarrow$ 30%).
5. **Scale Decision & GeM Transition Bridge**: Validates the *Ready to Scale* threshold ($\ge 85/100$) and compiles official printable Sanction Orders (`MAHA-STARTUP-2026/PUNE-SWM-088`).
6. **Standardized Template Manager**: Serves pre-vetted legal agreements, GFR 194 guidelines, and 100% startup IP protection clauses.

---

### Layer 4: Telemetry & Empirical Verification Pipeline
- **IoT Ingestion Stream**: Ingests vehicle GPS (AIS-140), OBD-II CAN-bus diagnostic logs (engine idle time, diesel burn rate), and bin sensor fill levels.
- **Variance Processor**: Automatically compares live incoming telemetry against original baselines:
  $$\text{Fuel Variance} = \frac{\text{Current (82 L/day)} - \text{Baseline (100 L/day)}}{\text{Baseline (100 L/day)}} = -18.2\% \quad (\text{Target: } \le -15\%)$$
- **Evidence Verification Connector**: Links third-party verification receipts (IOCL fleet cards, PMC 311 citizen grievance logs) to pilot milestone records.

---

### Layer 5: Secure Storage & Compliance Layer (MeitY Indian Cloud)
- **Relational DB (PostgreSQL + PostGIS)**: Stores structured tenders, bids, evaluation scores, contracts, and municipal GIS boundary polylines.
- **Semantic Vector & Graph Store**: Stores problem-to-capability embeddings and semantic graph relationships.
- **Encrypted Document Vault**: S3-compatible encrypted storage (AES-256) for audit certificates, sanction orders, and telemetry dumps.
- **Immutable CVC/CAG Audit Trail**: Cryptographic SHA-256 ledger chaining all officer decisions and milestone verifications.

---

### Layer 6: External Ecosystem Integrations
- **Startup India (DPIIT)**: Validates recognition numbers (`DIPP-89421-IN`) and verifies 80-IAC tax/turnover exemption status.
- **Government e-Marketplace (GeM / MahaGEMS)**: API v4.2 bridge for direct custom category onboarding without fresh tender floating.
- **MeitY STQC Directorate**: ISO 27001 data localisation and zero-vulnerability certification compliance.
- **Municipal Command Centers (ICCC / VTS)**: Ingests smart city telemetry and citizen 311 portal grievance feeds.

---

## 🔄 3. End-to-End Data Flow Sequence

```text
[Citizen Problem] 
       │
       ▼
1. AI Challenge Studio ──────────► Generates MAHA-2026-014 (Baseline KPIs: Fuel ↓15%, Grievances ↓50%)
       │
       ▼
2. XAI Semantic Matcher ────────► Matches RouteAI Technologies (92% Fit, Low Risk)
       │
       ▼
3. Expert Committee Matrix ──────► 3-Member Panel Awards 90.0/100 Score & Sanctions ₹8.20L Sandbox Pilot
       │
       ▼
4. Sandbox Pilot Field Deploy ───► 24 Trucks in Pune Wards 4, 7, 9 stream OBD-II / GPS Telemetry
       │
       ▼
5. Telemetry Variance Engine ────► Verifies Fuel ↓18.2%, Pickups ↓64.2% (IOCL & 311 Audited)
       │
       ▼
6. Milestone Escrow Release ─────► Treasury disburses Tranche 1 & 2 (₹5.12L) within 48 hours
       │
       ▼
7. Scale Sanction Authorization ─► Joint Secretary digitally signs Sanction Order for ₹3.80 Cr GeM Rollout
```

---

## 🛡️ 4. Security & Regulatory Compliance Matrix

| Security / Governance Aspect | Standard Enforced in MahaStartup |
| :--- | :--- |
| **Legal Procurement Basis** | GFR 2017 Rule 194 (Procurement of Innovation & Sandbox Testing) |
| **Eligibility Exemption** | Startup India / DPIIT Notification (Exemption from 3-yr turnover & experience) |
| **Data Localisation** | 100% Stored in MeitY-Empanelled India Data Centers (NIC / AWS Mumbai) |
| **Encryption Standards** | AES-256 for Data-at-Rest • TLS 1.3 for Data-in-Transit |
| **Audit Transparency** | Immutable SHA-256 Hash Chain compliant with CVC & CAG guidelines |
| **Intellectual Property** | 100% Startup Background IP & Source Code Ownership Protection |
