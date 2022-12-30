import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center md:mt-24 mt-12">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="container md:text-6xl text-3xl font-light text-center">
          Effortlessly add watermarks to your
          <span className="ml-4 font-extrabold text-blue-600">
            Images and PDF's
          </span>{" "}
          with our simple and secure platform.
        </h1>
        <p className="text-sm md:text-md text-start indent-10 my-5 px-10 font-Poppins text-slate-500 italic ">
          " Welcome to our website! We offer a simple and efficient way to add
          watermarks to your images and PDFs. Our easy-to-use platform allows
          you to protect your content and prevent unauthorized use. With a few
          clicks, you can add a personalized watermark to your images and PDFs
          and keep them safe from unauthorized use."
        </p>
        <button className="rounded-full px-8 py-2  bg-sky-800 hover:bg-sky-600 text-white ">
          Get Started For free now
        </button>
      </div>
    </div>
  );
};

export default Hero;
