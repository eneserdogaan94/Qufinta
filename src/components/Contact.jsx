import React from "react";
import MapComponent from "../components/MapComponent"


const Contact = () => {

  return (
    <div
      name="contact"
      className="w-full md:w-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            <dl class="max-w-md text-white">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-white">Email address</dt>
                <dd class="text-lg font-semibold">qufinta@gmail.com</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1  text-white">Address</dt>
                <dd class="text-lg font-semibold">16 BROAD STREET, PARAMUS, 07652, New Jersey US</dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-white">Phone number</dt>
                <dd class="text-lg font-semibold">+1 201 925 2576</dd>
              </div>
            </dl>

          </p>
        </div>

        <div className=" flex justify-center items-center">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
