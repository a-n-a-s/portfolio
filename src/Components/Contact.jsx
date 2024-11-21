import { BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaKaggle, FaLinkedin } from "react-icons/fa6";
export const Contact = () => {
  return (
    <>
      <LargeContact />
      <MobileContact />
    </>
  );
};

const LargeContact = () => {
  return (
    <div className="hidden lg:inline container">
      <div className="w-3/5 container flex flex-col  py-20 items-start   border-b-2 bg-gra-100 mx-auto">
        <div className="text-primary font-semibold text-3xl my-16 text-center ">
          Contact Me
        </div>
        <div className="w-full flex items-start gap-4 ">
          <div className="bg-gray-200 text-primary font-semibold px-4 py-4 rounded cursor-pointer hover:text-gray-700 flex items-center justify-center gap-2 w-1/3 ">
            <BsGithub />
            Github
          </div>
          <div className="bg-gray-200 text-primary font-semibold px-4 py-4 rounded cursor-pointer hover:text-gray-700 flex items-center justify-center gap-2 w-1/3">
            <IoIosMail />
            Mail
          </div>
          <div className="bg-gray-200 text-primary font-semibold px-4 py-4 rounded cursor-pointer hover:text-gray-700 flex items-center justify-center gap-2 w-1/3">
            <FaLinkedin />
            LinkedIn
          </div>
          <div className="bg-gray-200 text-primary font-semibold px-4 py-4 rounded cursor-pointer hover:text-gray-700 flex items-center justify-center gap-2 w-1/3">
            <FaKaggle />
            Kaggle
          </div>
        </div>
      </div>
    </div>
  );
};
const MobileContact = () => {
  return (
    <div className="lg:hidden container">
      <div className="w-4/5 container flex flex-col items-center py-20    border-b-2 bg-gra-100 mx-auto">
        <div className="text-primary font-semibold text-3xl my-10 ">
          Contact Me
        </div>
        <div className="w-4/5 mx-auto flex  items-center justify-between">
          <div className="text-4xl">
            <BsGithub />
          </div>
          <div className="text-4xl">
            <IoIosMail />
          </div>
          <div className="text-4xl">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
const Button = () => {
  return (
    <>
      <button className="bg-gray-200 text-primary font-semibold px-4 py-4 rounded cursor-pointer hover:text-gray-200 ">
        NodeJS
      </button>
    </>
  );
};
