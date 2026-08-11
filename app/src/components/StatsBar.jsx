import React from "react";
import { Users, Sprout, Leaf, Globe2 } from "lucide-react";
import { STATS } from "../data";

const ICONS = { suppliers: Users, clients: Sprout, varieties: Leaf, countries: Globe2 };

export default function StatsBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map(({ key, value, label }) => {
          const Icon = ICONS[key];
          return (
            <div
              key={key}
              className="bg-white rounded-lg shadow-xl border border-brand-cream-dark px-4 py-5 text-center flex flex-col items-center gap-2"
            >
              <Icon className="w-5 h-5 text-brand-600" strokeWidth={1.75} />
              <div className="text-xl font-display font-semibold text-brand-900">{value}</div>
              <div className="text-xs text-brand-700/70">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
