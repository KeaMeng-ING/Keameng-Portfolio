import LookGreat from "../assets/LookGreat.png";
import WriteLetter from "../assets/WriteLetter.png";
import MemoryGame from "../assets/MemoryGame.png";

function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
  imageOnLeft = true,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10 lg:mt-20 items-center justify-center">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`w-full lg:w-1/2 hover:scale-105 transition-transform duration-300 ${
          !imageOnLeft && "lg:order-last"
        }`}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-auto rounded-xl"
        />
      </a>

      <div className="w-full lg:w-1/2">
        <a href={link} target="_blank" rel="noreferrer">
          <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4 hover:text-purple-500 transition-colors duration-300">
            {title}
          </h2>
        </a>

        <p className="text-gray-400 mb-4 text-sm lg:text-base">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <i className="fa-solid fa-code text-purple-500 mr-3 inline-block"></i>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <div
                key={index}
                className="inline-block px-3 py-1 bg-purple-900/30 border border-purple-500/20 rounded-full text-xs lg:text-sm text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-10 lg:mb-16">
          Featured Projects
        </h1>

        <div className="flex flex-col gap-10 lg:gap-20">
          <ProjectCard
            title="Look Great V2"
            description="An e-commerce website built as part of The Odin Project curriculum. This project is a modern, responsive, and fully functional e-commerce platform designed to showcase my brand, LookGreat. It includes features like product browsing, a shopping cart, checkout, and more."
            image={LookGreat}
            link="https://e-commerce-kea-meng.netlify.app/"
            tech={["React", "Tailwind", "API"]}
          />

          <ProjectCard
            title="Member Only"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro nemo error tempore accusamus eum minus cupiditate facilis. Repudiandae ipsam maxime reiciendis reprehenderit vero molestias fugiat suscipit aspernatur numquam possimus."
            image={WriteLetter}
            tech={["React", "React", "React"]}
            imageOnLeft={false}
          />

          <ProjectCard
            title="Memory Game"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro nemo error tempore accusamus eum minus cupiditate facilis. Repudiandae ipsam maxime reiciendis reprehenderit vero molestias fugiat suscipit aspernatur numquam possimus."
            image={MemoryGame}
            link="#"
            tech={["React", "React", "React"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
