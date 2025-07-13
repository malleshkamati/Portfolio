"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const shapes = [
    { size: "w-20 h-20", color: "bg-[#FF6F61]/10", position: "top-20 left-10" },
    { size: "w-32 h-32", color: "bg-[#FF9E80]/10", position: "top-40 right-20" },
    { size: "w-16 h-16", color: "bg-[#6D8B74]/10", position: "bottom-40 left-20" },
    { size: "w-24 h-24", color: "bg-[#FF6F61]/10", position: "bottom-20 right-10" },
    { size: "w-12 h-12", color: "bg-[#FF9E80]/10", position: "top-1/2 left-5" },
    { size: "w-28 h-28", color: "bg-[#6D8B74]/10", position: "top-1/3 right-5" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} rounded-full blur-sm`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${["#FF6F61", "#FF9E80", "#6D8B74"][i]}40 0%, transparent 70%)`,
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}
