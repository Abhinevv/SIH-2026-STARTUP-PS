# 🏛️ INNO-PROC • National Innovation Procurement Command Center

> **Smart India Hackathon (SIH 2026)** | Problem Statement: AI-Driven Innovation Procurement Platform for Public Sector & Smart Cities  
> Compliant with **General Financial Rules (GFR 2017) Rule 194** & **DPIIT Startup India Framework**

---

## 📌 Executive Summary

**INNO-PROC** is an enterprise-grade Government Innovation Command Center designed to transform how public sector departments procure innovation. Instead of rigid, multi-year static tender cycles, INNO-PROC facilitates an agile, auditable, and outcome-driven procurement sandbox that connects civic challenges with verified DPIIT startups through explainable AI (XAI) matching, verifiable telemetry tracking, and official human authorization.

```
                  THE 7-STAGE INNOVATION PROCUREMENT PIPELINE
                  
  [01. Civic Problems]  ──▶  [02. AI Challenge Builder]  ──▶  [03. AI Startup Matching]
          (18)                        (12)                             (48)
                                                                         │
                                                                         ▼
  [07. Scale & GeM]     ◀──  [06. 3rd-Party Validation]  ◀──  [05. Sandbox Pilots]  ◀── [04. Expert Evaluation]
         (3)                             (4)                           (6)                       (9)
```

---

## 🌟 Core Governance Principle

> [!IMPORTANT]
> **"AI Recommends → Authorized Public Officer Approves"**  
> INNO-PROC strictly implements an AI-assisted decision-support governance model. The AI analyzes requirements, matches startups, detects procurement risks, and calculates KPI variances. Final pilot sanctions and state-wide scale authorizations **require cryptographic digital approval** from authorized government officers (IAS / Joint Secretary).

---

## 🚀 Key Modules & Screen Highlights

| Module | Purpose | Key Capabilities |
| :--- | :--- | :--- |
| 🏠 **Executive Command Dashboard** | High-level procurement oversight | 4 KPI summary cards, 7-stage interactive pipeline funnel, AI risk radar, urgent challenge action items, and immutable CVC audit log feed. |
| 📝 **AI Challenge Structuring Studio** | Problem-to-Tender transformation | Translates natural language civic pain points into standardized tenders (`INNO-2026-014`), budget ceilings, and quantifiable KPI baselines. |
| 🤖 **AI Semantic Matching & XAI** | Startup discovery & explainability | Multi-dimensional weighted matching (Tech 95%, Domain 92%, Budget 87%, Readiness 91%), concept graphs, positive evidence verification, and risk flags. |
| 👨‍⚖️ **Expert Evaluation Committee** | Multi-criteria panel scoring | 6-Factor scoring matrix (Technical Feasibility, Innovation, Cost RoI, Scalability, Security, Pilot Readiness) with digital sign-offs. |
| 📊 **Active Sandbox Pilot Dashboard** | Real-time telemetry tracking | Tracks 90-day sandbox pilots with live baseline-to-target variance cards (Fuel ↓18%, Pickups ↓64%, Efficiency ↑26%) and milestone escrow. |
| 🏆 **Scale Sanction & GeM Onboarding** | Final procurement outcome | Validates *Ready to Scale (87/100)* threshold and executes official Government Sanction Orders with transition to Government e-Marketplace (GeM). |
| 📈 **KPI & Fiscal Impact Analytics** | Macro outcome intelligence | Tracks aggregate municipal savings (₹4.28 Cr), carbon offset (142 Tons), and citizen satisfaction across all active sandbox testbeds. |
| 🛡️ **Validation & Audit Vault** | Independent compliance lock | Cryptographic telemetry audit certificates independently verified by IOCL, STQC, and Pune Municipal Corporation. |

---

## 🏙️ Featured SIH Case Study Walkthrough

The platform includes a built-in, 1-click guided walkthrough following the **Pune Municipal Solid Waste Route Optimization** lifecycle:

1. **The Problem**: High diesel costs, traffic idle time, and missed bin collection across 14 municipal wards.
2. **AI Challenge Builder**: Formulates Challenge `INNO-2026-014` with ₹25.00L budget, 90-day sandbox pilot, and target fuel reduction (≥15%).
3. **AI Startup Matching**: **RouteAI Technologies** matches at **92%** (Low Risk) against SmartRoute Labs (86%) and UrbanTech AI (81%).
4. **Explainable AI (XAI)**: Deep dive into the 5-factor compatibility breakdown and validated municipal deployment evidence.
5. **Expert Evaluation**: Committee awards **90.0 / 100** consensus score and sanctions ₹8.20L pilot contract.
6. **Active Sandbox Telemetry (Day 47/90)**: Fuel consumption drops **18%** (exceeding 15% target) and missed pickups drop **64%** (exceeding 50% target).
7. **Scale Sanction**: Outcome graded **READY TO SCALE (87/100)**; Joint Secretary signs sanction order for ₹3.80 Cr state-wide GeM rollout.

---

## 📂 Repository Directory Structure

```text
SIH-2026-STARTUP-PS/
├── public/                       # Static public assets, favicons, and icons
├── src/
│   ├── assets/                   # Vector graphics and branding marks
│   ├── components/
│   │   ├── challenges/           # Module 02: AI Challenge Builder Studio
│   │   ├── dashboard/            # Module 01: Executive Dashboard, KPIs & Pipeline
│   │   ├── evaluation/           # Module 04: Expert Evaluation Committee Matrix
│   │   ├── impact/               # Module 07: Cross-pilot KPI & Fiscal RoI Analytics
│   │   ├── layout/               # Header, Sidebar & Demo Story Walkthrough Bar
│   │   ├── matching/             # Module 03: AI Startup Matching & XAI Modal
│   │   ├── modals/               # AI Radar, GeM Sanction Dossier & Audit Logs
│   │   ├── notifications/        # SLA alerts and milestone notifications
│   │   ├── pilot/                # Module 05: Sandbox Pilot & Live Telemetry
│   │   ├── scale/                # Module 06: Scale Decision & Official Approval
│   │   ├── settings/             # GFR 2017 rules & GeM API configuration
│   │   └── validation/           # Module 08: 3rd-Party Verification Certificates
│   ├── data/
│   │   └── mockData.ts           # Realistic procurement dataset for SIH presentation
│   ├── types/
│   │   └── procurement.ts        # Comprehensive TypeScript domain models
│   ├── App.tsx                   # Master application orchestrator
│   ├── index.css                 # Clean government styling & Plus Jakarta Sans typography
│   └── main.tsx                  # Application entrypoint
├── index.html                    # HTML shell with Google Fonts & metadata
├── package.json                  # Dependencies (React 18, Vite, Tailwind CSS, Lucide)
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build engine & Tailwind plugin configuration
```

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18 + TypeScript
- **Build Engine**: Vite v8
- **Styling & Theme**: Tailwind CSS v4 (Clean Enterprise Government Light Theme)
- **Typography**: Plus Jakarta Sans (Google Fonts) + JetBrains Mono (Telemetry & Codes)
- **Icons**: Lucide React Icons
- **Visual Effects**: Canvas Confetti (Official Sanction Celebration)

---

## ⚡ Getting Started & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/Abhinevv/SIH-2026-STARTUP-PS.git

# 2. Navigate to project directory
cd SIH-2026-STARTUP-PS

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

---

## 📜 Regulatory & Legal Framework

- **GFR 2017 Rule 194**: Procurement of Innovation & Sandbox Testing in Public Sector.
- **DPIIT Startup India**: Section 54/80-IAC recognition validation.
- **GeM Guidelines**: Direct catalog onboarding for validated pilot solutions.
- **Data Governance**: STQC & MeitY Data Localisation Compliance.

---

## 👥 Authors & Team
- **Project**: INNO-PROC — Government Innovation Command Center
- **Hackathon**: Smart India Hackathon (SIH 2026)
- **Repository**: [https://github.com/Abhinevv/SIH-2026-STARTUP-PS](https://github.com/Abhinevv/SIH-2026-STARTUP-PS)
