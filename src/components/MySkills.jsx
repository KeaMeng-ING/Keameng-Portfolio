function SkillCard({ icon }) {
  return (
    <div className="bg-[#1a1e31] rounded-lg p-4 sm:p-6 md:p-8 flex justify-center items-center hover:shadow-lg hover:shadow-purple-500 transition-all duration-300">
      <i
        className={`${icon} text-purple-500 text-5xl sm:text-7xl md:text-8xl lg:text-9xl`}
      ></i>
    </div>
  );
}

function AdditionalSkillCard({ icon }) {
  return (
    <div className="flex justify-center items-center hover:scale-110 transition-transform duration-300">
      <i
        className={`${icon} text-purple-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
      ></i>
    </div>
  );
}

function MySkills() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-5 flex justify-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          My Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <SkillCard icon="fa-brands fa-html5" />
          <SkillCard icon="fa-brands fa-css3-alt" />
          <SkillCard icon="fa-brands fa-js" />
          <SkillCard icon="fa-brands fa-node" />

          {/* Experience Card */}
          <div className="bg-[#1a1e31] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1 lg:row-span-2 order-last lg:order-none">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-purple-500 mb-1 sm:mb-2">
              1
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-500 text-center mb-0 sm:mb-1">
              Years
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-500 text-center mb-0 sm:mb-1">
              Experience
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-500 text-center mb-4 sm:mb-6 md:mb-8">
              in Web Development
            </p>
          </div>

          <SkillCard icon="fa-brands fa-react" />
          <SkillCard icon="devicon-tailwindcss-original" />
          <SkillCard icon="fa-brands fa-python" />
          <SkillCard icon="devicon-django-plain-wordmark" />
        </div>

        <div className="bg-[#1a1e31] rounded-lg p-5 sm:p-8 md:p-10 mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-5 sm:mb-8 md:mb-10">
            Additional Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <AdditionalSkillCard icon="fa-brands fa-figma" />
            <AdditionalSkillCard icon="devicon-postgresql-plain" />
            <AdditionalSkillCard icon="devicon-azuresqldatabase-plain" />
            <AdditionalSkillCard icon="fa-brands fa-github" />
            <AdditionalSkillCard icon="fa-brands fa-java" />
            <AdditionalSkillCard icon="devicon-photoshop-plain" />
            <AdditionalSkillCard icon="devicon-illustrator-plain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
