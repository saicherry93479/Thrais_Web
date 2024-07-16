import Service1 from "../../assets/service1.jpg";
import Service2 from "../../assets/Service2.jpg";

import Service3 from "../../assets/service3.jpg";
import Service4 from "../../assets/service4.jpg";
import Service5 from "../../assets/service5.jpg";

const services = [
  {
    name: " CRT Training : IT ",
    image: Service1,
  },
  {
    name: "Student Internships",
    image: Service2,
  },
  {
    name: "Recruitment and Staffing",
    image: Service3,
  },
  {
    name: " Placement Assistance",
    image: Service4,
  },
  {
    name: "Personalized Mentorship",
    image: Service5,
  },
];

const Services = () => {
  return (
    <section className="bg-white max-w-[70rem] pl-4 sm:px-6 lg:px-12 xl:px-24 pb-[2rem] md:pb-[7rem] mx-auto   ">
      <div className=" flex md:gap-6  overflow-x-scroll   mx-auto">
        {services.map((d) => (
          <div className="relative mr-6 md:mr-0 shrink-0 w-[80%] md:w-[33%] cursor-pointer group overflow-hidden rounded-2xl">
            <img
              src={d.image}
              alt=""
              className="rounded-2xl group-hover:scale-110 transistion duration-200 "
            />
            <div className="absolute flex md:hidden md:group-hover:flex w-full rounded-2xl top-0 left-0 h-full bg-black/40  justify-center items-center">
              <p className="text-white font-bold text-[22px]">{d.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
