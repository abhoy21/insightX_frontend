"use client";
import FeaturesSection from "./FeatureShowcaseSection";
import Footer from "./Footer";
import Header from "./HeaderLandingPage";
import HeroSection from "./HeroSection";

export default function LandingPageComponent(): JSX.Element {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <Header />
      <main className='flex-1'>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
