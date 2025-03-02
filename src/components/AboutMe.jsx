import React from "react";
import profile2 from "../assets/profile2.jpg";

function AboutMe() {
  return (
    <div className="min-h-screen bg-black px-20 py-2 flex items-center justify-center">
      <div className="grid grid-cols-2 ">
        <div className="relative z-10 w-100 h-120 overflow-hidden border-1 rounded-2xl border-purple-500 flex justify-center items-center bg-gray-900 hover:scale-120 duration-500 transition xl:ml-20">
          {/* Placeholder for image */}
          <img
            src={profile2}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <i className="fa-solid fa-chevron-right text-purple-500 mb-6 "></i>
          <p className="inline text-white ml-2 text-xl font-bold mb-3">
            About Me
          </p>
          <h1 className=" text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            Who Am I
          </h1>
          <p className="text-white xl:w-12/12 mt-5 ">
            Hi! My name is <strong>Ing Kea Meng</strong> , currently a junior
            student majoring in Software Development at American University of
            Phnom Penh. With a strong passion for Web Development, I am
            currently seeking an <strong>internship opportunity</strong> to
            apply my skills, gain hands-on experience, and contribute to
            real-world projects.
            <br />
            <br />I have experience in building responsive web applications,
            working with <strong>modern front-end</strong> and{" "}
            <strong>back-end technologies</strong>, and{" "}
            <strong>designing user-friendly interfaces</strong>. Beyond
            development, I actively participate in{" "}
            <strong>
              hackathons, innovation challenges, and tech communities
            </strong>
            , continuously expanding my knowledge in technology field.
          </p>
          <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 border-purple-400 border-2 rounded-full px-10 py-2 mt-5 hover:text-white transition duration-300">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
