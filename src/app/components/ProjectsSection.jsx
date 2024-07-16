"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  //? ------------------------------------------------- REACT NEXT 
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Simobara/ReactCarouselGallery",
    previewUrl: "https://react-grid-carousel.vercel.app/",
  },
  {
    id: 3,
    title: "Italian Serie A",
    description: "Project 3 ",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Simobara/ITA_SerieA",
    previewUrl: "https://ita-serie-a.vercel.app/",
  },
  {
    id: 4,
    title: "React Sample Parallax",
    description: "Project 4",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Simobara/SampleParallax",
    previewUrl: "https://demo-parallax-scrolling.vercel.app/",
  },
  {
    id: 5,
    title: "Full-stack Roadmap",
    description: "Project 5 ",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kamranahmedse/developer-roadmap",
    previewUrl: "https://roadmap.sh/r/full-stack-web-development-with-mern-stack-1hfvo",
  },
  //? ------------------------------------------------- MOBILE
  {
    id: 6,
    title: "Food Ordering Application",
    description: "Project 6 ",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Simobara/F_CoffeeShop",
    previewUrl: "https://sb2410fcoffeeshop.netlify.app/",
  },
  {
    id: 7,
    title: "Bmi Calculator",
    description: "Project 7 ",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Simobara/F_BmiCalculator",
    previewUrl: "https://sb2410fbmicalculator.netlify.app/",
  },
  {
    id: 8,
    title: "To do List",
    description: "Project 8 ",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Simobara/F_TodoList",
    previewUrl: "https://sb2410ftodoapp.netlify.app/",
  },
  {
    id: 9,
    title: "Xylophone",
    description: "Project 9 ",
    image: "/images/projects/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Simobara/F_Xylophone",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="bg-black text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
