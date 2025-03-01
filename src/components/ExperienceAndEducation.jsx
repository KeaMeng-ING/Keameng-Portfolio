function ExperienceAndEducation() {
  return (
    <div className="min-h-screen bg-black px-20 py-5 flex    justify-center lg:mt-20">
      <div className="grid grid-cols-2 xl:gap-20">
        <div className="p-8">
          <div className="experience">
            <i class="fa-solid fa-briefcase text-purple-500 xl:text-6xl lg:text-4xl"></i>
            <h1 className="inline ml-5 xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 lg:text-4xl">
              My Experiences
            </h1>
          </div>
          <div className="experience-card mt-10 flex flex-col gap-5 xl:gap-10 xl:mt-20">
            <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 xl:mb-15">
              <p className="xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 lg:text-xl    ">
                Jan 2025 - Present
              </p>
              <h1 className="xl:text-5xl text-white font-bold  mt-2 lg:text-2xl">
                #Mbassador Programme
              </h1>
              <p className="text-white mt-2 xl:text-2xl ">Maybank</p>
            </div>

            <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 xl:mb-15">
              <p className="xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600   lg:text-xl ">
                Nov 2024 - Present
              </p>
              <h1 className="xl:text-5xl text-white font-bold  mt-2 lg:text-2xl">
                Student Employee
              </h1>
              <p className="text-white mt-2 xl:text-2xl">
                American University of Phnom Penh
              </p>
            </div>

            <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 ">
              <p className="xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600  lg:text-xl  ">
                Sep 2024 - Present
              </p>
              <h1 className="xl:text-5xl text-white font-bold  mt-2 lg:text-2xl">
                Public Affair Commitee
              </h1>
              <p className="text-white mt-2 xl:text-2xl">
                Student Government Association
              </p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="experience">
            <i class="fa-solid fa-building text-purple-500 xl:text-6xl lg:text-4xl"></i>
            <h1 className="inline ml-5 xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 lg:text-4xl">
              My Education
            </h1>
          </div>
          <div className="experience-card mt-10 flex flex-col gap-5 xl:gap-10 xl:mt-20">
            <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 xl:mb-15">
              <p className="xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 lg:text-xl    ">
                Jan 2023 - Present
              </p>
              <h1 className="xl:text-5xl text-white font-bold  mt-2 lg:text-2xl">
                Software Development
              </h1>
              <p className="text-white mt-2 xl:text-2xl">
                American University of Phnom Penh
              </p>
            </div>

            <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 xl:mb-15">
              <p className="xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600  lg:text-xl  ">
                June 2024 - Present
              </p>
              <h1 className="xl:text-5xl text-white font-bold  mt-2 lg:text-2xl">
                Full Stack Javascript
              </h1>
              <p className="text-white mt-2 xl:text-2xl">The Odin Project</p>
            </div>

            <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 xl:mb-15">
              <p className="xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600   lg:text-xl ">
                Dec 2024 - Feb 2025
              </p>
              <h1 className="xl:text-5xl text-white font-bold  mt-2 lg:text-2xl">
                Web Design
              </h1>
              <p className="text-white mt-2 xl:text-2xl">CSTAD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
