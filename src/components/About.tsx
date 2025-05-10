import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger content below
    },
  },
};

const titleVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contentVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  const { ref, inView } = useInView({
    
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      className="w-full py-48 px-6 bg-white dark:bg-gray-900 scroll-mt"
      ref={ref}
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            key="about-wrapper"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-6xl mx-auto"
          >
            {/* Title - animate first */}
            <motion.h2
              variants={titleVariant}
              className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-left"
            >
              About Me
            </motion.h2>

            {/* Content - animate after title */}
            <motion.div
              variants={contentVariant}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="flex-1 text-left">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  I'm <span className="font-semibold">Regem Y. Bacolcol</span>, a Computer Science student passionate about software development. I enjoy building practical, user-centered applications and have recently worked on projects involving RESTful API development, role-based access systems, and dynamic dashboards. I typically work with <span className="font-medium"> React + Vite </span> on the frontend and <span className="font-medium">  Node.js/Express with PostgreSQL </span> on the backend, handling both UI design and server-side logic.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  When I’m not coding, I enjoy listening to music, exploring UI/UX design inspirations, and engaging into tech communities. I’m always eager to learn, grow, and contribute to meaningful projects.
                </p>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="grid grid-cols-4 gap-4">
                  {["react", "typescript", "tailwindcss", "express-109"].map((tech) => (
                    <motion.img
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      src={`/${tech}.svg`}
                      alt={tech}
                      loading="lazy"
                      className="w-18 h-18"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
