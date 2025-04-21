"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Code, Mail, Phone, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Quién está detrás de Beker</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conoce al profesional que lidera nuestras soluciones tecnológicas
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto lg:mx-0 mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  LM
                </div>
                <h3 className="text-2xl font-bold mb-2">Luis Fernando Mora Aroca</h3>
                <p className="text-primary font-medium mb-4">Ingeniero en Sistemas</p>

                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex items-center justify-center lg:justify-start">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">m.luisfernando@icloud.com</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+57 3022528714</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Github className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a
                      href="https://github.com/Luismo091"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      github.com/Luismo091
                    </a>
                  </div>
                </div>

                <Button className="w-full sm:w-auto">Contactar</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-bold">Educación</h4>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-6 pl-10"
                  >
                    <motion.div variants={itemVariants} className="relative border-l border-primary/30 pl-6 pb-6">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                      <h5 className="font-bold">Ingeniero en Sistemas</h5>
                      <p className="text-sm text-muted-foreground">UDI - Universidad de Investigación y Desarrollo</p>
                      <p className="text-xs">Feb 2019 - Sep 2024</p>
                      <p className="text-xs">San Gil, Santander</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative border-l border-primary/30 pl-6">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                      <h5 className="font-bold">Técnico en Sistemas</h5>
                      <p className="text-sm text-muted-foreground">SENA</p>
                      <p className="text-xs">Feb 2017 - Sep 2018</p>
                      <p className="text-xs">Valledupar, Cesar</p>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-bold">Experiencia</h4>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-6 pl-10"
                  >
                    <motion.div variants={itemVariants} className="relative border-l border-primary/30 pl-6">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                      <h5 className="font-bold">Practicante en área TI sistemas</h5>
                      <p className="text-sm text-muted-foreground">Hospital Regional de San Gil</p>
                      <p className="text-xs">Sep 2023 - Nov 2023</p>
                      <ul className="list-disc text-xs mt-2 ml-4 space-y-1">
                        <li>Logré una comunicación eficiente entre los sistemas del hospital</li>
                        <li>Colaboré en proyectos de mejora tecnológica</li>
                        <li>Implementé y mantuve un sistema de gestión de registros médicos electrónicos</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                    <Code className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-bold">Proyectos Destacados</h4>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="space-y-6 pl-10"
                >
                  <motion.div variants={itemVariants} className="relative border-l border-primary/30 pl-6 pb-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                    <h5 className="font-bold">RFIDPLAY</h5>
                    <p className="text-xs text-primary">PHP, MySQL, JS, Arduino, C</p>
                    <p className="text-xs">Nov 2023 - Dec 2023</p>
                    <ul className="list-disc text-xs mt-2 ml-4 space-y-1">
                      <li>Plataforma web que automatizó el registro y validación de jugadores en torneos deportivos</li>
                      <li>Diseño y ensamblaje del prototipo R-AIR con NodeMCU, lectores RFID y LEDs</li>
                      <li>Reducción de tiempos de registro y validación de identidad mediante RFID</li>
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative border-l border-primary/30 pl-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                    <h5 className="font-bold">Sistema de Registro de Participantes</h5>
                    <p className="text-xs text-primary">PHP, MySQL, JS, GCloud</p>
                    <p className="text-xs">Nov 2021 - Dec 2021</p>
                    <p className="text-xs">Torneo Nacional de Fútbol San Gil 2021 – Club Albeiro García</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
