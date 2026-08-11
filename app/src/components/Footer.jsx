import React from "react";
import { Leaf } from "lucide-react";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import xTwitterIcon from "../assets/x-twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import { NAV_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg text-white">
            <Leaf className="w-5 h-5" strokeWidth={1.75} />
            AL-MITHAQ
          </div>
          <p className="text-sm text-white mt-3 max-w-xs">
            A wholesale plant trading platform connecting growers,
            distributors and retailers worldwide.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-white text-sm mb-3">Navigate</h5>
          <ul className="space-y-2 text-sm text-white">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white text-sm mb-3">Contact</h5>
          <p className="text-sm text-white">Info@almithaqherbs.com</p>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.facebook.com/share/1BL51ebdsC/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/almithaqherbs" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/almithaqherbs" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 text-white cursor-pointer transition-colors" />
            </a>

          </div>
        </div>
      </div>

      <div className="border-t border-brand-800 py-4">
        <p className="text-center text-xs text-white">
          © 2026 AL-MITHAQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}