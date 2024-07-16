import { useRef } from "react";

const Testimonal = () => {
  const cardContainerRef = useRef<any>(null);

  const scrollRight = () => {
    console.log("cliked");
    if (cardContainerRef.current) {
      console.log("cliked one");
      cardContainerRef.current.scrollBy({
        left: cardContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -cardContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[#f0f8ff]" id="achievers">
      <section className="py-8 lg:!py-14">
        <div className="px-4 md:!px-6 max-w-[70rem] mx-auto xl:!mx-auto">
          <div className="w-full ">
            <h3 className="mb-12 text-center  text-[24px] md:text-[34px] font-extrabold text-black font-bold tracking-[.22px] leading-[1.25]">
              What they Say?
            </h3>

            <div className="relative overflow-hidden">
              <div
                ref={cardContainerRef}
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
                className="no-scroll flex scroll-smooth md:justify-center scroll-smooth [&>div]:w-1/2 [&>div]:select-none transition-all duration-300 cursor-default overflow-x-scroll"
              >
                {[0, 1, 2].map((_d) => (
                  <div
                    className="rounded-lg m-2 !w-[93%] sm:!w-[280px] !mx-3 md:!mx-6 bg-white rounded-b-[8px] rounded-t-[8px] h-auto shadow-light shrink-0 flex-col p-0 pb-7"
                    style={{
                      boxShadow:
                        "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
                      flexShrink: 0,
                    }}
                  >
                    <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-bold self-start bg-[#00A3EA40] w-full text-center text-[#00A3EA] py-2 rounded-t-[8px]">
                      Fresher
                    </p>
                    <div className="px-4 pt-7 flex items-center justify-start gap-x-4">
                      <figure>
                        <img
                          alt="Abhisekh Bhuyan"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
                          width={40}
                          height={40}
                          decoding="async"
                          data-nimg={1}
                          className="w-10 h-10 object-cover rounded-full"
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </figure>
                      <div>
                        <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-bold text-gray-900">
                          Abhisekh Bhuyan
                        </p>
                        <p className="md:!text-sm md:!leading-[22px] font-normal h-[32px] text-[#757575] text-[14px]">
                          MLOps engineer
                        </p>
                      </div>
                    </div>
                    <p className="md:!text-sm md:!leading-[22px] font-normal px-4 pt-3 !text-gray-650 text-[14px] line-clamp-5 text-[#757575] text-left h-[100px]">
                      I got job as an MLOps engineer at synapsica at 13 LPA PPO
                      because of "End to End projects MLOps" from iNeuron.
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex  justify-center gap-x-4 py-4 text-primary-500 -mt-6 sm:!mt-8">
                <div
                  onClick={() => {
                    scrollLeft();
                  }}
                  className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-medium absolute left-0 top-1/2 -translate-y-1/2 md:!translate-x-1/2 md:!relative md:!-left-10 md:!translate-y-0 "
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M328 112L184 256L328 400"
                      stroke="currentColor"
                      strokeWidth={48}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    scrollRight();
                  }}
                  className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-medium cursor-pointer absolute md:!relative right-0 top-1/2 -translate-y-1/2 md:!-translate-x-1/2 md:!-right-30 md:!translate-y-0"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M184 112L328 256L184 400"
                      stroke="currentColor"
                      strokeWidth={48}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <a
              className="w-full text-center"
              href="https://halloffame.ineuron.ai/"
            ></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonal;
