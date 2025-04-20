import { useState } from "react";
import profile2 from "../assets/profile2.jpg";
import resume from "../assets/KeaMengResume.pdf";

function AboutMe() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "KeaMengResume.pdf");
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-2 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full items-center">
        <div className="relative z-10 w-full h-[300px] md:h-120 md:w-100 overflow-hidden border rounded-2xl border-purple-500 flex justify-center items-center bg-gray-900 hover:scale-105 duration-500 transition md:order-1 order-1 sm:ml-20">
          {/* Placeholder for image */}
          <img
            src={profile2 || "/placeholder.svg"}
            alt="Profile"
            className="w-full h-full object-cover"
            data-aos="zoom-in"
          />
        </div>
        <div
          className="flex flex-col justify-center md:order-2 order-2"
          data-aos="flip-left"
        >
          <div className="flex items-center mb-4">
            <i className="fa-solid fa-chevron-right text-purple-500"></i>
            <p className="inline text-white ml-2 text-lg md:text-xl font-bold">
              About Me
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-4">
            Who Am I
          </h1>
          <p className="text-white text-sm md:text-base mt-3 md:mt-5">
            Hi! My name is <strong>Ing Kea Meng</strong>, currently a junior
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
          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className={`relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 border-purple-400 border-2 rounded-full px-8 py-2 mt-5 self-start hover:text-white transition duration-300 ${
              isDownloading ? "opacity-80" : ""
            }`}
          >
            {isDownloading ? (
              <>
                <span className="inline-block animate-pulse">
                  Downloading...
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              </>
            ) : (
              "Download CV"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
