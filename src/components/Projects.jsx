import LookGreat from "../assets/LookGreat.png";
import WriteLetter from "../assets/WriteLetter.png";
import MemoryGame from "../assets/MemoryGame.png";

function ProjectWithImageLeft({ title, description, image, tech, link }) {
  return (
    <div className="flex gap-10 mt-20 items-center justify-center xl:px-10">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-full hover:scale-105 transition-transform duration-300"
      >
        <img src={image} alt="" className="w-full h-70 mr-5 rounded-xl" />
      </a>

      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <h1 className="text-white text-3xl font-bold mb-7 hover:text-purple-500">
            {title}
          </h1>
        </a>

        <p className="text-gray-400 mb-7">{description}</p>
        <div className="mt-5">
          <i className="fa-solid fa-code text-purple-500 mr-5"></i>
          {tech.map((item, index) => (
            <div
              key={index}
              className="inline px-4 py-1 bg-purple-900/30 border border-purple-500/20 rounded-full text-sm text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300 mr-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectWithImageRight({ title, description, image, tech, link }) {
  return (
    <div className="flex gap-10 mt-20 items-center justify-center xl:px-10">
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <h1 className="text-white text-3xl font-bold mb-7 hover:text-purple-500">
            {title}
          </h1>
        </a>
        <p className="text-gray-400 mb-7">{description}</p>
        <div className="mt-5">
          <i className="fa-solid fa-code text-purple-500 mr-5"></i>
          {tech.map((item, index) => (
            <div
              key={index}
              className="inline px-4 py-1 bg-purple-900/30 border border-purple-500/20 rounded-full text-sm text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300 mr-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <a
        href={link}
        className="w-full hover:scale-105 transition-transform duration-300"
      >
        <img src={image} alt="" className="w-full h-70 mr-5 rounded-xl" />
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-black px-20  py-5 flex    justify-center ">
      <div>
        <h1 className="text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Featured Project
        </h1>

        <div className="flex flex-col gap-7 mt-10">
          <ProjectWithImageLeft
            title="Look Great V2"
            description="An e-commerce website built as part of The Odin Project curriculum. This project is a modern, responsive, and fully functional e-commerce platform designed to showcase my brand, LookGreat. It includes features like product browsing, a shopping cart, checkout, and more.
"
            image={LookGreat}
            link="https://e-commerce-kea-meng.netlify.app/"
            tech={["React", "Tailwind", "API"]}
          />

          <ProjectWithImageRight
            title="Member Only"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro nemo error tempore accusamus eum minus cupiditate facilis. Repudiandae ipsam maxime reiciendis reprehenderit vero molestias fugiat suscipit aspernatur numquam possimus."
            image={WriteLetter}
            tech={["React", "React", "React"]}
          />

          <ProjectWithImageLeft
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
