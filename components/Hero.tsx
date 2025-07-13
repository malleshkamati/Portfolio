"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [ai, showAi] = useState(false);
  const fullText = ai? "AI Enthusiast" : "Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        showAi(!ai)
      }
      
    }, 200)

    return () => clearInterval(timer)
  }, [ai])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="glassmorphism rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800">Mallesh</span>
           
            <span className="text-gray-800"> Kamati</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-700 mb-8 font-mono">
            {"<"}
            <span className="gradient-text">{displayText}</span>
            {" />"}
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. Specializing in React, Node.js,
            and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg transform rotate-12 opacity-70"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating-animation" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60"></div>
      </div>
    </section>
  )
}
