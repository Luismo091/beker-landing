"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Cpu, Cloud, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
  {
    id: "web",
    icon: <Code className="h-10 w-10" />,
    title: "Desarrollo Web Full-Stack",
    description: "Creamos aplicaciones web modernas y responsivas con las últimas tecnologías.",
    technologies: ["React", "Next.js", "Node.js", "Express", "PHP", "Python"],
    details:
      "Interfaces atractivas y backends sólidos que se adaptan perfectamente a tus necesidades de negocio. Nuestras soluciones web son escalables, seguras y optimizadas para brindar la mejor experiencia de usuario.",
  },
  {
    id: "ai",
    icon: <Brain className="h-10 w-10" />,
    title: "Automatización con IA",
    description: "Implementamos soluciones inteligentes que automatizan procesos y mejoran la eficiencia.",
    technologies: ["Machine Learning", "NLP", "Computer Vision", "Predictive Models", "Data Analysis"],
    details:
      "Desarrollamos modelos predictivos, asistentes inteligentes y sistemas de análisis en tiempo real que transforman datos en decisiones estratégicas, ahorrando tiempo y recursos.",
  },
  {
    id: "iot",
    icon: <Cpu className="h-10 w-10" />,
    title: "Proyectos IoT y Hardware",
    description: "Conectamos el mundo físico con el digital mediante soluciones IoT personalizadas.",
    technologies: ["Arduino", "ESP8266", "ESP32", "Raspberry Pi", "Sensores", "Actuadores"],
    details:
      "Diseñamos e implementamos sistemas de automatización y monitoreo físico remoto que permiten controlar y optimizar procesos en tiempo real desde cualquier lugar.",
  },
  {
    id: "cloud",
    icon: <Cloud className="h-10 w-10" />,
    title: "Infraestructura y Cloud",
    description: "Configuramos y gestionamos infraestructuras cloud eficientes y seguras.",
    technologies: ["Docker", "Portainer", "ZeroTier", "AWS", "Google Cloud", "Azure"],
    details:
      "Implementamos servidores inteligentes y soluciones cloud autogestionadas que garantizan alta disponibilidad, seguridad y rendimiento óptimo para tus aplicaciones.",
  },
  {
    id: "consulting",
    icon: <Search className="h-10 w-10" />,
    title: "Consultoría Tecnológica",
    description: "Asesoramos en la elección e implementación de soluciones tecnológicas.",
    technologies: ["Análisis de Procesos", "Transformación Digital", "Optimización", "Estrategia"],
    details:
      "Ofrecemos acompañamiento estratégico en transformación digital y elección de herramientas, ayudándote a tomar decisiones informadas que impulsen el crecimiento de tu negocio.",
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState("web")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Variantes para animaciones
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
    <section id="services" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel
        </p>
      </motion.div>

      <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <span className="hidden md:inline">{service.title}</span>
              <span className="md:hidden">
                {service.id === "web"
                  ? "Web"
                  : service.id === "ai"
                    ? "IA"
                    : service.id === "iot"
                      ? "IoT"
                      : service.id === "cloud"
                        ? "Cloud"
                        : "Consultoría"}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative">
          <AnimatePresence mode="wait">
            {services.map(
              (service) =>
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4 }}
                    className="glass-card p-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                      <motion.div
                        className="md:col-span-1 flex justify-center md:justify-start"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.div
                          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {service.icon}
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="md:col-span-2 text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-3">
                          {service.title}
                        </motion.h3>
                        <motion.p variants={itemVariants} className="text-muted-foreground mb-4">
                          {service.description}
                        </motion.p>
                        <motion.p variants={itemVariants} className="mb-6">
                          {service.details}
                        </motion.p>

                        <motion.div variants={itemVariants} className="mb-6">
                          <h4 className="text-sm font-medium mb-2">Tecnologías:</h4>
                          <div className="flex flex-wrap">
                            {service.technologies.map((tech, index) => (
                              <motion.span
                                key={tech}
                                className="tech-tag"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <Button variant="outline" className="group">
                            Más información
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  )
}
