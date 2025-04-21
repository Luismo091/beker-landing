"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "CEO, TechSolutions",
    content:
      "Beker transformó completamente nuestra infraestructura tecnológica. Su enfoque personalizado y su dominio técnico nos permitieron optimizar procesos y reducir costos operativos en un 30%.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Laura Martínez",
    position: "Directora de Innovación, GrupoInnova",
    content:
      "La implementación del sistema IoT desarrollado por Beker nos ha permitido monitorear en tiempo real nuestros equipos, anticipar fallos y mejorar significativamente nuestra productividad.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Miguel Sánchez",
    position: "Fundador, StartupHub",
    content:
      "El equipo de Beker no solo entregó una plataforma web excepcional, sino que nos acompañó estratégicamente en todo el proceso. Su visión tecnológica y creatividad marcaron la diferencia.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()

    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
    }

    return () => {
      resetTimeout()
    }
  }, [current, autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  // Variantes para animaciones de parallax
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Historias de éxito y transformación digital con Beker
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          className="glass-card p-8 md:p-12 min-h-[300px] flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Quote className="mx-auto h-10 w-10 text-primary mb-6 opacity-50" />
              </motion.div>

              <motion.p
                className="text-lg md:text-xl mb-8 italic"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                "{testimonials[current].content}"
              </motion.p>

              <motion.div
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h4 className="font-bold">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`w-2 h-2 p-0 rounded-full ${
                current === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
              }`}
            />
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
