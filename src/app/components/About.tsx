import { Code, Heart, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 mb-4">
              Hi! I'm Shivang Sharma, a 4th-semester B.Tech
              student in Computer Science Engineering with a
              specialization in Artificial Intelligence and
              Machine Learning. I’m interested in understanding
              how machines learn from data and solve complex and
              simple problems.
            </p>
            <p className="text-gray-700 mb-4">
              I’m currently learning Python programming and the
              basics of machine learning algorithms. Through
              coursework and small practice projects, I’m
              gaining initial exposure to data analysis and
              understanding how machine learning models work.
            </p>
            <p className="text-gray-700">
              I enjoy learning through hands-on practice,
              solving coding problems, and staying updated with
              developments in AI and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What I'm Learning
            </h3>
            <p className="text-gray-700 mb-4">
              Currently focusing on:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Code
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Core machine learning algorithms and their
                  real-world applications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Deep learning concepts, neural networks, and
                  computer vision
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Heart
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Data structures, algorithms, and software
                  development practices
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "C",
              "Java",
              "TensorFlow",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "SeaBorn",
              "Matplotlib",
              "Jupyter Notebook",
              "Neural Networks (basic concepts)",
              "HTML/CSS",
              "Machine Learning fundamentals",
              "Git (basic)",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}