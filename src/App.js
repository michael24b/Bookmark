import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Features from './components/Features/Features'
import Download from "./components/Download/Download";
import Faq from "./components/Faq/Faq";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation/>
      <Hero/>
      <Features/>
      <Download/>
      <Faq/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
