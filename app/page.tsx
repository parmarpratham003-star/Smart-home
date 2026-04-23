import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import Hero from "@/Component/Home/Hero";
import PopularSolutions from "@/Component/Home/PopularSolutions";
import WhyChooseUs from "@/Component/Home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PopularSolutions />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
