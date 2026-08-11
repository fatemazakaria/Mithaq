import React, { useEffect } from "react";
import { X, MapPin, Boxes, PackageCheck, Mail } from "lucide-react";

export default function ProductDetailModal({ product, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock page scroll while the dialog is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!product) return null;

  const { name, category, origin, moq, packaging, availability, img } = product;
  const inStock = availability === "In Stock";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-dialog-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div className="relative bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl grid md:grid-cols-2">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-brand-800 hover:bg-brand-100 transition-colors shadow"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative">
          <img src={img} alt={name} className="w-full h-64 md:h-full object-cover" />
          <span
            className={`absolute top-4 left-4 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
              inStock ? "bg-brand-800 text-white" : "bg-white text-brand-800 border border-brand-200"
            }`}
          >
            {availability}
          </span>
        </div>

        <div className="p-6 sm:p-8 flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-dark">
            {category}
          </p>
          <h2
            id="product-dialog-title"
            className="text-2xl sm:text-3xl font-display font-semibold text-brand-900 mt-1"
          >
            {name}
          </h2>

          <div className="mt-6 space-y-4 text-sm">
            {/* <DetailRow icon={MapPin} label="Origin" value={origin} /> */}
            <DetailRow icon={Boxes} label="Minimum Order Quantity" value={moq} />
            <DetailRow icon={PackageCheck} label="Packaging" value={packaging} />
          </div>

          <p className="text-sm text-brand-800/60 mt-6 leading-relaxed">
            Sold to registered trade accounts only. Volume pricing is quoted
            per order — reach out to our team for a tailored quote and lead
            time for your destination.
          </p>

          <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 bg-brand-secondary-dark hover:opacity-90 text-white font-semibold px-6 py-3 rounded-md text-sm transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Request a Quote
            </a>
            <button
              onClick={onClose}
              className="border border-brand-200 text-brand-800 font-medium px-6 py-3 rounded-md text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-md bg-brand-50 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-brand-700" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-xs text-brand-700/60">{label}</p>
        <p className="text-brand-900 font-medium">{value}</p>
      </div>
    </div>
  );
}