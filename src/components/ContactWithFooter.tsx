// src/components/ContactWithFooter.tsx
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 },
  },
};

const ContactWithFooter = () => {
  return (
    <section
      id="contact"
      className="py-48 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center scroll-mt"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Let’s Connect
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
          Whether you have an idea, a question, or just want to say hi —
          I’m always open to connecting. Feel free to reach out through email or find me online.
        </p>

        {/* Icon Buttons with animation */}
        <div className="flex justify-center items-center gap-8 mb-10">

          {/* GitHub */}
          <motion.a
            href="https://github.com/Regem12"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-3xl"
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/regem-bacolcol-36018b364/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-3xl"
          >
            <FaLinkedin />
          </motion.a>
        
            {/* Facebook */}
          <motion.a
          href="https://www.facebook.com/regem.bacolcol/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          variants={iconVariants}
          whileHover="hover"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-3xl"
          >
          <FaFacebook />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=regem.bacolcol@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Send Email"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-3xl"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Footer Text */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Regem Bacolcol • Built with React, TypeScript & Tailwind CSS
        </div>
      </div>
    </section>
  );
};

export default ContactWithFooter;
