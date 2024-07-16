import Footer from "../components/Footer";
import Header from "../components/Header";
import ProgramsLangCompoenet from "../components/ProgramsLangCompoenet";

const ProgramsPage = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 bg-blue-100/50">
        <Header></Header>
      </div>
      <ProgramsLangCompoenet></ProgramsLangCompoenet>
      <Footer></Footer>
    </div>
  );
};

export default ProgramsPage;
