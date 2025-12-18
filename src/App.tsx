import Hero from "./components/Hero";
import "./index.css";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
const App = () => {
  return (
    <>
      <Hero />
      <Navbar/>
      <NewsSection/>
    </>
  );
};

export default App;
