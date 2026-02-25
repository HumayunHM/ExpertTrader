import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SuccessStory from "@/components/SuccessStory";
import Strategy from "@/components/Strategy";
import LearningModule from "@/components/LearningModule";
import Packages from "@/components/Packages";
import Reviews from "@/components/Reviews";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <Hero />
            <Features />
            <SuccessStory />
            <Strategy />
            <LearningModule />
            <Packages />
            <Reviews />
            <Closing />
         </main>
         <Footer />
      </>
   );
}
