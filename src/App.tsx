import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Form } from "./pages/Form";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Courses from "./pages/CoursesPage";
import ProgramsPage from "./pages/ProgramsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/services" element={<Courses></Courses>}></Route>
        <Route
          path="/programminglanguages"
          element={<ProgramsPage></ProgramsPage>}
        ></Route>
        {/* programminglanguages */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
