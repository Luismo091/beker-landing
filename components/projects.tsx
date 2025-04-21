"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "OklaFire – eCommerce con IA para Oklahoma",
    description: "Plataforma web de comercio electrónico con integración de Inteligencia Artificial para ofrecer recomendaciones personalizadas y asistencia automatizada en tiempo real.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      "Vue 3",
      "Vite",
      "PHP",
      "Node.js",
      "MySQL",
      "Docker",
      "LLM (Gemini, OpenAI u Ollama)",
    ],
  },
  {
    title: "RFIDPLAYPHP",
    description: "Plataforma web que automatizó el registro y validación de jugadores en torneos deportivos.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["PHP", "MySQL", "JS", "Arduino", "C"],
    date: "Nov 2023 - Dec 2023",
  },
  {
    title: "Sistema de Registro de Participantes",
    description: "Plataforma web para el Torneo Nacional de Fútbol San Gil 2021.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["PHP", "MySQL", "JS", "GCloud"],
    date: "Nov 2021 - Dec 2021",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -70])

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 5])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -5])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 3])

  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
  const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.07, 1])

  return (
    <section id="projects" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Soluciones tecnológicas que han transformado negocios y creado nuevas oportunidades
        </p>
      </motion.div>

      <div ref={containerRef} className="relative overflow-hidden py-20">
        {/* Parallax background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        >
          <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-blue-500/10 blur-xl" />
          <div className="absolute top-[40%] right-[10%] w-40 h-40 rounded-full bg-purple-500/10 blur-xl" />
          <div className="absolute bottom-[20%] left-[30%] w-36 h-36 rounded-full bg-teal-500/10 blur-xl" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                y: index === 0 ? y1 : index === 1 ? y2 : y3,
                rotate: index === 0 ? rotate1 : index === 1 ? rotate2 : rotate3,
                scale: index === 0 ? scale1 : index === 1 ? scale2 : scale3,
              }}
              className="glass-card overflow-hidden flex flex-col h-full transform-gpu"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">{project.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Ver detalles
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
