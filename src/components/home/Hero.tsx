import HeroPic from "../../assets/HeroPic.png";

const Hero = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-12 heroGradient overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[70rem]  md:gap-24 mx-auto py-8 md:py-16">
        <div className="">
          <h1 className="text-[30px] md:text-[46px] md:leading-[60px] font-bold lg:w-[80%] ">
            <span className="text-[#00A3EA]">India's Top-Rated </span> <br />{" "}
            Education Consultant with Success Stories
          </h1>
          <p className="text-[#696984] lg:w-[75%]">
            Join thrias to master coding concepts including data structures and
            algorithms. Get ready to crack your dream job or higher education
            with confidence and skills.
          </p>
          <div className="mt-4 w-full  sm:w-fit bg-[#00A3EA] rounded-2xl text-[14px] md:text-[16px]  px-4 py-3 flex items-center gap-4 text-white">
            <a href="#contact" className="text-center w-full">
              {" "}
              Join Community
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 hidden sm:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                className="astro-EWXIRVLT"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src={HeroPic} className="md:scale-125"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
