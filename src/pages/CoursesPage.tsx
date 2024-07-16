import CoursesPageComponent from "../components/courses/CoursesPageComponet";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Courses = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 bg-blue-100/50">
        <Header></Header>
      </div>
      <CoursesPageComponent></CoursesPageComponent>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
