import { NavbarHome } from "@/components/home/Navbar";
import { QuizSection } from "@/components/home/QuizSection";
import { Footer } from "@/components/home/footer";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroOverlay } from "@/components/home/HeroOverlay";
import { HeroText } from "@/components/home/Herotext";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="container h-screen">
        <div className="absolute z-20 w-full h-[60%]">
          <HeroText/>
        </div>
        <HeroOverlay/>
        <HeroBackground/>
      </div>
      <section>
        <div id="quiz">
          <QuizSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
