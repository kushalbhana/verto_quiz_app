import { HeroBackground } from "@/components/home/HeroBackground";
import { ListTest } from "@/components/home/ListTest";
import { NavbarHome } from "@/components/home/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <NavbarHome/>
      </div>
      
      <div>
        <ListTest/>
      </div>
    </div>
  )
}
