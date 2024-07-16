import { useState } from "react";
import Logo from "../assets/icons/Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      id="header"
      className={`sticky  h-[10vh] md:hauto z-40 top-0   ${
        menuOpen ? "bg-[#00A3EA]" : ""
      } `}
    >
      <div className=" max-w-[70rem] mx-auto px-5 py-6 ">
        <div className="flex justify-between items-center">
          <a href="/#" className="bg-white p-2 rounded-full px-6 headerButton">
            <Logo></Logo>
          </a>
          {menuOpen && (
            <ul className="absolute font-bold left-0 flex-col w-full px-4 py-2 md:py-1 text-white transition-all md:hidden top-[10vh] md:w-auto md:rounded-full md:shadow-lg md:flex-row items-center md:static bg-[#00A3EA] md:!opacity-100 md:!pointer-events-auto md:!translate-y-0 open">
              <li className="svelte-dubwht">
                <a className="block py-2 svelte-dubwht" href="/course">
                  Overseas
                </a>
              </li>{" "}
              <li className="svelte-dubwht">
                <a className="block py-2 svelte-dubwht" href="/events">
                  Courses
                </a>
              </li>{" "}
              <li className="svelte-dubwht">
                <a className="block py-2 svelte-dubwht" href="/#community">
                  About Us
                </a>
              </li>{" "}
              <li className="md:hidden svelte-dubwht">
                <a className="block py-2 svelte-dubwht" href="/register">
                  Join Now
                </a>
              </li>
            </ul>
          )}

          <button
            className="p-2 text-white rounded-full bg-[#00A3EA] md:hidden"
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          <div className="hidden md:block bg-white py-4 px-4 rounded-full">
            <a
              href="/#overseas"
              className="py-2 px-4  hover:bg-[#00A3EA] hover:text-white rounded-full "
            >
              Overseas
            </a>
            <a
              href="/services"
              className="py-2 px-4  hover:bg-[#00A3EA] hover:text-white rounded-full "
            >
              Services
            </a>
            <a
              href="/events"
              className="py-2 px-4  hover:bg-[#00A3EA] hover:text-white rounded-full "
            >
              Events
            </a>
            <a
              href="/aboutus"
              className="py-2 px-4  hover:bg-[#00A3EA] hover:text-white rounded-full "
            >
              About Us
            </a>
          </div>
          <a
            href="/form"
            className="hidden md:block bg-[#00A3EA] hover:opacity-[92%] cursor-pointer px-8 py-3  text-center rounded-full text-white flex justify-center items-center"
          >
            Join Now{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
