import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { CategorySection } from "../components/home/CategorySection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { Newsletter } from "../components/home/Newsletter";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}
