import { useEffect, useRef } from "react";

const Info = () => {
  const carouselRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const carousel: any = carouselRef.current;
    const interval = setInterval(() => {
      if (!carousel) return;

      const { scrollLeft, clientWidth, scrollWidth } = carousel;
      if (scrollLeft + clientWidth >= scrollWidth || scrollLeft === 0) {
        directionRef.current *= -1;
      }
      carousel.scrollBy({
        left: clientWidth * directionRef.current,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f0f8ff]">
      <main className="container px-5  py-8 md:px-8 md:py-16 mx-auto">
        <div className="flex flex-col max-w-3xl text-center  justify-center items-center gap-4  md:w-full mx-auto">
          <h3 className=" text-[24px] md:text-[34px] font-extrabold text-black font-bold tracking-[.22px] leading-[1.25]">
            Want to know <br /> what it's like to learn from Us?
          </h3>
          <p className="hidden md:block md:text-md leading-[1.5]  tracking-[.94px] text-gray-600">
            Thrias acknowledges the challenging nature of pushing oneself and
            understands the effort it entails. In light of this, Thrias is
            committed to constantly developing inventive events that promote
            personal renewal for all participants.
          </p>
        </div>
        <div
          ref={carouselRef}
          className="mt-6 md:mt-14 py-4 px-1 flex w-full overflow-x-scroll md:grid  md:grid-cols-2 md:gap-8 md:gap-14 md:max-w-[80%] mx-auto md:max-w-[57rem]"
        >
          <div className="flex gap-6 w-full shrink-0  md:p-4 md:p-8 rounded-xl md:!shadow-none">
            <img
              className="w-14  h-14"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR4nO1aS2/TQBDeEwJRBJQLcOUhWonCBalKdm1elYCS7LrC4sgVVQhE6YHXjUfhv0CBE5xB/INISE09k6Qpjx+BisZJqOuk3rVjk6T4kyIlO57Zb/bxebwxYzlyjB7sUvW4kLBKH/rOhgnCqV0UEryixPO6ay2JD4TCDfpwhQtpxu4b3AFXSPjNy94N3bU0C1xhlUtcKaj6sTRjpwL7Fu4exdg5RgZFB85whZ+EghdJY5AvxaBYbFAQCt51VKkg8WyX3anNCgVNLnGtqPBq2E4+HX+KxQYFIWHRl1aJa5ddb3/YTu0B+W2E7bbEA51rTOQ5U5DE2m5lrJdNl4jv71bGMr1ZCgVPabothRNJY9ByomQoCe7glaRxLIUTxIUrfBLLMbh2uYI3bMDgEt52+MQShWm3MS4k/mo7PzTxmXQru4TC11zCd6FgnUtYojZTe3Qi+Li9PH8SN+NEfOfZ+kFLeqfD7YVy/ail4B4pUrBdKHy1qUDt2ZTw0tTu96m86+3YR8L9EhfixNIAbcwtG1ji/CZRWPfbZa3A52rFtqSum9u9O0FhmJn5sZdlBcvxzm0dUXwfJkokA0Sbpnau8EMwNvWVWSI0SjRagQ5v/yUiYSm8dIJ3fL0d5wO2eqYzQqD1yx24G75T08ZtkaWRhyaRDG/2KDvBkniNYtsuHs40iR2JyT7kNA3/WGg/4S30KiFM5DQKpv52BIcucAVfhcQvXZ3RwUFLnVa6iUTLqT4RM38RwaGLN/3gCj93X4hVXSLbyalpIjp/HsVhG96s57SW8X6vgwOdnOpg6m9HcEgFJnKapX8OXdGYRvXLI4rGVBFdNPZX/Q5d0SgSVr9DUzSKfqvfrIrGabcxzkvelGnR2G/1qysaecmbiv10eEk1DwUedR+Z+KRR/eoedYlTrGR2zOHD5ijAsj2Hp1hC6E4aYx4HLRMnlhW48k4Wyt/2JT2gI19rbvUEGyRECkemrf2CG/TvFhsU6D4StXZ1J41Dc4jNS96UkPCRS3yWNIaQ8NyP0UPqc/x3mHYbe0Yx9hYICTf9v5AdcFnKLwyIGLH7hlXGC0QsixcGrBix/ynivjCQIwcbPvwBQuAft01W9QUAAAAASUVORK5CYII="
              alt=""
            />
            <div>
              <div className="flex  gap-2 items-center">
                <strong className="block text-xl lg:text-2xl text-[#00A3EA]">
                  Mentorship
                </strong>
              </div>
              <p className="mt-2  sm:text-lg text-gray-600">
                We have created a simple yet impactful guided path that helps
                any student to learn code irrespective of where you stand
                before.
              </p>
            </div>
          </div>
          <div
            className="flex gap-6 w-full shrink-0 p-4 md:p-8 rounded-xl  md:!shadow-none"
            // style={{
            //   boxShadow:
            //     "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            //   flexShrink: 0,
            // }}
          >
            <img
              className="w-14   h-14"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEklEQVR4nO2aT2tTQRDAt3pQ0d48iyhi8dqD0s4kKBSjlreTYLy2ehA/gj2VXqUeSr149Vw8+AUEUaonPQitpZ1JYtWDB0G9COKT2fdS2sYkL8nbJNI3MIfs23+/ndmZ3SXGtJFyOTycs3IdrCwD8Su0vAnEP1WRZB2Jn6OVBaDquDHhiOlBoCgFsPIRSUJVIKlpmelV8jNyFK18qHfcTsHyGgRbN7sFApJaQ58ktVRAwMqGrjxYeYDFyhUoVc9MTX05rjoR8Hm0fBWtLKGVys4ELK/mrZzudDyM2zf73a7xHFj+/a8V7mgW8+EhtDJbX1Ug+ZoL5PL/BxKLWgqIV5K6Y6txsbUbfwYrZPbL5PTWKSD+lgQErLxR92n2XfcIEC/6BEGn/KnRLTT6RBWetQNJZjEHs+IXRPbOIUd8q26u/PT6yXRA6m7WGIk8gYQjSPw2/nBPS3TPqPYK4voK5HYv+wWTgkDAF2N/2y4UNo7EE51DkvtpgGhCRZKqfxDi+citZDnJxDoFcWNYWfYOgvVNXqzc8AUySXLNP4jlLS2YoOpZXyDuBODdtaz80IJ8+f2J5CD8x7ljULmQDGRt1A1s5ZfxJUjy3VkkWBtN3MbySwfiTsA8MxQgEB0Kw1xp81zSNpfKtWNI8niXiZ9ozmhWP1+Ssb5tduji3B8dEt29RDt93aye3mf6sNllITb7kulCdJ+glXdA8mKg4ReoOh6DVDR5mZRF++zmmIKdgkRHFL2yOpjZtEEmSe74gsD9KUCvp1EUklqrTdupaEjffQf3DmLUKpZXIxhe6fURYadP4qctBnWS5BsmBzFG79h6PY1hFnuDcQvzMBosSp59A1HRO3a9glqmGzdTd9pvib6DqOytyNtAfDdRNJsPD0GRy0AsnQzaJxCpa9U90BWloFlaV91pScb0ZAuWHyUJscMAEg6rmgyEuneRoXMtk4E0SmYRylxLBh5qMQu/lEWtPZLlEcoSojlYmR2HSE0GQoO3AmYWocGvPB5Yi4Dnl8E0FVr94SZ6FRl+GEjrL1CZGD/yF9H0P1YnM4SbAAAAAElFTkSuQmCC"
              alt=""
            />
            <div>
              <div className="flex gap-2 items-center">
                {/* <img
                className="w-14  md:hidden h-14"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKklEQVR4nO2ZS47TQBCG+wLAEiSYBeJxBEBJVSJBkJBQXOVEuRIDJwAGjoFgNTwOARkluMozDGx4LDKzN6qEh4DJ2LET2oH+pdpYben/XFVdardzQUFBldWKk5vA+ghZd4DlEFmzVQawHALJEEm3IEo6lQGAk8vA+mrVxnOD9GWr9/ZSKQiMpIUsX7xD8HcY+dyiBBfORK0g+CdMuzu+uACIPPdumueXWeHG9m6Wjw+g9EaRbDz2bRTz42EuiG2xR34F1j2ktN+IhicsmpHG89auPiMyLAIyOQqiPdAzyHoPSD4gy3tkvWvPgPSdB5hJEZA/X6S0b8aB5Mm123tn2/HoHJI8BZJNiGXgIyuuDIiVkmXBAH6so/GGPbtya3TyN+iGW5Kglzb/Fsh+Z5Cc+qUMe2lzWSBNTmCpINbYVkZWTrOyGm8gyTMgufOt7NajtJB1Z9bYsjlrdNk3iKvd5DSQjtYJJLPdyRrbemLaF5T2fUFgFZC6hfvvQaBGkx3LZqSGkz0rV1phslcThMnuwmTP1qPZOUz2rHYZwZqFK11aYbJrjTJC4cxeSRAmu/u3JvtkDc7sk/K/TGt0ZgeSN/kgpFs+zC0Icj9/p4iSjm+jmBdxej0XZApDsu3dLM8LeVEIYlpe3fQ8sH70b1qrXb2Z7OLRXvRunmcBJJ/sX7ArI6Ovw30ikGw3ePeCqyq7s7PrLtv2gPRg9cb1AFleA+uDwo0dFBTkjtNXlcmWEdjSZzUAAAAASUVORK5CYII="
                alt=""
              /> */}
                <strong className="block text-xl lg:text-2xl text-[#00A3EA]">
                  Mentorship
                </strong>
              </div>
              <p className="mt-2 sm:text-lgtext-gray-600">
                Sharpen your skills from our dedicated mentors and Doubt
                Resolution Sessions!
              </p>
            </div>
          </div>
          <div
            className="flex gap-6 w-full shrink-0 p-4 md:p-8 rounded-xl  md:!shadow-none"
            // style={{
            //   boxShadow:
            //     "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            //   flexShrink: 0,
            // }}
          >
            <img
              className="w-14 block h-14"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKklEQVR4nO2ZS47TQBCG+wLAEiSYBeJxBEBJVSJBkJBQXOVEuRIDJwAGjoFgNTwOARkluMozDGx4LDKzN6qEh4DJ2LET2oH+pdpYben/XFVdardzQUFBldWKk5vA+ghZd4DlEFmzVQawHALJEEm3IEo6lQGAk8vA+mrVxnOD9GWr9/ZSKQiMpIUsX7xD8HcY+dyiBBfORK0g+CdMuzu+uACIPPdumueXWeHG9m6Wjw+g9EaRbDz2bRTz42EuiG2xR34F1j2ktN+IhicsmpHG89auPiMyLAIyOQqiPdAzyHoPSD4gy3tkvWvPgPSdB5hJEZA/X6S0b8aB5Mm123tn2/HoHJI8BZJNiGXgIyuuDIiVkmXBAH6so/GGPbtya3TyN+iGW5Kglzb/Fsh+Z5Cc+qUMe2lzWSBNTmCpINbYVkZWTrOyGm8gyTMgufOt7NajtJB1Z9bYsjlrdNk3iKvd5DSQjtYJJLPdyRrbemLaF5T2fUFgFZC6hfvvQaBGkx3LZqSGkz0rV1phslcThMnuwmTP1qPZOUz2rHYZwZqFK11aYbJrjTJC4cxeSRAmu/u3JvtkDc7sk/K/TGt0ZgeSN/kgpFs+zC0Icj9/p4iSjm+jmBdxej0XZApDsu3dLM8LeVEIYlpe3fQ8sH70b1qrXb2Z7OLRXvRunmcBJJ/sX7ArI6Ovw30ikGw3ePeCqyq7s7PrLtv2gPRg9cb1AFleA+uDwo0dFBTkjtNXlcmWEdjSZzUAAAAASUVORK5CYII="
              alt=""
            />
            <div>
              <div className="flex gap-2 items-center">
                <strong className="block text-xl lg:text-2xl text-[#00A3EA]">
                  Mentorship
                </strong>
              </div>
              <p className="mt-2 sm:text-lgtext-gray-600">
                Get 24/7 Instant Doubt Resolution from our expert mentors in our
                community!
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full shrink-0 p-4 md:p-8 rounded-xl  md:!shadow-none">
            <img
              className="w-14 block h-14"
              src="data:image/png;base64,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"
              alt=""
            />
            <div>
              <div className="flex gap-2 items-center">
                <strong className="block text-xl lg:text-2xl text-[#00A3EA]">
                  Mentorship
                </strong>
              </div>
              <p className="mt-2 sm:text-lg text-gray-600">
                A community of immensely enthusiastic, highly motivated
                individuals.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Info;
