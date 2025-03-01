import React from "react";
import profile2 from "../assets/profile2.jpg";

function AboutMe() {
  return (
    <div className="min-h-screen bg-black px-20 py-2 flex items-center justify-center">
      <div className="grid grid-cols-2 ">
        <div className="relative z-10 w-100 h-120 overflow-hidden border-1 rounded-2xl border-purple-500 flex justify-center items-center bg-gray-900 hover:scale-120 duration-500">
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
          <p className="text-white xl:w-4xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            maiores dolorem nobis nisi molestiae. Ratione, quia rerum quaerat,
            blanditiis ipsum qui mollitia repellat dolorum beatae numquam nemo
            rem est placeat! Odit blanditiis ad deleniti. Ullam quibusdam eaque
            possimus amet, commodi a dolore, tempore repellendus veniam rerum
            quidem at consequatur pariatur dolor aliquid neque odit animi ad
            itaque! Tenetur, voluptate suscipit. Magni voluptatem illum enim
            beatae, quos voluptates, vero nemo, impedit quidem iste nobis unde
            vel corporis quo hic nisi blanditiis tempora nulla perspiciatis
            reiciendis quaerat officiis repellendus saepe illo? Corrupti.
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
