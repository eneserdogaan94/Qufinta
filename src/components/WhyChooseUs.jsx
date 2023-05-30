import React from "react";
import gif from "../assets/a.gif"

const WhyChooseUs = () => {
  const WhyChooseUs = [

  ];

  return (
    <div
      name="WhyChooseUs"
      className="bg-[#00bf62] w-full text-white w-full md:w-auto"
    >

      <div className="flex flex-col justify-center grid grid-cols-2 gap-4 max-w-screen-lg mx-auto h-auto">
      <div className="flex justify-center items-center">
            <img
              src={gif}
              alt="Logo"
              className=" flex justify-center items-center rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
          <div>
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Why Choose Us
          </p>
          <p className="py-6">
            <li>
              Qufinta!
              <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>Experienced and Professional Team </li>
                <li>Fully Online Applications</li>
                <li>English and Turkish Support </li>
                <li>24/7 Access</li>
                <li>Important Calendar Tracking for Each Company </li>
              </ul>
            </li>
          </p>
          </div>
        </div>
      </div>
  );
};

export default WhyChooseUs;
