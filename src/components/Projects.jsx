import React from 'react'
import Image from 'next/image'
import deepseekLogo from '../app/assets/deepseek.png' // Make sure to add the correct path to your image

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      image: "/project1.jpg",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with user authentication and payment integration",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project2.jpg",
      github: "https://github.com/arjav-14/dooddel",
      demo: "https://your-ecommerce.com"
    },
    // Add more projects as needed
    {
        title: "Deepseek-Clone",
        description: "chat model",
        technologies: ["React","Next js", "Node.js", "MongoDB"],
        image: deepseekLogo,
        github: "https://github.com/arjav-14/deepseek.git",
        demo: "https://deepseek-theta-ochre.vercel.app/"
      }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Project Image */}
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  GitHub
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects