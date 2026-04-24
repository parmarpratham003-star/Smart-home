import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import CTASection from "@/Component/Home/CTASection";
import Hero from "@/Component/Home/Hero";
import PopularSolutions from "@/Component/Home/PopularSolutions";
import StatsCounter from "@/Component/Home/Statscounter";
import TestimonialsSection from "@/Component/Home/Testimonialssection";
import WhyChooseUs from "@/Component/Home/WhyChooseUs";




export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PopularSolutions />
      <WhyChooseUs />
      <StatsCounter />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
