import { useEffect, useState } from "react";
import { db } from "../../db";
import { addDoc, collection } from "firebase/firestore";
// 00A3EA
const Contact = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(-1);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  useEffect(() => {
    if (success === 0 || success === 1) {
      setTimeout(() => {
        setSuccess(-1);
      }, 3000);
    }
  }, [success]);

  return (
    <div className="  w-full py-8 px-4 sm:px-6 lg:px-12 md:py-16 " id="contact">
      <div
        className="mx-auto flex max-w-[65rem] flex-col   justify-center gap-4 rounded-xl bg-white p-4 md:flex-row md:gap-12 md:p-24"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
      >
        <div className="md:w-[50%]">
          <div className="flex items-center gap-2">
            <HeartIcon></HeartIcon>
            <p className="text-[19px] text-black md:text-[24px]">
              Join our WhatsApp community
            </p>
          </div>
          <p className=" mt-4 text-[#747474]">
            Join a group of experts who want to know more about latest Creator
            Economy trends and engage with knowledgeable posts.
            <br className="" /> Every alternate day we share an interesting
            insight that will help you in your content creation journey.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-[40%]  ">
          <input
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2  text-[16px] text-black  outline-none"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2 text-[16px]   text-black  outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button
            disabled={processing}
            className="mt-2 cursor-pointer rounded-md bg-[#00A3EA] p-2 "
            onClick={async () => {
              if (emailRegex.test(email) && phoneRegex.test(phone)) {
                setProcessing(true);
                try {
                  await addDoc(collection(db, "contacts"), {
                    phone: phone,
                    email: email,
                  });
                  setSuccess(1);
                  setEmail("");
                  setPhone("");
                  window.open("", "_blank");
                } catch (e) {
                  setSuccess(0);
                }
                // const res = await actions.Contact({
                //   phoneNumber: phone,
                //   email: email,
                // });

                // if (res.success) {
                //   setSuccess(1);
                //   setEmail("");
                //   setPhone("");
                //   window.open("", "_blank");
                // } else {
                //   setSuccess(0);
                // }
                setProcessing(false);
              } else {
                setSuccess(0);
              }
            }}
          >
            {processing ? (
              <div className="flex justify-center p-2">
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0.45s]"></div>
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0.30s]"></div>
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0.15s]"></div>
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0s]"></div>
              </div>
            ) : (
              <div className="flex items-center  justify-center gap-2 text-[16px]">
                <WhatsAppRoundIcon css="w-8 h-8  scale-140"></WhatsAppRoundIcon>{" "}
                <p className="text-white">Count me in!</p>
              </div>
            )}
          </button>

          {success === 1 && (
            <p className="text-right text-green-600 ">
              Thanks for connecting 😊
            </p>
          )}
          {success === 0 && (
            <p className="text-right text-red-600 ">Please try Again 😔</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

const HeartIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6074 1.0969C23.0451 -0.358562 20.6874 -0.207142 18.7698 0.632515C17.1555 1.33935 15.8599 2.52929 15 3.63879C14.1401 2.52929 12.8445 1.33935 11.2302 0.632515C9.31264 -0.207142 6.95489 -0.358562 4.39263 1.0969C1.0689 2.98491 -0.184852 6.32082 0.0217009 9.84067C0.226044 13.3231 1.85126 16.9878 4.2578 19.7217C6.50968 22.28 10.8458 26.9114 13.5565 29.3971C14.4008 30.1714 15.5922 30.2094 16.4645 29.4559C19.427 26.8964 23.456 22.3191 25.7277 19.7381L25.7421 19.7217C28.1487 16.9878 29.7739 13.3231 29.9783 9.84067C30.1849 6.32082 28.9311 2.98491 25.6074 1.0969Z"
        fill="#00A3EA"
      />
      <path
        d="M15.4153 4.92451C16.1453 3.81863 17.4545 2.4718 19.1432 1.7324C20.8142 1.00071 22.8659 0.857444 25.1435 2.15122C28.0451 3.79938 29.1258 6.65183 28.9433 9.76226C28.7585 12.9103 27.2711 16.318 25.0088 18.8882C22.7215 21.4869 18.737 26.0119 15.8366 28.5176C15.3529 28.9356 14.6895 28.9211 14.2083 28.4799C11.5389 26.032 7.23241 21.4339 4.99168 18.8882C2.72929 16.318 1.2419 12.9103 1.05717 9.76226C0.87464 6.65183 1.95536 3.79938 4.85685 2.15122C7.13446 0.857444 9.18622 1.00071 10.8573 1.7324C12.546 2.4718 13.8551 3.81863 14.5853 4.92451L15.0003 5.55318L15.4153 4.92451Z"
        fill="#00A3EA"
      />
      <path
        d="M23.2948 1.38595C21.7516 0.98302 20.3482 1.20464 19.1429 1.73241C17.4542 2.4718 16.145 3.81863 15.415 4.92452L15 5.55316V8.16497C16.1714 5.3517 18.8898 1.69928 23.2948 1.38595Z"
        fill="#00A3EA"
      />
      <path
        d="M9.53608 1.30744C8.14705 1.01881 6.5655 1.18065 4.85685 2.15122C1.95536 3.79939 0.87464 6.65183 1.05717 9.76227C1.2419 12.9103 2.72929 16.318 4.99168 18.8884C7.23241 21.4339 11.5389 26.0321 14.2083 28.4799C14.6895 28.9211 15.3529 28.9356 15.8366 28.5176C16.0648 28.3206 16.2996 28.111 16.5398 27.8908C13.6167 25.3606 9.7412 21.6443 7.59132 19.4612C2.44846 14.2389 0.734189 5.53494 7.59132 2.0534C8.2554 1.71623 8.90474 1.47206 9.53608 1.30744Z"
        fill="#00A3EA"
      />
      <path
        d="M20.2775 14.2774C21.6847 15.2004 23.9359 13.7634 25.3057 11.0678C26.6756 8.37225 26.6454 5.43886 25.2383 4.5159C23.8311 3.59293 21.5799 5.02991 20.2101 7.72548C18.8402 10.421 18.8704 13.3544 20.2775 14.2774Z"
        fill="#00A3EA"
        fillOpacity="0.26"
      />
    </svg>
  );
};

const WhatsAppRoundIcon = ({
  css = "w-8 h-8 fill-[#404040]",
}: {
  css?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      fill="none"
      className={`${css} `}
    >
      <rect width={30} height={30} rx={15} />
      <path
        d="M9 21L9.8435 17.9185C9.323 17.0165 9.0495 15.994 9.05 14.9455C9.0515 11.6675 11.719 9 14.9965 9C16.587 9.0005 18.08 9.62 19.203 10.744C20.3255 11.868 20.9435 13.362 20.943 14.951C20.9415 18.2295 18.274 20.897 14.9965 20.897C14.0015 20.8965 13.021 20.647 12.1525 20.173L9 21ZM12.2985 19.0965C13.1365 19.594 13.9365 19.892 14.9945 19.8925C17.7185 19.8925 19.9375 17.6755 19.939 14.95C19.94 12.219 17.7315 10.005 14.9985 10.004C12.2725 10.004 10.055 12.221 10.054 14.946C10.0535 16.0585 10.3795 16.8915 10.927 17.763L10.4275 19.587L12.2985 19.0965ZM17.992 16.3645C17.955 16.3025 17.856 16.2655 17.707 16.191C17.5585 16.1165 16.828 15.757 16.6915 15.7075C16.5555 15.658 16.4565 15.633 16.357 15.782C16.258 15.9305 15.973 16.2655 15.8865 16.3645C15.8 16.4635 15.713 16.476 15.5645 16.4015C15.416 16.327 14.937 16.1705 14.3695 15.664C13.928 15.27 13.6295 14.7835 13.543 14.6345C13.4565 14.486 13.534 14.4055 13.608 14.3315C13.675 14.265 13.7565 14.158 13.831 14.071C13.9065 13.985 13.931 13.923 13.981 13.8235C14.0305 13.7245 14.006 13.6375 13.9685 13.563C13.931 13.489 13.634 12.7575 13.5105 12.46C13.3895 12.1705 13.267 12.2095 13.176 12.205L12.891 12.2C12.792 12.2 12.631 12.237 12.495 12.386C12.359 12.535 11.975 12.894 11.975 13.6255C11.975 14.357 12.5075 15.0635 12.5815 15.1625C12.656 15.2615 13.629 16.7625 15.1195 17.406C15.474 17.559 15.751 17.6505 15.9665 17.719C16.3225 17.832 16.6465 17.816 16.9025 17.778C17.188 17.7355 17.7815 17.4185 17.9055 17.0715C18.0295 16.724 18.0295 16.4265 17.992 16.3645Z"
        fill="white"
      />
    </svg>
  );
};
