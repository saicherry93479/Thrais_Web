import Ab1 from "../../assets/AboutUs1.jpeg";
import Ab2 from "../../assets/AboutUs2.jpg";
import Contact from "../home/Contact";
const AboutUs = () => {
  return (
    <div className="max-w-[65rem] px-4 sm:px-6 lg:px-12   overflow-hidden  mx-auto space-y-16 py-16 ">
      <div className=" flex flex-col  md:flex-row gap-4  md:gap-16">
        <img className="w-full md:w-[50%] rounded-lg" src={Ab1}></img>
        <div className="">
          <h1 className="text-[30px] md:text-[46px] md:leading-[60px] font-bold lg:w-[80%] mb-4 ">
            Vision
          </h1>
          <div className="text-gray-500 space-y-4">
            {" "}
            <p>
              To be a premier platform in converting the engineering graduates
              enterprise ready.
            </p>
            <p>
              {" "}
              To empower individuals by connecting their aspirations for
              overseas education with the right opportunities.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-16">
          <div>
            <h1 className="text-[30px] md:text-[46px] md:leading-[60px] font-bold lg:w-[80%] mb-4 ">
              Mission
            </h1>
            <ul className="text-gray-500 list-disc  space-y-2">
              {" "}
              <li className="">
                To impart quality training on the latest technologies through
                domain experts.
              </li>
              <li>
                {" "}
                Mapping the individuals’ skillset to the industry requirements
                through valued Mentorship.
              </li>
              <li>
                {" "}
                To experience the real time learning through internships in
                collaboration with the industries and experts.
              </li>
              <li>
                {" "}
                To support job opportunities and assist for their professional
                career development.
              </li>
              <li>
                To guide and support aspiring graduates to global education
                excellence by providing expert advice and thorough application
                assistance.{" "}
              </li>
            </ul>
          </div>

          <img className="md:w-[50%] rounded-lg" src={Ab2}></img>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default AboutUs;

{
  /* <div>
        <h1 className="text-[30px] md:text-[46px] md:leading-[60px] font-bold lg:w-[80%] ">
          Vision
        </h1>
        <p>
          · To be a premier platform in converting the engineering graduates
          enterprise ready.
        </p>
        <p>
          {" "}
          To empower individuals by connecting their aspirations for overseas
          education with the right opportunities.
        </p>
      </div> */
}
