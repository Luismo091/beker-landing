"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Home, Layers, Award, Briefcase, MessageSquare, Phone, Moon, Sun, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "services", "why-choose-us", "projects", "about", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Inicio" },
    { id: "services", icon: <Layers size={18} />, label: "Servicios" },
    { id: "why-choose-us", icon: <Award size={18} />, label: "¿Por qué?" },
    { id: "projects", icon: <Briefcase size={18} />, label: "Proyectos" },
    { id: "about", icon: <User size={18} />, label: "Equipo" },
    { id: "testimonials", icon: <MessageSquare size={18} />, label: "Testimonios" },
    { id: "contact", icon: <Phone size={18} />, label: "Contacto" },
  ]

  return (
    <motion.div
      className="fixed top-6 left-0 w-full z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="glass-nav py-3 px-6 flex items-center justify-center space-x-4 max-w-4xl mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <div
              className={`p-2 rounded-full transition-all duration-300 flex items-center ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.icon}
              <span className={`ml-1 text-xs font-medium ${activeSection === item.id ? "" : "hidden sm:inline"}`}>
                {item.label}
              </span>
            </div>
          </Link>
        ))}

        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 flex items-center"
          variant="ghost"
          size="sm"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span className="ml-1 text-xs font-medium hidden sm:inline">{theme === "dark" ? "Claro" : "Oscuro"}</span>
        </Button>
      </div>
    </motion.div>
  )
}
