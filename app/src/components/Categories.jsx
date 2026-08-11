import React from "react";
import { CATEGORIES } from "../data";

export default function Categories() {
  return (
    <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-3xl font-display font-semibold text-brand-900 text-center mb-10">
        Browse by Category
      </h2>
      <div className="grid grid-cols-3  sm:grid-cols-3 gap-8 justify-items-center">
        {CATEGORIES.map((c) => (
          <div key={c.name} className="flex justify-items-center flex-col items-center gap-3 text-center">
            <div className="w-30 h-30 sm:w-30 sm:h-30 rounded-full overflow-hidden ring-4 shadow-lg">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-medium text-brand-800">{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
