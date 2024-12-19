import React from "react";
import HotelMange from "../assets/portfolio/HotelManagement.png";
import Medium from "../assets/portfolio/Medium.png";
import ProductManage from "../assets/portfolio/ProductManage.png";
import Quizapp from "../assets/portfolio/quizapp.png";
import NodeJS from "../assets/portfolio/node.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: HotelMange,
      demo: "https://hotel-manege.site",
      code: "https://github.com/suvadip717/Hotel-Management",
    },
    {
      id: 2,
      src: Medium,
      demo: "http://ec2-43-204-221-130.ap-south-1.compute.amazonaws.com:8080/public/all-blogs",
      code: "https://github.com/suvadip717/Medium-Application",
    },
    {
      id: 3,
      src: ProductManage,
      demo: "https://github.com/suvadip717/Product-Management/blob/main/README.md",
      code: "https://github.com/suvadip717/Product-Management",
    },
    {
      id: 4,
      src: Quizapp,
      demo: "",
      code: "https://github.com/suvadip717/Quiz-App",
    },
    {
      id: 5,
      src: NodeJS,
      demo: "",
      code: "https://github.com/suvadip717/Backend_start",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={demo}
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={code}
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
