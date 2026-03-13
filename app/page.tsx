import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollTicker from "@/components/ScrollTicker";
import Problem from "@/components/Problem";
import CourseDescription from "@/components/CourseDescription";
import WhoIsItFor from "@/components/WhoIsItFor";
import Benefits from "@/components/Benefits";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Header />
      <Hero />
      <ScrollTicker />
      <Problem />
      <CourseDescription />
      <ScrollTicker inverted />
      <WhoIsItFor />
      <Benefits />
      <Teachers />
      <Testimonials />
      <Partners />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
