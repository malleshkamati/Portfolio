export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript"],
      icon: "💻",
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "Flask", "React.js", "Node.js", "Express.js"],
      icon: "🌐",
    },
    {
      title: "Database Management",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      icon: "🗄️",
    },
    {
      title: "Tools & Technologies",
      skills: ["Pandas", "NumPy", "Git", "GitHub", "Tailwind CSS", "REST APIs"],
      icon: "🛠️",
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-6 text-center tilt-hover group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-lg text-sm font-medium hover:from-orange-200 hover:to-yellow-200 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h3>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold gradient-text">Software Development Intern</h4>
                <p className="text-gray-600 font-medium">IOTRL Connect Pvt Ltd, Hyderabad</p>
                <p className="text-sm text-gray-500">May 2024 - Aug 2024</p>
                <p className="text-gray-700">
                  Integrated Moodle with Node.js, enabling quizzes, leaderboards, and progress tracking. Improved user
                  engagement and assessment efficiency through interactive learning.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold gradient-text">Software Development Intern</h4>
                <p className="text-gray-600 font-medium">GOQii</p>
                <p className="text-sm text-gray-500">May 2025 – July 2025</p>
                <p className="text-gray-700">
                  Built React-based SmartRx landing page, reducing bounce rate by 30%. Developed multi-step onboarding
                  flow used by 5K+ users and integrated 10+ REST APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
