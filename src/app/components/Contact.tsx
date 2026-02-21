import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

// 🔑 EMAILJS CONFIGURATION
// Replace these with your EmailJS credentials from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = "service_rn63p6f";
const EMAILJS_TEMPLATE_ID = "ggs123";
const EMAILJS_PUBLIC_KEY = "kYo6_LZbi3D3N6MqJ";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Initialize EmailJS (optional but recommended)
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Shivang", // Your name
          reply_to: formData.email,
          date: new Date().toLocaleString(),
          title: "Portfolio Inquiry",
        },
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS Success:", result);

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      console.error("Error text:", error?.text);
      console.error("Error status:", error?.status);

      // More detailed error message
      let errorMessage = "Oops! Something went wrong. ";

      if (error?.text) {
        errorMessage += `Error: ${error.text}. `;
      }

      errorMessage +=
        "Please try emailing me directly at codershivang017@gmail.com";

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm always open to discussing new projects, creative
          ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    codershivang017@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Location
                  </h4>
                  <p className="text-gray-700">
                    Dehradun, Uttrakhand/India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Currently Available For
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Summer Internships (AI/ML)</li>
                <li>• Research Projects</li>
                <li>• Collaborative ML Projects</li>
                <li>• Hackathons & Competitions</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={20}
                  />
                ) : (
                  <AlertCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                )}
                <p
                  className={
                    submitStatus.type === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }
                >
                  {submitStatus.message}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}