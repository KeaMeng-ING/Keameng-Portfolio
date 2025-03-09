function CardExperience({ date, title, company }) {
  return (
    <div
      className="bg-[#1a1e31] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 mb-4 sm:mb-6 md:mb-8 lg:mb-10"
      data-aos="fade-left"
    >
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
        {date}
      </p>
      <h1 className="text-lg sm:text-xl  xl:text-3xl text-white font-bold mt-1 sm:mt-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-1 sm:mt-2">
        {company}
      </p>
    </div>
  );
}

function TitleExperience({ title, icon }) {
  return (
    <div className="flex items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      <i
        className={`fa-solid fa-${icon} text-purple-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
      ></i>
      <h1 className="ml-3 sm:ml-4 md:ml-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
        {title}
      </h1>
    </div>
  );
}

function ExperienceAndEducation() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-5 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20">
          <div className="p-4 sm:p-6 md:p-8">
            <TitleExperience title="My Experiences" icon="briefcase" />
            <div className="experience-card mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-20 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <CardExperience
                date="Jan 2025 - Present"
                title="#Mbassador Programme"
                company="Maybank"
              />
              <CardExperience
                date="Nov 2024 - Present"
                title="Student Employee"
                company="American University of Phnom Penh"
              />
              <CardExperience
                date="Sep 2024 - Present"
                title="Public Affair Committee"
                company="Student Government Association"
              />
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <TitleExperience title="My Education" icon="building" />
            <div className="experience-card mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-20 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <CardExperience
                date="Jan 2023 - Present"
                title="Software Development"
                company="American University of Phnom Penh"
              />
              <CardExperience
                date="June 2024 - Present"
                title="Full Stack Javascript"
                company="The Odin Project"
              />
              <CardExperience
                date="Dec 2024 - Feb 2025"
                title="Web Design"
                company="CSTAD"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
