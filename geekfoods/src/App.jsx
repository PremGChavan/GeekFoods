import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <div className="my-20">
        <About />
      </div>
      
      <Quote />
      <Footer />
    </>
  );
}

export default App;
