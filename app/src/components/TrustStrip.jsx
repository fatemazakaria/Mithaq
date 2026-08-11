import React from "react";
import { Truck, FileCheck, Headphones } from "lucide-react";
import { TRUST_STRIP } from "../data";

const ICONS = { Truck, FileCheck, Headphones };

export default function TrustStrip() {
  return (
    <section className="bg-brand-50 py-10 border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
        {TRUST_STRIP.map(({ icon, title, text }) => {
          const Icon = ICONS[icon];
          return (
            <div key={title} className="flex items-center gap-4 justify-center sm:justify-start">
              <Icon className="w-7 h-7 text-brand-700 shrink-0" strokeWidth={1.5} />
              <div>
                <h5 className="font-semibold text-brand-900 text-sm">{title}</h5>
                <p className="text-xs text-brand-800/60">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
