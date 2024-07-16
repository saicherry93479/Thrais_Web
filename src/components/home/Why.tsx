const Why = () => {
  return (
    <div className="whyGradient">
      <section className="px-5 py-8 text-center text-white max-w-2xl mx-auto space-y-8 md:space-y-16 ">
        <div>
          <h2 className="text-3xl md:text-[40px] leading-[1.25] tracking-[.12px] font-extrabold ">
            Why Thrias?
          </h2>
          <p className="mt-2 md:mt-8 text-lg md:text-md font-semibold md:!leading-[1.5] text-[#f8f8f8] ">
            Thrias unleashes the genius within, empowering you to master the
            language of code, here's a thought experiment for you:
          </p>
        </div>
        <div className="space-y-8 md:space-y-24 points md:text-[23px] ">
          <div className="space-y-4">
            <div className="text-center w-4 h-4 p-4 border-white border-[1px] flex items-center justify-center mx-auto rounded-full">
              <span>1</span>
            </div>
            <p className="">
              Imagine learning with a group of immensely enthusiastic students,
              highly motivated mentors.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-center w-4 h-4 p-4 border-white border-[1px] flex items-center justify-center mx-auto rounded-full">
              <span>2</span>
            </div>
            <p className="">
              Imagine having the complete freedom to pursue their goals in a fun
              and engaging way
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-center w-4 h-4 p-4 border-white border-[1px] flex items-center justify-center mx-auto rounded-full">
              <span>3</span>
            </div>
            <p className="">
              Imagine them having access to a{" "}
              <strong className="text-amber-400 ">
                structured curriculum, weekly three knowledge heavy sessions ,
                personalized mentorship , doubt resolution sessions
              </strong>{" "}
              and exciting prizes too…
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
