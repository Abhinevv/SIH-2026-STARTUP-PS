import React from 'react';
import { 
  CheckCircle2, 
  IndianRupee, 
  Leaf, 
} from 'lucide-react';
import { NavigationTab } from '../../types/procurement';

interface KPIImpactViewProps {
  onNavigateTab: (tab: NavigationTab) => void;
}

export const KPIImpactView: React.FC<KPIImpactViewProps> = ({ onNavigateTab }) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700">
              Module 07 • Cross-Pilot KPI & Fiscal Impact
            </span>
            <span className="text-[10px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded border border-blue-200 font-mono">
              Aggregate Analytics
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Procurement Outcomes & RoI Intelligence
          </h2>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Cross-departmental telemetry comparing baseline citizen grievance reduction, fuel conservation, and municipal expenditure savings.
          </p>
        </div>
      </div>

      {/* 3 Macro Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-emerald-300 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Aggregated Fiscal Savings</span>
            <IndianRupee className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black font-mono text-emerald-700">₹ 4.28 Cr</div>
          <p className="text-xs text-slate-600 font-medium">
            Projected annual municipal savings across 6 active sandbox pilots
          </p>
        </div>

        <div className="bg-white border border-blue-300 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Carbon & Diesel Offset</span>
            <Leaf className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-black font-mono text-blue-700">142.6 Tons</div>
          <p className="text-xs text-slate-600 font-medium">
            CO₂ emissions avoided via RouteAI dynamic VRP path optimization
          </p>
        </div>

        <div className="bg-white border border-indigo-300 rounded-xl p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Citizen Grievance Resolution</span>
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-3xl font-black font-mono text-indigo-700">↓ 64.2%</div>
          <p className="text-xs text-slate-600 font-medium">
            Reduction in missed municipal waste pickups verified via 311 portal
          </p>
        </div>
      </div>

      {/* Pilot Comparison Table */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Active Pilots KPI Benchmark Matrix
          </h3>
          <span className="text-[10px] text-slate-500 font-mono font-medium">6 Pilots Active</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-mono font-bold">
                <th className="py-2.5 px-3">Pilot / Department</th>
                <th className="py-2.5 px-3">Startup</th>
                <th className="py-2.5 px-3">Primary KPI Target</th>
                <th className="py-2.5 px-3">Current Result</th>
                <th className="py-2.5 px-3">Variance</th>
                <th className="py-2.5 px-3">Scale Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-3">
                  <div className="font-bold text-slate-900">Pune Waste Optimization</div>
                  <div className="text-[10px] text-slate-500 font-mono font-medium">PLT-2026-088</div>
                </td>
                <td className="py-3 px-3 font-bold text-blue-700">RouteAI Tech</td>
                <td className="py-3 px-3">Fuel ↓15%, Pickups ↓50%</td>
                <td className="py-3 px-3 font-mono font-bold text-emerald-700">Fuel ↓18%, Pickups ↓64%</td>
                <td className="py-3 px-3">
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
                    +14% Exceeded
                  </span>
                </td>
                <td className="py-3 px-3">
                  <button
                    onClick={() => onNavigateTab('scale')}
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-bold underline cursor-pointer"
                  >
                    Ready for Scale
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-3">
                  <div className="font-bold text-slate-900">BWSSB Water Leakage</div>
                  <div className="text-[10px] text-slate-500 font-mono font-medium">PLT-2026-074</div>
                </td>
                <td className="py-3 px-3 font-bold text-blue-700">AcousticFlow Labs</td>
                <td className="py-3 px-3">NRW Loss 38% → 22%</td>
                <td className="py-3 px-3 font-mono font-bold text-amber-700">NRW Loss 26.4%</td>
                <td className="py-3 px-3">
                  <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded border border-amber-200">
                    76% On-Track
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className="text-xs text-slate-500">In Progress (Day 82)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
