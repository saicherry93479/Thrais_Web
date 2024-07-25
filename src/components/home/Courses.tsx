import DEVOPS_IMAGE from "../../assets/DEVOPS.png";
import DSA_IMAGE from "../../assets/DSA.png";
import MERN_IMAGE from "../../assets/mern.jpg";
import TESTING_IMAGE from "../../assets/testing.png";
import PROGRAMMING_image from "../../assets/programming langs.png";
import { useEffect, useState } from "react";
const COURSES_DATA = [
  {
    image: DEVOPS_IMAGE,
    name: "DevOps",
  },
  {
    image: DSA_IMAGE,
    name: "Data Structures",
  },
  {
    image: MERN_IMAGE,
    name: "MERN Stack",
  },
  {
    image: TESTING_IMAGE,
    name: "Automation Testing with Selenium and C#",
  },
  {
    image: PROGRAMMING_image,
    name: "Programming Languages",
  },
];

const Courses = () => {
  const [home, setHome] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("services")) {
      setHome(true);
    }
  }, []);

  return (
    <div id="courses" className="max-w-[70rem] mx-auto px-5   py-8 md:py-16">
      <h2 className="text-3xl text-center mb-12 md:text-[40px] leading-[1.25] tracking-[.12px] font-extrabold ">
        Our Training Programmes
      </h2>
      <div className="grid mx-auto gap-4 md:gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {COURSES_DATA.map((d, index) => (
          <a
            href={
              index !== 4
                ? `coursepage?course=${d.name}`
                : "/programminglanguages"
            }
            className="p-2 rounded-xl group relative flex flex-col gap-2 cursor-pointer "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              flexShrink: 0,
            }}
            onClick={() => {
              if (index === 4) {
                window.location.href = "/programminglanguages";
              }
            }}
          >
            <img
              className="rounded-md aspect-video object-cover "
              src={d.image}
            ></img>
            <div className="absolute flex md:hidden md:group-hover:flex w-full rounded-2xl top-0 left-0 h-full bg-black/80  justify-center items-center">
              <p className="text-white font-bold text-[22px]">
                {index !== 3 ? d.name : "Automation and Scheduling"}
              </p>
            </div>
          </a>
        ))}
      </div>
      {home && (
        <a
          href="/services"
          className="mt-8 md:mt-16 w-full mx-auto mt-12  md:w-fit bg-[#00A3EA] rounded-2xl text-[14px] md:text-[16px]  px-12 py-3 flex items-center gap-4 text-white"
        >
          <p className="text-center w-full">Know More About Courses</p>
        </a>
      )}
    </div>
  );
};

export default Courses;
