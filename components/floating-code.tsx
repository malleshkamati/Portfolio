"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Html } from "@react-three/drei"
import type { Group } from "three"

const codeSnippets = [
  'const dev = "Mallesh";',
  "function create() { return magic; }",
  "npm install awesome",
  'git commit -m "✨ feat"',
  'console.log("Hello World!");',
]

function CodeCard({ position, code, delay }: { position: [number, number, number]; code: string; delay: number }) {
  const ref = useRef<Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime + delay) * 0.1
    }
  })

  return (
    <Float speed={1 + delay} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={ref} position={position}>
        <Html transform occlude>
          <div className="backdrop-blur-md bg-[#3E2723]/80 border border-[#FF6F61]/30 rounded-lg p-3 shadow-lg min-w-[200px]">
            <code className="text-[#FF9E80] font-mono text-sm whitespace-nowrap">{code}</code>
          </div>
        </Html>
      </group>
    </Float>
  )
}

export default function FloatingCode() {
  return (
    <>
      {codeSnippets.map((code, index) => (
        <CodeCard
          key={index}
          position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4]}
          code={code}
          delay={index * 0.5}
        />
      ))}
    </>
  )
}
