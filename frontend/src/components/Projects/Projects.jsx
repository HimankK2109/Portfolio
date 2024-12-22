import React from "react";
import Project1 from "../../assets/1.png";
import Project2 from "../../assets/2.png";
import Project3 from "../../assets/3.png";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "Food Ordering Website",
    link: "https://quickbite-neon.vercel.app/",
    github: "https://github.com/HimankK2109/QuickBite",
    desc: "Order delicious meals from local restaurants and get them delivered quickly, securely, and hassle-free",
    img: Project1,
    delay: 0.4,
  },
  {
    id: 2,
    title: "Electronics Buying Guide",
    link: "https://techista.vercel.app/",
    github: "https://github.com/HimankK2109/Techista",
    desc: "Explore detailed specifications and compare them to help you choose the best electronics for your needs",
    img: Project2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Random Password Generator",
    link: "https://password-generator-two-rose.vercel.app/",
    github: "https://github.com/HimankK2109/Password-Generator",
    desc: "Generate strong, secure, and random passwords for enhanced online safety with just a click",
    img: Project3,
    delay: 1.2,
  },
];

function Projects() {
  return (
    <div className="mx-12 lg:mx-28 text-white mb-28 min-h-[40vh] md:min-h-[60vh] lg:max-h-[100vh]">
      <div className="py-20 xl:py-36 space-y-36">
        {/* Heading Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="relative"
        >
          <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase relative z-20">
            Projects
          </p>
          <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
            Projects
          </p>
        </motion.div>

        {/* Projects Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ProjectsData.map((project) => {
            return (
              <div key={project.id} className="bg-black border-2 hover:shadow-[0_0_50px_#f50b0a] border-[#f50b0a]/80 p-4 rounded-xl hover:scale-110 duration-500 group space-y-5">
                <img src={project.img} alt={project.title} className="w-full" />
                <div className="space-y-2 p-4">
                  <h1 className="font-bold">{project.title}</h1>
                  <p className="text-sm line-clamp-2">{project.desc}</p>
                </div>
                {/* hidden button section */}
                <div className="hidden group-hover:flex justify-around items-center duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="border-2 border-white px-4 py-2 rounded-lg">
                      Live
                    </button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 px-4 rounded hover:shadow-[0_0_20px_#f50b0a] duration-300">
                      View Code
                  </button>
                  </a>            
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="contact"></div>
    </div>
  );
}

export default Projects;