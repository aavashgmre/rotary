import Hero from "./components/Hero";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsSection from "./components/NewsSection";
import Home from "./components/Home";
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
