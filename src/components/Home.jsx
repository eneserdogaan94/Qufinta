import React from "react";
import Logo from "../assets/logo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#00bf62]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Online Business Owners

          </h2>
          <p className="text-white py-4 max-w-md">
            You focus on growing your business,
            We establish your company, keep your financials and advise whenever.
          </p>

          <div  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-to-r from-yellow-500 to-lime-500 cursor-pointer">
            <Link
              to="WhyChooseUs"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-to-r from-yellow-500 to-lime-500 cursor-pointer"
            >
              Why choose us?
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Logo}
            alt="Logo"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
