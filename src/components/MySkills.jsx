function SkillCard({ icon }) {
  return (
    <div className="bg-[#1a1e31] rounded-lg p-8 flex justify-center items-center hover:shadow-lg hover:shadow-purple-500 transition-all duration-300">
      <i className={`${icon} text-purple-500 text-9xl`}></i>
    </div>
  );
}

function AdditionalSkillCard({ icon }) {
  return (
    <div className="flex justify-center items-center hover:scale-110 transition-transform duration-300">
      <i className={`${icon} text-purple-500 text-7xl`}></i>
    </div>
  );
}

function MySkills() {
  return (
    <div className="min-h-screen bg-black px-20 py-5 flex justify-center xl:mt-20">
      <div>
        <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-20">
          <SkillCard icon="fa-brands fa-html5" />
          <SkillCard icon="fa-brands fa-css3-alt" />
          <SkillCard icon="fa-brands fa-js" />
          <SkillCard icon="fa-brands fa-node" />

          {/* Experience Card */}
          <div className="bg-[#1a1e31] rounded-lg p-8 flex flex-col justify-center items-center row-span-2">
            <h3 className="text-8xl font-bold text-purple-500 mb-2">1</h3>
            <p className="text-2xl text-purple-500 text-center mb-1">Years</p>
            <p className="text-2xl text-purple-500 text-center mb-1">
              Experience
            </p>
            <p className="text-2xl text-purple-500 text-center mb-8">
              in Web Development
            </p>
          </div>

          <SkillCard icon="fa-brands fa-react" />
          <SkillCard icon="devicon-tailwindcss-original" />
          <SkillCard icon="fa-brands fa-python" />
          <SkillCard icon="devicon-django-plain-wordmark" />
        </div>

        <div className="bg-[#1a1e31] rounded-lg p-10 mt-16">
          <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-10">
            Additional Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
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
