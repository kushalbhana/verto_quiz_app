import { QuizSection } from "@/components/home/QuizSection";
import { NavbarHome } from "@/components/home/Navbar";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <div>
      <div>
        <NavbarHome/>
      </div>
      
      <div>
        <QuizSection/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
