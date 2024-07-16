import AboutUsComponent from "../components/aboutus/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
const AboutUs = () => {
  return (
    <div>
         <div
       className="sticky top-0 z-40 bg-blue-100/50"
      >
        <Header></Header>
      </div>
      <AboutUsComponent></AboutUsComponent>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
