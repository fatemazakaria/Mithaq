import React from "react";
import { ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Hero() {
  return (
    <section id="home" className="bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 mb-3">
            Wholesale Plant Trading
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-900 leading-tight">
            Sourcing Plants,
            <br /> Built on Trust
          </h1>
          <p className="mt-4 text-brand-800/70 text-base sm:text-lg max-w-md">
            AL-MITHAQ connects growers, distributors and retailers with a
            verified catalog of nursery stock — sold by the crate, not the
            unit.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 bg-brand-primary-dark  hover:bg-brand-secondary-dark text-white font-semibold px-7 py-3 rounded-md transition-colors"
            >
              Browse Catalog
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#suppliers"
              className="inline-flex items-center gap-2 text-brand-800 font-medium px-2 py-3"
            >
              Become a Supplier
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={logo}
            alt="Nursery stock ready for wholesale distribution"
            className="rounded-xl w-full h-64 sm:h-80 md:h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
