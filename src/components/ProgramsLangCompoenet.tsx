const ProgramsLangCompoenet = () => {
  return (
    <main
      className="relative min-h-[80vh] text-white  "
      style={{
        backgroundImage:
          'url("https://pc2023.coign.in/_astro/events-hero.03787410.jpg")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/80 ">
        <div
          id="courses"
          className="max-w-[70rem]  flex justify-center items-center  h-[80vh] mx-auto px-5   py-8 md:py-16"
        >
          <div>
            <h2 className="text-3xl text-center mb-12 md:text-[40px] leading-[1.25] text-gray-300 underline underline-offset-[10px]  tracking-[.12px] font-extrabold ">
              Programming Language We Offer
            </h2>
            <div className="flex overflow-x-auto flex-wrap gap-4 justify-center p-4 mx-auto mt-4 max-w-2xl no-scrollbar">
              <a
                href="/coursepage?course=C Programming"
                className="w-full md:w-auto  bg-transparent  hover:text-white hover:bg-[#00A3EA] text-[#ffffff] outline-none border-gray-500 hover:border-[#00A3EA] border-2 outline-offset-2 transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] px-4 py-2 rounded-full "
              >
                C Programming
              </a>
              <a
                href="/coursepage?course=C Programming"
                className="w-full md:w-auto  bg-transparent  hover:text-white hover:bg-[#00A3EA] text-[#ffffff] outline-none border-gray-500 hover:border-[#00A3EA] border-2 outline-offset-2 transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] px-4 py-2 rounded-full "
              >
                C++ Programming
              </a>
              <a
                href="/coursepage?course=JavaScript"
                className="w-full md:w-auto  bg-transparent  hover:text-white hover:bg-[#00A3EA] text-[#ffffff] outline-none border-gray-500 hover:border-[#00A3EA] border-2 outline-offset-2 transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] px-4 py-2 rounded-full "
              >
                Javascript & TypeScript
              </a>
              <a
                href="/coursepage?course=Python Programming"
                className="w-full md:w-auto  bg-transparent  hover:text-white hover:bg-[#00A3EA] text-[#ffffff] outline-none border-gray-500 hover:border-[#00A3EA] border-2 outline-offset-2 transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] px-4 py-2 rounded-full "
              >
                Python
              </a>
              <a
                href="/coursepage?course=Java Programming"
                className="w-full md:w-auto  bg-transparent  hover:text-white hover:bg-[#00A3EA] text-[#ffffff] outline-none border-gray-500 hover:border-[#00A3EA] border-2 outline-offset-2 transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] px-4 py-2 rounded-full "
              >
                Java
              </a>

              <a
                href="/coursepage?course=C Programming"
                className="w-full md:w-auto  bg-transparent  hover:text-white hover:bg-[#00A3EA] text-[#ffffff] outline-none border-gray-500 hover:border-[#00A3EA] border-2 outline-offset-2 transition-all ease-[cubic-bezier(.4,0,0.2,1)] duration-[0.15s] px-4 py-2 rounded-full "
              >
                SQL
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProgramsLangCompoenet;
