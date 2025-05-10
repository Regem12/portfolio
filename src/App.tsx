import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactWithFooter from "./components/ContactWithFooter";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <ContactWithFooter />
    </main>
    </>
  );
}

export default App;
