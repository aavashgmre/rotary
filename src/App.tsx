import Hero from "./components/Hero";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <Hero />
      <Navbar/>
      <Home/>

      <Footer/>
    </>
  );
};

export default App;
