import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App