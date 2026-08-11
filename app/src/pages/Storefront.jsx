import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductShowcase from "../components/ProductShowcase";
import PartnershipBanner from "../components/PartnershipBanner";
import TrustStrip from "../components/TrustStrip";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export default function Storefront() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <StatsBar />
      <Categories />
      <WhyChooseUs />
      <ProductShowcase />
      <PartnershipBanner />
      <TrustStrip />
      <ContactSection />
      <Footer />
    </div>
  );
}