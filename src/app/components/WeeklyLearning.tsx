import { Calendar, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function WeeklyLearning() {
  // Update this section every week with your new learnings
  const currentWeek = {
    weekNumber: "Weekly Learning of January, 2026",
    learnings: [
      "A presentation is a way of explaining, telling, or presenting ideas to an audience",
      "Presentations are given to express thoughts, ideas, and information clearly.",
      "Students, teachers, employees, professionals, and even comedians give presentations.",
      "Every presentation should start with a hook to grab the audience’s attention.",
      "A hook can be a question, a quote, a joke, or a “thought of the day.”",
      "A presentation should end with a call to action.",
      "The content should be delivered in a way that satisfies audience expectations.",
      "Professional fonts like Times New Roman, Arial, and Calibri should be used.",
      "In a PPT:Heading font size should be 14 and body text size should be 12.",
      "Presentations should use bullet points, sentence case, color matching themes, avoid red color, and follow a logical sequence (logos, ethos, pathos).",
    ],
  };

  return (
    <section
      id="weekly-learning"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <TrendingUp className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Weekly Learning Journey
          </h2>
        </motion.div>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tracking my weekly progress and documenting new
          concepts learned in AI/ML and CSE
        </motion.p>

        {/* Current Week */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-blue-400"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="text-blue-600" size={24} />
            <h3 className="text-2xl font-semibold text-gray-900">
              {currentWeek.weekNumber}
            </h3>
            <span className="ml-auto px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              Current Week
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {currentWeek.learnings.map((learning, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {learning}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This section is updated
            weekly to track my learning progress during my BTech
            journey. It will be removed after graduation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}