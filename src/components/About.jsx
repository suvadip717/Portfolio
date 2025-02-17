import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-16">
          I am Suvadip Das, a passionate Java Developer with a strong foundation
          in back-end technologies. I aim to leverage my technical expertise,
          problem-solving abilities, and passion for innovation to contribute
          meaningfully to any organization's success. With a Bachelor's degree
          in Computer Science Engineering from Chaibasa Engineering College and
          a Higher Secondary education from Saharda Kalipada Vidyapith, I
          possess a solid academic background complemented by practical
          experience in the software development field. My technical skill set
          includes proficiency in Java, Spring Boot, JPA Hibernate, MySQL, and
          various development tools like GitHub, AWS S3, and Cloudinary.
        </p>
        <br />
        <p className="text-xl mt-8">
          I have worked on several projects that showcase my ability to design
          and implement complex systems. Notable projects include a Hotel
          Management Application built using Spring Boot, React, and MySQL,
          which features user authentication, booking functionality, and data
          storage. Another project is a Medium Application Clone, a REST API
          based on Spring Boot and MongoDB that mimics the popular blogging
          platform. I have also developed a Quiz App API that allows users to
          create and manage quizzes, and a Product Management Dashboard for
          handling product-related CRUD operations, built using Java, Spring
          Boot, React, and MySQL.
        </p>
        <br />
        <p className="text-xl mt-8">
          Previously, I am employed as a Web Developer at WebShark Web Services
          Pvt Ltd, where I continue to hone my skills and contribute to various
          web development projects. I am always eager to explore new
          technologies, collaborate on innovative solutions, and take on
          challenging projects that push my development skills further. Feel
          free to connect with me through my email or LinkedIn for potential
          collaborations or opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
