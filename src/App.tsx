import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Team from "./sections/Team";
import Work from "./sections/Work";
import Services from "./sections/Services";
import Features from "./sections/Features";
import StayInTouch from "./sections/StayInTouch";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Work />
      <Services />
      <Features />
      <StayInTouch />
    </>
  );
};

export default App;
