import About from "./components/About";
import Hero from "./components/Me";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Projects Section */}
      <section id="skills">
        <Projects />
      </section>
      
      {/* Contact Section (inside Footer or separate if needed) */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}

export default App;
