import profile from "../publics/profile.jpeg";

function LandingPage() {
  return (
    <div className="relative h-screen bg-black flex overflow-hidden items-center">
      {/* Purple glow effect */}
      {/* <div className="absolute w-96 h-96 bg-purple-600 rounded-full opacity-20 filter blur-3xl"></div> */}

      {/* Additional smaller glow for extra effect */}
      {/* <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-30 filter blur-2xl -translate-x-20 translate-y-10"></div> */}

      {/* Name Header */}
      <div className="grid grid-cols-2 align-middle">
        {/* Left side */}
        <div className="ml-20">
          <h1 className="text-5xl font-bold mb-5">I am Kea Meng!</h1>
          <h1 className="text-8xl font-bold mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              A Web Developer
            </span>
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            exercitationem sapiente ea voluptatum vitae, iste consectetur
            tempora reprehenderit necessitatibus eos eligendi dolor voluptate
            minima aspernatur cumque tenetur accusantium ipsa ab?
          </p>
          <div className="">
            <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500 border-purple-400 border-2 rounded-full px-10 py-2 mt-5">
              Download CV
            </button>
            <div class="h-10 border-l-2 border-gray-500 inline ml-7"></div>
            <i class="fa-brands fa-github"></i>
            // TODOL add github link
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-100 h-100 bg-purple-600 rounded-full opacity-20 filter blur-3xl"></div>
          <div className="absolute w-100 h-100 bg-purple-500 rounded-full opacity-30 filter blur-2xl"></div>
          {/* Circular image container */}
          <div className="relative z-10 w-80 h-100 overflow-hidden border-1 rounded-2xl border-purple-500 flex justify-center items-center bg-gray-900 rotate-5">
            {/* Placeholder for image */}
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
