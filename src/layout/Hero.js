import React from "react";
import TailwindCSSButton from "../components/TailwindCSSButton";
import heroImg from "../img/hero-1.png";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font pb-24" id="hero">
      <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-max md:w-8/12 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:w-max sm:text-6xl text-6xl mb-8 font-medium text-white">
            Hello, I'm
            <br className="hidden lg:inline-block" /> a Full Stack Developer,
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            {" "}
            proficient in React.js and Django. With React.js, I build dynamic
            and responsive user interfaces, while Django handles the backend
            with its simplicity and scalability. Leveraging RESTful APIs, I
            ensure seamless communication between the frontend and backend,
            enabling real-time data manipulation. My portfolio highlights my
            expertise in creating modern and visually appealing web
            applications, emphasizing user experience and showcasing my projects
            and achievements.
          </p>
          <div className="flex justify-center">
            <TailwindCSSButton>Creator Journey</TailwindCSSButton>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/4 w-5/6 hidden sm:inline-flex justify-center">
          <img
            className="object-cover object-center h-100 w-max"
            alt="hero"
            src={heroImg}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
