import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Cta from "./sections/cta/Cta";
import Faq from "./sections/faq/Faq";
import Features from "./sections/features/Features";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import Properties from "./sections/properties/Properties";
import Team from "./sections/team/Team";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Properties />
      <About />
      <Cta />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
