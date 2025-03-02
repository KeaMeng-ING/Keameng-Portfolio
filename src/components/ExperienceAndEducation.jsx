function CardExperience({ date, title, company }) {
  return (
    <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col hover:shadow-lg hover:shadow-purple-500 transition-all duration-300 xl:mb-10">
      <p className="xl:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 lg:text-xl    ">
        {date}
      </p>
      <h1 className="xl:text-4xl text-white font-bold  mt-2 lg:text-2xl">
        {title}
      </h1>
      <p className="text-white mt-2 xl:text-xl">{company}</p>
    </div>
  );
}

function TitleExperience({ title, icon }) {
  return (
    <div>
      <i
        className={`fa-solid fa-${icon} text-purple-500 xl:text-5xl lg:text-4xl`}
      ></i>
      <h1 className="inline ml-5 xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 lg:text-4xl">
        {title}
      </h1>
    </div>
  );
}

function ExperienceAndEducation() {
  return (
    <div className="min-h-screen bg-black px-20 py-5 flex    justify-center lg:mt-20">
      <div className="grid grid-cols-2 xl:gap-20">
        <div className="p-8">
          <TitleExperience title="My Experiences" icon="briefcase" />
          <div className="experience-card mt-10 flex flex-col gap-5 xl:gap-10 xl:mt-20">
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
              title="Public Affair Commitee"
              company="Student Government Association"
            />
          </div>
        </div>
        <div className="p-8">
          <TitleExperience title="My Education" icon="building" />
          <div className="experience-card mt-10 flex flex-col gap-5 xl:gap-10 xl:mt-20">
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
  );
}

export default ExperienceAndEducation;
