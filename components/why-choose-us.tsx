"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Fingerprint, Globe, Lightbulb, Heart } from "lucide-react"

const reasons = [
  {
    icon: <Fingerprint className="h-8 w-8" />,
    title: "Soluciones 100% personalizadas",
    description: "Cada proyecto es único y recibe atención personalizada para satisfacer tus necesidades específicas.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Dominio completo del ecosistema tecnológico",
    description: "Nuestro equipo domina las tecnologías más avanzadas para ofrecerte soluciones integrales.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Acompañamiento estratégico y técnico",
    description: "Te guiamos en cada paso del proceso, desde la concepción hasta la implementación.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovación aplicada a la realidad",
    description: "Implementamos tecnologías innovadoras adaptadas a las necesidades reales de cada cliente.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Pasión por la tecnología y el diseño",
    description: "Nos apasiona crear soluciones tecnológicas que combinan funcionalidad y estética.",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0.8, 0.6])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="why-choose-us" ref={ref} className="py-20 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }} ref={containerRef}>
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir a Beker?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nos distinguimos por nuestra dedicación a la excelencia y nuestro enfoque centrado en el cliente
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-6 h-full flex flex-col"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              className="mb-4 text-primary"
              whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {reason.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
