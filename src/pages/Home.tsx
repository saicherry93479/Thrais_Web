import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from "../components/home/Contact";
import Courses from "../components/home/Courses";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import OverseasServices from "../components/home/OverseasServices";
import Services from "../components/home/Services";
import Testimonal from "../components/home/Testimonal";
import Why from "../components/home/Why";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      smoothScrollToId(hash);
    }
  }, [location]);


  const smoothScrollToId = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="mx-auto relative "
     
    >
      <div
        className={`sticky top-0 left-0 w-full z-50 transition-colors duration-500 ${
          isScrolled ? "bg-blue-500/10 backdrop-blur-xl" : "bg-[#f3dfc6]"
        }`}
      >
        <Header></Header>
      </div>
      <Hero></Hero>

      <Services></Services>
      <Why></Why>

      <Courses></Courses>
      <Info></Info>
      <OverseasServices></OverseasServices>

      <Testimonal></Testimonal>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
