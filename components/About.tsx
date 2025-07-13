export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Computer Science student at Shri Ramswaroop Memorial University, expected to graduate in
              May 2027. With hands-on experience in full-stack development, I've worked with companies like IOTRL
              Connect and GOQii, building impactful solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve real-world problems. From developing
              ML chatbots to creating interactive learning platforms, I enjoy working across the entire technology
              stack.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glassmorphism rounded-2xl p-8 tilt-hover">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-600">B.Tech in Computer Science</h4>
                  <p className="text-gray-600">Shri Ramswaroop Memorial University</p>
                  <p className="text-sm text-gray-500">Expected May 2027</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Contact Info</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">📧 malleshkamati0803@gmail.com</p>
                <p className="text-gray-600">📱 +91 9901450803</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    LinkedIn
                  </a>
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
