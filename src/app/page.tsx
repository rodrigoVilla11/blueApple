import Landing from "./views/Landing";
import NavBar from "./components/NavBar";
import Partners from "./views/Partners";
import AboutUs from "./views/AboutUs";
import Objective from "./views/Objective";
import Process from "./views/Process";
import Philosophy from "./views/Philosophy";
import FreeBook from "./views/FreeBook";
import Quotes from "./views/Quotes";

export default function Home() {
  return (
    <main className="font-montserrat">
      <NavBar />
      <Landing />
      <Partners />
      <AboutUs />
      <Objective />
      <Process />
      <Philosophy />
      <FreeBook />
      <Quotes />
    </main>
  );
}
