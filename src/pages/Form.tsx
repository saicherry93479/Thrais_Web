
import Header from "../components/Header";
import FormComponent from "../components/Form/Form";
import Footer from "../components/Footer";

export const Form = () => {
  
  return (
    <div className="mx-auto relative ">
      <div
       className="sticky top-0 z-40 bg-blue-100/50"
      >
        <Header></Header>
      </div>
      <FormComponent></FormComponent>
      <Footer></Footer>
    </div>
  );
};
