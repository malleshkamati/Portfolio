export default function Projects() {
  const projects = [
    {
      title: "ML Chatbot",
      description:
        "Engineered an ML Chatbot implementing BERT for sentence similarity, advanced NLP techniques, and Llama integration with Flask and PostgreSQL backend.",
      tech: ["Python", "BERT", "Flask", "PostgreSQL", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      title: "Quiz Application",
      description:
        "Built a comprehensive Quiz Web Application with features for quiz creation, editing, performance tracking, and user authentication.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Job Catch",
      description:
        "Developed a Job Recommendation System incorporating web scraping, resume parsing, and recommendation algorithms using BeautifulSoup and scikit-learn.",
      tech: ["Python", "BeautifulSoup", "PyPDF2", "scikit-learn"],
      github: "#",
      demo: "#",
    },
    {
      title: "SmartRx Landing Page",
      description:
        "Built a React-based SmartRx landing page at GOQii, reducing bounce rate by 30% and enhancing mobile usability with multi-step onboarding flow.",
      tech: ["React.js", "Tailwind CSS", "Context API", "REST APIs"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, machine learning, and
            modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 tilt-hover group hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
