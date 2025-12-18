import Hero from "./components/Hero";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewsSection from "./components/NewsSection";
const App = () => {
  return (
    <>
      <Hero />
      <Navbar/>
      <Home/>
      <NewsSection/>
      <Footer/>
      
    </>
  );
};

export default App;
