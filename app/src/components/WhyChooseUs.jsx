import React from "react";
import { Shield, Recycle, Globe, Headphones } from "lucide-react";
import { FEATURES } from "../data";
import logo from "../assets/logo.jpeg";

const ICONS = { Shield, Recycle, Globe, Headphones };

function FeatureItem({ icon, title, text, alignEnd }) {
  const Icon = ICONS[icon];
  return (
    <div className={`flex gap-4 text-left ${alignEnd ? "md:flex-row-reverse md:text-right" : ""}`}>
      <div className="shrink-0 w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-brand-700" strokeWidth={1.75} />
      </div>
      <div>
        <h4 className="font-semibold text-brand-900">{title}</h4>
        <p className="text-sm text-brand-800/60 mt-1">{text}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-brand-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-brand-900 text-center mb-10">
          Why Choose Al Mithaq Herbs?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="space-y-8 order-2 md:order-1">
            {FEATURES.slice(0, 2).map((f) => (
              <FeatureItem key={f.title} {...f} />
            ))}
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={logo}
              alt="Nursery greenhouse"
              className="w-56 sm:w-64 h-56 sm:h-64 object-cover rounded-xl "
            />
          </div>

          <div className="space-y-8 order-3">
            {FEATURES.slice(2, 4).map((f) => (
              <FeatureItem key={f.title} {...f} alignEnd />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
