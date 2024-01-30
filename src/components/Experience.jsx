import React from "react";
import HTML from "../assets/experience/html.png";
import CSS from "../assets/experience/css.png";
import JavaScript from "../assets/experience/javascript.png";
import GitHub from "../assets/experience/github.png";
import TailwindCss from "../assets/experience/tailwind.png";
import ReactPic from "../assets/experience/react.png";
import NodeJs from "../assets/experience/node.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: TailwindCss,
      title: "TailwindCss",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: ReactPic,
      title: "React",
      style: "shadow-sky-300",
    },
    {
      id: 7,
      src: NodeJs,
      title: "NodeJs",
      style: "shadow-green-600",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline p-2">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg " +
                "" +
                style
              }
            >
              <img className="w-20 mx-auto" src={src} alt="" srcset="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
