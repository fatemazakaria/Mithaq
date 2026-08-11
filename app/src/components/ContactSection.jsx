import React from "react";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "201003000957"; // international format, no + no spaces
const EMAIL = "Info@almithaqherbs.com";
const LOCATION = "Fayoum / Abshway, Egypt — exporting worldwide";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello AL-MITHAQ, I'm interested in your products and would like more information."
);

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-cream-dark py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-secondary-dark mb-3">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-brand-900">
          Let's Talk Trade
        </h2>
        <p className="text-brand-800/70 text-sm sm:text-base mt-3 max-w-md mx-auto">
          Whether you're placing a bulk order, sourcing a new product line, or
          applying as a supplier — reach out directly, our trade team replies
          within one business day.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white  rounded-xl p-6 shadow-xl flex flex-col items-center gap-3 hover:border-brand-primary-dark hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-primary-dark transition-colors">
              <MessageCircle className="w-5 h-5 text-brand-primary-dark group-hover:text-white transition-colors" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-900">WhatsApp</h3>
              <p className="text-xs text-brand-800/60 mt-1">+{WHATSAPP_NUMBER}</p>
            </div>
            <span className="text-xs font-medium text-brand-secondary-dark flex items-center gap-1">
              Start a chat <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group bg-white  rounded-xl p-6 shadow-xl flex flex-col items-center gap-3 hover:border-brand-primary-dark hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-primary-dark transition-colors">
              <Mail className="w-5 h-5 text-brand-primary-dark group-hover:text-white transition-colors" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-semibold text-brand-900">Email</h3>
              <p className="text-xs text-brand-800/60 mt-1 break-all">{EMAIL}</p>
            </div>
            <span className="text-xs font-medium text-brand-secondary-dark flex items-center gap-1">
              Send an email <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-lg text-brand-800/50">
          <MapPin className="w-4 h-4" />
          {LOCATION}
        </div>
      </div>
    </section>
  );
}