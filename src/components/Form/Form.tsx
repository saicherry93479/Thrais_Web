import { useState } from "react";

const Form = () => {
  const [userType, setUserType] = useState("College");
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // handle form submission logic
    console.log({
      userType,
      fullName,
      collegeName,
      phoneNumber,
      email,
      termsAccepted,
    });
  };

  return (
    <div className="min-h-[80vh] px-0 flex justify-center sm:py-12">
      <div className="relative py-3 w-screen sm:w-[100%] md:w-[600px] lg:w-[50%] xl:w-[40%] 2xl:w-[35%]">
        <form
          onSubmit={handleSubmit}
          className="relative px-4 md:px-8 py-10 bg-white mx-4 md:mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
        >
          <div className="text-base leading-6 space-y-4 text-gray-700 md:text-lg sm:leading-7">
            <div className="flex items-center space-x-5 mb-8">
              <div className="h-14 w-14 bg-[#00A3EA] rounded-full flex flex-shrink-0 justify-center items-center font-mono text-white text-2xl">
                i
              </div>
              <div className="block pl-2 font-semibold text-xl text-gray-700">
                <h2 className="leading-relaxed">Register</h2>
              </div>
            </div>
            <div className="flex flex-col group font-outfit">
              <label
                htmlFor="userType"
                className="mb-2 text-sm transition-colors group-focus-within:text-blue-700"
              >
                Select who are you?
              </label>
              <select
                id="userType"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="College">College</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="flex flex-col group font-outfit">
              <label
                htmlFor="fullName"
                className="mb-2 text-sm transition-colors group-focus-within:text-blue-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                name="name"
                placeholder="Sai Charan"
                required
                maxLength={25}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col group font-outfit">
              <label
                htmlFor="collegeName"
                className="mb-2 text-sm transition-colors group-focus-within:text-blue-700"
              >
                College Name
              </label>
              <input
                id="collegeName"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                name="collegeName"
                placeholder="Google"
                required
                maxLength={25}
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
            <div className="flex flex-col group font-outfit">
              <label
                htmlFor="phoneNumber"
                className="mb-2 text-sm transition-colors group-focus-within:text-blue-700"
              >
                Mobile
              </label>
              <input
                id="phoneNumber"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                name="phoneNumber"
                placeholder="9878787123"
                type="tel"
                required
                maxLength={10}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col group font-outfit">
              <label
                htmlFor="email"
                className="mb-2 text-sm transition-colors group-focus-within:text-blue-700"
              >
                Your college Email
              </label>
              <input
                id="email"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                name="email"
                placeholder="20311A05M7@sreenidhi.edu.in"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              </div>
              <label
                htmlFor="termsAccepted"
                className="ms-2 text-sm font-medium text-black"
              >
                Agree to{" "}
                <a href="/terms" className="text-blue-600 underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="block cursor-pointer mx-auto text-white btn font-outfit w-[100%] p-3 px-6 rounded-md bg-[#00A3EA]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
