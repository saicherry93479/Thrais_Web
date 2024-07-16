import OfourIcon from "./icons/OfourIcon";
import othreeIcon from "./icons/othreeIcon";
import Otwoicon from "./icons/Otwoicon";
import SearchIcon from "./icons/SearchIcon";
import OverSeasSvg from "./OverSeasSvg";

const steps = [
  { id: 1, title: "Student Profile Analysis", icon: SearchIcon },
  { id: 2, title: "Career Counseling", icon: Otwoicon },
  { id: 3, title: "Course/University Selection", icon: othreeIcon },
  { id: 4, title: "Application & Admission Assistance", icon: OfourIcon },
  { id: 5, title: "Financial Aid & Scholarship", icon: SearchIcon },
  { id: 6, title: "Visa Guidance", icon: Otwoicon },
  { id: 7, title: "Pre-Departure Briefing", icon: othreeIcon },
  { id: 8, title: "Post-Arrival Assistance", icon: OfourIcon },
];

const OverseasServices = () => {
  return (
    <div id="overseas" className="w-full bg-white ">
      <div className="container mx-auto max-w-[65rem] relative px-5   py-8 md:px-8 md:py-24">
        <h3 className=" text-[24px] text-center mb-12 md:text-[34px] font-extrabold text-black font-bold tracking-[.22px] leading-[1.25]">
          Our Fly Abroad Programme.
        </h3>
        <div className="hidden md:block">
          <OverSeasSvg></OverSeasSvg>
        </div>
        <div className="grid sm:px-8 gap-4 grid-cols-2 sm:grid-cols-3 md:hidden">
          {steps.map((step, _index) => (
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:h-24 sm:w-24 ">
                {<step.icon></step.icon>}
              </div>

              <p className="text-[14px] sm:text-[20px]">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-16 w-full mx-auto mt-12  md:w-fit bg-[#00A3EA] rounded-2xl text-[14px] md:text-[16px]  px-12 py-3 flex items-center gap-4 text-white">
          <p className="text-center w-full"> Connect With Us</p>
        </div>
      </div>
    </div>
  );
};

export default OverseasServices;
