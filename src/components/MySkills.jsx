function SkillCard({ link }) {
  return (
    <div className="bg-[#1a1e31] rounded-lg p-4 sm:p-6 md:p-8 flex justify-center items-center hover:shadow-lg hover:shadow-purple-500 transition-all duration-300">
      <img src={link} className="w-15 md:w-35" />
    </div>
  );
}

function AdditionalSkillCard({ link }) {
  return (
    <div className="flex justify-center items-center hover:scale-110 transition-transform duration-300">
      <img src={link} className="w-12 md:w-25" />
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

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20"
          data-aos="zoom-in-down"
        >
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />

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

          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <SkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        </div>

        <div
          className="bg-[#1a1e31] rounded-lg p-5 sm:p-8 md:p-10 mt-8 sm:mt-12 md:mt-16"
          data-aos="zoom-in-down"
        >
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-5 sm:mb-8 md:mb-10">
            Additional Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
            <AdditionalSkillCard link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
