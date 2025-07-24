// src/App.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contributions from "./components/Contributions";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Contributions />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;