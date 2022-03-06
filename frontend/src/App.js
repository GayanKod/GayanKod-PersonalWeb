import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './container/About/About.jsx'
import Footer from './container/Footer/Footer.jsx'
import Header from './container/Header/Header'
import Skills from './container/Skills/Skills'
import Testimonials from './container/Testimonial/Testimonials'
import Work from './container/Work/Work'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;