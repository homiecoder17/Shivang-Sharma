import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  const education = [
    {
      degree:
        "Bachelor of Technology in Computer Science Engineering",
      institution: "Graphic Era Hill University",
      location: "Dehradun, Uttrakhand/India",
      period: "2024 - 2028",
      description:
        "Specialization in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Database Management Systems, Web Technologies.",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Vision Valley School",
      location: "Kashipur, Uttrakhand/India",
      period: "2023 - 2024",
      description:
        "PCM (Physics, Chemistry, Mathematics) with Computer Science.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap
                    className="text-blue-600"
                    size={32}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-xl text-gray-700 mb-3">
                    {edu.institution}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div>
      
                    </div>
                  </div>

                  <p className="text-gray-700">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}