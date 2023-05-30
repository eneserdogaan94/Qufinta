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

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="pb-8">
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
            <img
              src={gif}
              alt="Logo"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />

          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
