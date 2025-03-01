import profile from "../assets/profile.jpeg";

function LandingPage() {
  return (
    <div className="relative h-screen bg-black flex overflow-hidden items-center px-20 justify-center">
      <div>
        {/* Purple glow effect */}
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl top-2"></div>
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-30 filter blur-2xl -translate-x-20 translate-y-10 top-2"></div>

        <div className="grid grid-cols-2 align-middle">
          {/* Left side */}
          <div className="xl:w-4xl">
            <h1 className="text-5xl font-bold mb-5 text-white">
              I am Kea Meng!
            </h1>
            <h1 className="text-8xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              A Web Developer
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              exercitationem sapiente ea voluptatum vitae, iste consectetur
              tempora reprehenderit necessitatibus eos eligendi dolor voluptate
              minima aspernatur cumque tenetur accusantium ipsa ab?
            </p>
            <div className="">
              <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 border-purple-400 border-2 rounded-full px-10 py-2 mt-5 hover:text-white transition duration-300">
                Contact Me
              </button>
              <div className="h-10 border-l-2 border-gray-500 inline ml-7"></div>
              <i className="fa-brands fa-github text-purple-500 ml-5 text-xl border-2 border-purple-400 rounded-full px-3 py-3 hover:text-white transition duration-300"></i>
              <i className="fa-brands fa-linkedin text-purple-500 ml-5 text-xl border-2 border-purple-400 rounded-full px-3 py-3 hover:text-white transition duration-300"></i>
              <i className="fa-brands fa-telegram text-purple-500 ml-5 text-xl border-2 border-purple-400 rounded-full px-3 py-3 hover:text-white transition duration-300"></i>
              <i className="fa-brands fa-instagram text-purple-500 ml-5 text-xl border-2 border-purple-400 rounded-full px-3 py-3 hover:text-white transition duration-300"></i>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-100 h-100 bg-purple-600 rounded-full opacity-20 filter blur-3xl"></div>
            <div className="absolute w-100 h-100 bg-purple-500 rounded-full opacity-30 filter blur-2xl"></div>
            {/* Circular image container */}
            <div className="relative z-10 w-80 h-100 overflow-hidden border-1 rounded-2xl border-purple-500 flex justify-center items-center bg-gray-900 rotate-5  transition-transform duration-500 hover:rotate-0 hover:scale-110">
              {/* Placeholder for image */}
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="text-purple-500 text-sm mb-2">Scroll Down</p>
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
