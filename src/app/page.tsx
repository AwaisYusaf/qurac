import Footer from "@/components/Footer";
import AboutUs from "@/components/home/AboutUs";
import FAQs from "@/components/home/FAQs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import HowToParticipate from "@/components/home/HowToParticipate";
import Team from "@/components/home/Team";
import TokenPreSale from "@/components/home/TokenPreSale";
import Tokenomics from "@/components/home/Tokenomics";
import WhyChooseQurac from "@/components/home/WhyChooseQurac";

export default function Home() {
  return (
    <main className="bg-[#1C0A27] w-full min-h-screen">
      <Hero />
      <TokenPreSale />
      <AboutUs />
      <HowToParticipate />
      <Tokenomics />
      <HowItWorks />
      <Team />
      <FAQs />
      <WhyChooseQurac />
      <Footer />
    </main>
  );
}
