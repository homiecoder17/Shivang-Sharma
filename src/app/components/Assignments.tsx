import { FileText, Download, Calendar, Tag, Eye, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Assignments() {
  const [viewingPDF, setViewingPDF] = useState<string | null>(null);

  // 📝 TO ADD A NEW ASSIGNMENT: Simply add a new object to this array
  // Copy the format below and update with your assignment details
  // You can upload your files to Google Drive, Dropbox, or GitHub and paste the sharing link in 'fileLink'
  const assignments = [
    {
      title: "PESE Assignment 1 - Profiling Sheet",
      subject: "PESE 400",
      submittedDate: "January 30, 2026",
      fileLink: "https://drive.google.com/file/d/1Kgv489LnS4SrYi7p_lvDVdQ-orSLUQ0b/preview",
      tags: ["Career Skills"],
    },
  ];

  return (
    <section id="assignments" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FileText className="text-blue-600" size={32} />
          <h2 className="text-4xl font-bold text-center text-gray-900">
            My Academic Assignments
          </h2>
        </motion.div>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A collection of my coursework and assignments available for review by instructors and peers
        </motion.p>

        <div className="grid gap-6">
          {assignments.map((assignment, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {assignment.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {assignment.subject}
                  </p>
                  <p className="text-gray-700 mb-4">{assignment.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {assignment.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                      >
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-green-500" />
                      <span className="text-green-600">
                        Submitted: {assignment.submittedDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setViewingPDF(assignment.fileLink)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <Eye size={20} />
                    <span>View Assignment</span>
                  </button>
                  <a
                    href={assignment.fileLink}
                    download
                    className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
                  >
                    <Download size={20} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-gray-700">
            <strong>📚 For Instructors & Reviewers:</strong> This section showcases my academic work for your review. 
            All assignments are available for download and evaluation. This section is temporary and will be removed in future.
          </p>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      {viewingPDF && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingPDF(null)}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Assignment Viewer</h3>
              <button
                onClick={() => setViewingPDF(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={viewingPDF}
                className="w-full h-full"
                title="Assignment PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}