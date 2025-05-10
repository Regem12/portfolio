import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const subText = {
    hidden: { opacity: 0, letterSpacing: "0.1em" },
    visible: {
      opacity: 1,
      letterSpacing: "normal",
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const buttonAnim = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 1.2,
      },
    },
  };

const Hero = () => {
  return (
    <section id = "hero" className="scroll-mt-28 relative w-full min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-6 py-16 overflow-hidden">
      {/* Background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-blue-200 dark:bg-blue-500 rounded-full blur-3xl opacity-70 z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-200 dark:bg-purple-500 rounded-full blur-3xl opacity-70 z-0"
      />

      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="group w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700 shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/src/assets/IMG_7857.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.h1
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Regem Y. Bacolcol
            </span>
          </motion.h1>

          <motion.p
            variants={subText}
            initial="hidden"
            animate="visible"
            className="mt-4 text-lg text-gray-700 dark:text-gray-300"
          >
           Still learning — just a student building my way up
          </motion.p>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-5 text-xl text-neutral-700 dark:text-neutral-300">
            <a
              href="https://github.com/Regem12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/regem-bacolcol-36018b364/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/regem.bacolcol/"
              className="hover:text-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=regem.bacolcol@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              title="Send Email"
            >
            <FaEnvelope />
            </a>
          </div>

          {/* Resume Button */}
          <motion.div
            variants={buttonAnim}
            initial="hidden"
            animate="visible"
            className="mt-6"
          >
            <a
              href="resume4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              View Resume
            </a>
          </motion.div>
          </div>
      </div>
    </section>
    );
};

export default Hero;
