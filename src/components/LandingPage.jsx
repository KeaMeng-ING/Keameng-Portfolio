import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/profile.jpeg";

function ContactIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <i
        className={`fa-brands fa-${icon} text-purple-500 text-lg sm:text-xl border-2 border-purple-400 rounded-full p-2 sm:px-3 sm:py-3 hover:text-white transition duration-300`}
      ></i>
    </a>
  );
}

function LandingPage() {
  const [text] = useTypewriter({
    words: [
      "A Web Developer",
      "A Software Developer",
      "A UI/UX Designer",
      "A Graphic Designer",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="relative min-h-screen bg-black flex overflow-x-hidden items-center px-4 sm:px-8 md:px-12 lg:px-20 justify-center">
      <div>
        {/* Purple glow effect */}
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl top-2"></div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500 rounded-full opacity-30 filter blur-2xl -translate-x-10 sm:-translate-x-20 translate-y-10 top-2"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
          {/* Left side */}
          <div
            className="text-center md:text-left xl:w-4xl"
            data-aos="zoom-in-up"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-5 text-white">
              I am Kea Meng!
            </h1>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 h-16 sm:h-20 md:h-24">
              {text}
              <Cursor cursorColor="purple" />
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl xl:w-9/12">
              Aspiring web developer and Junior student at the American
              University of Phnom Penh, passionate about building impactful
              digital experiences.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start">
              <a href="#contact">
                <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 border-purple-400 border-2 rounded-full px-8 sm:px-10 py-2 hover:text-white transition duration-300">
                  Contact Me
                </button>
              </a>

              <div className="hidden sm:block h-10 border-l-2 border-gray-500 mx-4"></div>

              <div className="flex mt-4 sm:mt-0 gap-3">
                <ContactIcon
                  icon="github"
                  link="https://github.com/KeaMeng-ING"
                />
                <ContactIcon
                  icon="linkedin"
                  link="https://www.linkedin.com/in/kea-meng-ing/"
                />
                <ContactIcon icon="telegram" link="https://t.me/keameng9" />
                <a
                  href="mailto:keameng9@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope text-purple-500 text-lg sm:text-xl border-2 border-purple-400 rounded-full p-2 sm:px-3 sm:py-3  hover:text-white transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative flex justify-center items-center mt-8 md:mt-0">
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-100 md:h-100 bg-purple-600 rounded-full opacity-20 filter blur-3xl"></div>
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-100 md:h-100 bg-purple-500 rounded-full opacity-30 filter blur-2xl"></div>
            {/* Circular image container */}
            <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-100 overflow-hidden border-1 rounded-2xl border-purple-500 flex justify-center items-center bg-gray-900 rotate-5 transition-transform duration-500 hover:rotate-0 hover:scale-110">
              {/* Placeholder for image */}
              <img
                src={profile || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
                data-aos="zoom-in"
              />
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:flex flex-col items-center">
            <p className="text-purple-500 text-sm mb-2">Scroll Down</p>
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
