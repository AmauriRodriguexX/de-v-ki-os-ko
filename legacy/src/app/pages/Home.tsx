import React from "react";
import { HeroSection } from "../components/organisms/HeroSection";
import { PromoSection } from "../components/organisms/PromoSection";
import { CrossingPromosSection } from "../components/organisms/CrossingPromosSection";
import { FeaturedProducts } from "../components/organisms/FeaturedProducts";
import { GeolocSection } from "../components/organisms/GeolocSection";
import { SocialFeedStrip } from "../components/molecules/SocialFeedStrip";
import { WhatsAppNewsletterWidget } from "../components/molecules/WhatsAppNewsletterWidget";
import { YayaSection } from "../components/organisms/YayaSection";
import { YayaDownloadBanner } from "../components/molecules/YayaDownloadBanner";
import { promos } from "../data/promos";
import { crossingPromos } from "../data/crossingPromos";

export function Home() {
  const totalYayaPoints =
    promos.reduce((sum, p) => sum + (p.yayaPoints || 0), 0) +
    crossingPromos.reduce((sum, c) => sum + (c.yayaPoints || 0), 0);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <PromoSection limit={6} />
      <CrossingPromosSection />
      {/* YAYA incentive banner between combos and products */}
      <div className="py-6 md:py-10">
        <YayaDownloadBanner totalPoints={totalYayaPoints} />
      </div>
      <FeaturedProducts />
      <GeolocSection />
      <SocialFeedStrip />
      {/* WhatsApp Newsletter Widget */}
      <section className="w-full pt-10 pb-4 md:pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <WhatsAppNewsletterWidget />
        </div>
      </section>
      <YayaSection />
    </div>
  );
}