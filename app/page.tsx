import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeadphoneScroll from "@/components/HeadphoneScroll";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zenith X — Pure Sound, Precision Engineering",
  description:
    "Experience the next generation of premium audio. Zenith X headphones deliver unparalleled sound clarity with titanium drivers, active noise cancellation, and 40-hour battery life.",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <HeadphoneScroll />
      <FeaturesSection />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
