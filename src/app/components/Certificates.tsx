import { Award, ExternalLink, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Certificates() {
  const [previewLink, setPreviewLink] = useState<string | null>(null);

  const certificates = [
    {
      title: "DSA: Programming in C",
      issuer: "NPTEL",
      date: "January 2026",
      description:
        "Comprehensive course covering data structures and algorithms using C programming language, including arrays, linked lists, stacks, queues, trees, and graphs",
      link: `${import.meta.env.BASE_URL}certificates/255620067730_nou25_cs20.pdf`,
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Certificates & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-blue-700 font-medium">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-3">{cert.description}</p>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{cert.date}</span>
                <button
                  type="button"
                  onClick={() => setPreviewLink(cert.link)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {previewLink && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-5xl h-[85vh] shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Certificate Preview
              </h3>
              <button
                type="button"
                onClick={() => setPreviewLink(null)}
                className="p-1 text-gray-600 hover:text-gray-900"
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={previewLink}
              title="Certificate Preview"
              className="w-full h-[calc(85vh-57px)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
