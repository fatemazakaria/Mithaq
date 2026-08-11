import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "../data";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

// ============================================================
// CONTROL PANEL — change these two things only, nothing else.
// ============================================================
// How many cards are visible on screen at once, per breakpoint:
//   mobile (default) → 1 card
//   sm (≥640px)       → 2 cards
//   lg (≥1024px)      → 4 cards
// The width below is calculated automatically from this number,
// so cards always stay equal size and always fit exactly.
const GAP_PX = 16; // must match the Tailwind "gap-4" class used below (4 * 4px = 16px)

export default function ProductShowcase() {
  const scrollerRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Scrolls by exactly one card width (+ the gap) — so it always
  // moves "card by card", never a partial card.
  function scroll(direction) {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + GAP_PX : 300;
    el.scrollBy({ left: direction === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  }

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-brand-900">
            Featured Catalog
          </h2>
          <p className="text-brand-800/60 text-sm mt-2 max-w-md">
            Sold to registered trade accounts only. Pricing is quoted per order
            volume — request a catalog to see full terms.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            onClick={() => scroll("prev")}
            aria-label="Previous products"
            className="w-10 h-10 rounded-full border border-brand-200 text-brand-800 flex items-center justify-center hover:bg-brand-800 hover:text-white hover:border-brand-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("next")}
            aria-label="Next products"
            className="w-10 h-10 rounded-full border border-brand-200 text-brand-800 flex items-center justify-center hover:bg-brand-800 hover:text-white hover:border-brand-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="shrink-0 snap-start w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <ProductCard product={p} onView={setSelectedProduct} />
          </div>
        ))}
      </div>

      {/* Mobile arrows, centered below the strip since side-by-side space is tight */}
      <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
        <button
          onClick={() => scroll("prev")}
          aria-label="Previous products"
          className="w-9 h-9 rounded-full border border-brand-200 text-brand-800 flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("next")}
          aria-label="Next products"
          className="w-9 h-9 rounded-full border border-brand-200 text-brand-800 flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}