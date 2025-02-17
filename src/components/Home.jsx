import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/heroImage.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Java Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a passionate Java Developer, I aim to leverage my technical
            expertise, problem-solving skills, and drive for innovation to
            contribute meaningfully to the success of any organization. My
            experience spans across various front-end and back-end technologies,
            and I thrive on tackling challenges and creating seamless user
            experiences.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={HeroImage}
            alt="https://avatars.githubusercontent.com/u/73045961?v=4"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
