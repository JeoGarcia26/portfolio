import Footer from "./components/Footer";
import FrmContact from "./components/FrmContact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Topics from "./components/Topics";

export default function App() {

  return (
    <div className="text-[#868686] font-sans mw-full h-screen bg-black">
      <NavBar/>
      <Hero />
      <Topics />
      <FrmContact />
      <Footer />
    </div>
  );
}
