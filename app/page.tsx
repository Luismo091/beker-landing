import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Projects from "@/components/projects"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <About />
        <Testimonials />
        <CallToAction />
      </div>
    </main>
  )
}
