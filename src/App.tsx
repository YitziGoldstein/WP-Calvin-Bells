import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Services />
        <Price />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

