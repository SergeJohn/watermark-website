import React from "react";
import { steps } from "../constants/steps";
import Cards from "./Cards";
const HowItWorks = () => {
  return (
    <div className="flex items-center justify-center bg-sky-800">
      <div className=" container text-white flex flex-col p-5 items-center justify-center">
        <h1 className="text-3xl font-bold mb-2">how it works</h1>
        <p className="text-sm font-Poppins">
          Adding watermarks to your images and PDFs with our platform is easy
          and straightforward. Follow these simple steps to get started:
        </p>

        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-3">
            {steps.map((item) => (
              <Cards key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
