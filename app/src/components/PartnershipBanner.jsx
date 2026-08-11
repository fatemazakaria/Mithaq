import React from "react";
import { Handshake, ClipboardList, ArrowUpRight } from "lucide-react";
import herbsImg from "../assets/herbs.jpg";

export default function PartnershipBanner() {
  return (
    <section id="suppliers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
      <div className="bg-brand-primary-dark rounded-xl overflow-hidden grid md:grid-cols-2">
        <div className="p-8 sm:p-10 text-white flex flex-col justify-center gap-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold">
              Grow With AL-MITHAQ
            </h3>
            <p className="text-brand-100/80 mt-2 text-sm sm:text-base">
              Whether you grow, distribute, or retail — we build long-term
              trade relationships, not one-off orders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-brand-700/60 rounded-lg p-4">
              <Handshake className="w-5 h-5 mb-2 text-brand-200" strokeWidth={1.75} />
              <h5 className="font-semibold text-sm">Become a Supplier</h5>
              <p className="text-xs text-brand-100/70 mt-1">
                Join our verified network of growers.
              </p>
            </div>
            <div className="bg-brand-700/60 rounded-lg p-4">
              <ClipboardList className="w-5 h-5 mb-2 text-brand-200" strokeWidth={1.75} />
              <h5 className="font-semibold text-sm">Request a Quote</h5>
              <p className="text-xs text-brand-100/70 mt-1">
                Get volume pricing for your order.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="self-start inline-flex items-center gap-2 bg-brand-secondary-dark text-brand-900 font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-brand-secondary-light transition-colors"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <img
          src={herbsImg}
          alt="Nursery packaging for wholesale shipment"
          className="w-full h-56 md:h-100 object-cover"
        />
      </div>
    </section>
  );
}
