import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WhyChooseUse from "./components/WhyChooseUs";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WhyChooseUse />
      <Services />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
