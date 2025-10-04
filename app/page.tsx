import { NavbarHome } from "@/components/home/Navbar";
import { QuizSection } from "@/components/home/QuizSection";
import { Footer } from "@/components/home/footer";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroOverlay } from "@/components/home/HeroOverlay";

export default function Home() {



  return (
    <div>
        <NavbarHome />
      <div className="container">
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
