import AboutHero from "@/Component/About/AboutHero";
import AboutWhyChoose from "@/Component/About/AboutWhychoose";
import Howitworks from "@/Component/Solutions/Howitworks";
import CTASection from "@/Component/Home/CTASection";
import StatsCounter from "@/Component/Home/Statscounter";
import AboutIntroSection from "@/Component/About/AboutIntroSection";
import OurStorySection from "@/Component/About/OurStorySection";
import WhatWeOffer from "@/Component/About/WhatWeOffer";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutIntroSection />
     
      <AboutWhyChoose />
      <StatsCounter />
      <Howitworks />
      <CTASection />
      
    </>
  );
}