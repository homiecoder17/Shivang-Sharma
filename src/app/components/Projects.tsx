import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Pharmacy Stock Management System",
      description: "A comprehensive stock management system for pharmacies built in C programming language. Features include inventory tracking, medicine expiry alerts, and automated reordering system.",
      technologies: ["C Programming"],
      image: "https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljYWwlMjBzdG9ja3xlbnwxfHx8fDE3Njk5NjA3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/homiecoder17",
      live: "#",
    },
    {
      title: "Capture The Flag (Cryptography)",
      description: "Cryptography-based CTF challenge solver using Python and its libraries. Implements various encryption/decryption algorithms and cryptographic techniques to solve security challenges.",
      technologies: ["Python", "Cryptography Libraries"],
      image: "https://images.unsplash.com/photo-1634224143538-ce0221abf732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9ncmFwaHklMjBzZWN1cml0eSUyMGNvZGV8ZW58MXx8fHwxNzY5OTYwNzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/homiecoder17",
      live: "#",
    },
    {
      title: "Social Media Networks",
      description: "A social network data structure implementation using C programming language. Features graph-based algorithms, friend recommendations, and network analysis using DSA concepts.",
      technologies: ["C Programming", "Data Structures", "Algorithms"],
      image: "https://images.unsplash.com/photo-1675352161865-27816c76141a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbnN8ZW58MXx8fHwxNzY5OTYwNzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      github: "https://github.com/homiecoder17",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here are some of my recent projects. Each project represents a unique challenge 
          and learning opportunity.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
