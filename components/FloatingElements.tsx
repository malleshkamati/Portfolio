"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const codeSnippets = [
    "const developer = 'Mallesh';",
    "function buildAmazingApps() {",
    "return 'Full Stack Magic';",
    "console.log('Hello World!');",
    "npm install success",
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute code-snippet floating-animation opacity-20"
          style={{
            left: `${10 + index * 20}%`,
            top: `${20 + index * 15}%`,
            animationDelay: `${index * 0.5}s`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-30 floating-animation" />
      <div
        className="absolute bottom-40 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 transform rotate-45 opacity-25 floating-animation"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 floating-animation"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
