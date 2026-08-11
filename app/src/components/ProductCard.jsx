import React from "react";
import { PackageCheck, MapPin, Boxes } from "lucide-react";

export default function ProductCard({ product, onView }) {
  const { name, category, origin, moq, packaging, availability, img } = product;
  const inStock = availability === "In Stock";

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-brand-cream-dark shadow-xl hover:shadow-2xl transition-shadow group flex flex-col h-full w-full">
      <div className="overflow-hidden relative">
        <img
          src={img}
          alt={name}
          className="w-full h-50 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
            inStock ? "bg-brand-primary-dark text-white" : "bg-white text-brand-800 border border-brand-primary-dark"
          }`}
        >
          {availability}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div>
          <h4 className="font-semibold text-brand-900">{name}</h4>
          <p className="text-xs text-brand-700/60">{category}</p>
        </div>

        <div className="text-xs text-brand-800/70 space-y-1.5 mt-1">
          {/* <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-500" />
            <span>{origin}</span>
          </div> */}
          <div className="flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-brand-500" />
            <span>MOQ: {moq}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PackageCheck className="w-3.5 h-3.5 text-brand-500" />
            <span>{packaging}</span>
          </div>
        </div>

        <button
          onClick={() => onView(product)}
          className="mt-auto w-full border border-brand-800 bg-brand-primary-dark hover:bg-brand-secondary-dark text-white text-sm font-semibold py-2 rounded-md transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}