import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            👤
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Shivang Sharma
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            BTech CSE Student | AI & ML Specialization
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I am pursuing my B.Tech in Computer Science
            Engineering with a specialization in AI and ML and
            am currently in my 4th semester, actively learning
            how intelligent systems work.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://github.com/homiecoder17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivang-sharma17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:codershivang017@gmail.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}