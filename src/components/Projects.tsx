// src/components/Projects.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useActiveSection from "../hooks/useActiveSection";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger content below
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Smart Parking System",
    image: "/pic2.jpg",
    description:
      "An IoT-based smart parking solution using ESP32, Ultrasonic Sensors, IR Sensors, Servo and Firebase to track total slots, occupied slots and parking slot availability in real-time.",
    techStack: ["Firebase", "React + Vite", "Typescript", "Tailwind CSS"],
    github: "https://github.com/regem/smart-parking",
    demo: "https://smart-parking-web-two.vercel.app/",
  },
  {
    title: "Circuit Cube",
    image: "/pic1.jpg",
    description:
      "It is an educational web application that uses a virtual environment to help students learn about digital logic circuit design. It lets users simulate logic gates and create truth tables. With features such as 3D circuit visualization, professor-posted problems, and automated grading, the simulator improves the learning experience by making circuit design interactive and accessible, bridging the gap between theory and practice in digital systems education.",
    techStack: ["React + Vite", "Typescript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/regem/student-dashboard",
    demo: "https://circuitcube.netlify.app/",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const activeSection = useActiveSection(["hero", "about", "projects", "contact"]);

  // Optional: scroll syncing debug
  useEffect(() => {
    if (inView && activeSection !== "projects") {
      document.dispatchEvent(new CustomEvent("sectionChange", { detail: "projects" }));
    }
  }, [inView, activeSection]);

  return (
    <motion.section
  id="projects"
  ref={ref}
  className="py-48 px-6 bg-gray-50 dark:bg-gray-900 scroll-mt"
  variants={containerVariant}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-left max-w-6xl mx-auto"
      >
        Recent Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
