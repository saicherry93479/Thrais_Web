import Service1 from "../../assets/service1.jpg";
import Service2 from "../../assets/Service2.jpg";
import Service3 from "../../assets/service3.jpg";
import Service4 from "../../assets/service4.jpg";
import Service5 from "../../assets/service5.jpg";

const services = [
  {
    name: "CRT Training : IT",
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
    name: "Placement Assistance",
    image: Service4,
  },
  {
    name: "Personalized Mentorship",
    image: Service5,
  },
];

const Services = () => {
  return (
    <section className="bg-white max-w-[70rem] pl-4 sm:px-6 lg:px-12 xl:px-24 pb-[2rem] md:pb-[7rem] mx-auto">
      <div className="scroll-wrapper relative">
        <div className="scroll-container flex">
          {/* First set of services */}
          {services.map((d, index) => (
            <div
              key={index}
              className="relative mr-6 shrink-0 w-[80%] md:w-[33%] cursor-pointer group overflow-hidden rounded-2xl"
            >
              <img
                src={d.image}
                alt={d.name}
                className="rounded-2xl group-hover:scale-110 transition duration-200"
              />
              <div className="absolute flex group-hover:flex w-full rounded-2xl top-0 left-0 h-full bg-black/60 justify-center items-center">
                <p className="text-gray-300 font-bold text-[22px]">{d.name}</p>
              </div>
            </div>
          ))}
          {/* Duplicate services for seamless scrolling */}
          {services.map((d, index) => (
            <div
              key={`duplicate-${index}`}
              className="relative mr-6 shrink-0 w-[80%] md:w-[33%] cursor-pointer group overflow-hidden rounded-2xl"
            >
              <img
                src={d.image}
                alt={d.name}
                className="rounded-2xl group-hover:scale-110 transition duration-200"
              />
              <div className="absolute flex group-hover:flex w-full rounded-2xl top-0 left-0 h-full bg-black/60 justify-center items-center">
                <p className="text-gray-300 font-bold text-[22px]">{d.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
