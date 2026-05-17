import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, stats, skills } from '../data'
import { MapPin, Clock, ArrowRight, GitBranch, Send } from 'lucide-react'

const Container = ({ children, className }) => <div className={className}>{children}</div>
const Span = ({ children, className }) => <span className={className}>{children}</span>
const AnchorLink = ({ href, className, children, target, rel }) => (
  <a href={href} className={className} target={target} rel={rel}>{children}</a>
)

const codeContent = {
  react: [
    { text: '// Moen Mburu | React Developer', color: 'text-gray-500' },
    { text: '', color: '' },
    { text: 'import React, { useState } from "react"', color: 'text-red-400' },
    { text: 'import { motion } from "framer-motion"', color: 'text-red-400' },
    { text: '', color: '' },
    { text: 'const Portfolio = () => {', color: 'text-yellow-400' },
    { text: '  const [hired, setHired] = useState(false)', color: 'text-gray-300' },
    { text: '', color: '' },
    { text: '  return (', color: 'text-gray-300' },
    { text: '    <motion.div animate={{ opacity: 1 }}>', color: 'text-red-400' },
    { text: '      <h1>Moen Mburu</h1>', color: 'text-gray-300' },
    { text: '      <p>Frontend Developer</p>', color: 'text-gray-300' },
    { text: '      <button onClick={() => setHired(true)}>', color: 'text-gray-300' },
    { text: '        Hire Me', color: 'text-green-400' },
    { text: '      </button>', color: 'text-gray-300' },
    { text: '    </motion.div>', color: 'text-red-400' },
    { text: '  )', color: 'text-gray-300' },
    { text: '}', color: 'text-yellow-400' },
    { text: '', color: '' },
    { text: 'export default Portfolio', color: 'text-red-400' },
  ],
  node: [
    { text: '// Moen Mburu | Node.js Backend', color: 'text-gray-500' },
    { text: '', color: '' },
    { text: 'const express = require("express")', color: 'text-red-400' },
    { text: 'const app = express()', color: 'text-gray-300' },
    { text: '', color: '' },
    { text: 'app.get("/hire", (req, res) => {', color: 'text-yellow-400' },
    { text: '  const developer = {', color: 'text-gray-300' },
    { text: '    name: "Moen Mburu",', color: 'text-green-400' },
    { text: '    role: "Frontend Developer",', color: 'text-green-400' },
    { text: '    location: "Nairobi, Kenya",', color: 'text-green-400' },
    { text: '    available: true,', color: 'text-green-400' },
    { text: '  }', color: 'text-gray-300' },
    { text: '  res.json(developer)', color: 'text-gray-300' },
    { text: '})', color: 'text-yellow-400' },
    { text: '', color: '' },
    { text: 'app.listen(3000, () => {', color: 'text-yellow-400' },
    { text: '  console.log("Ready for hire!")', color: 'text-green-400' },
    { text: '})', color: 'text-yellow-400' },
  ],
  postgreSQL: [
    { text: '-- Moen Mburu | Database', color: 'text-gray-500' },
    { text: '', color: '' },
    { text: 'CREATE TABLE skills (', color: 'text-red-400' },
    { text: '  name        VARCHAR(255) NOT NULL,', color: 'text-gray-300' },
    { text: '  category    TEXT,', color: 'text-gray-300' },
    { text: '  level       VARCHAR(50) DEFAULT "Expert"', color: 'text-gray-300' },
    { text: ');', color: 'text-red-400' },
    { text: '', color: '' },
    { text: 'CREATE TABLE services (', color: 'text-red-400' },
    { text: '  title       VARCHAR(255) NOT NULL,', color: 'text-gray-300' },
    { text: '  price       NUMERIC NOT NULL,', color: 'text-gray-300' },
    { text: '  delivery    TEXT', color: 'text-gray-300' },
    { text: ');', color: 'text-red-400' },
    { text: '', color: '' },
    { text: 'INSERT INTO skills VALUES', color: 'text-red-400' },
    { text: '  ("React", "Frontend", "Expert"),', color: 'text-green-400' },
    { text: '  ("Node.js", "Backend", "Advanced"),', color: 'text-green-400' },
    { text: '  ("PostgreSQL", "Database", "Advanced");', color: 'text-green-400' },
    { text: '', color: '' },
    { text: '-- Available for hire!', color: 'text-gray-500' },
  ],
}

function CodeWindow() {
  const [activeTab, setActiveTab] = useState('postgreSQL')
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const tabs = ['react', 'node', 'postgreSQL']

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setDisplayedLines([])
    setCurrentLine(0)
    setCurrentChar(0)
    setIsTyping(true)
  }

  useEffect(() => {
    if (!isTyping) return
    const lines = codeContent[activeTab]
    if (currentLine >= lines.length) {
      setIsTyping(false)
      return
    }
    const line = lines[currentLine]
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev]
          while (updated.length <= currentLine) {
            updated.push({ text: '', color: '' })
          }
          updated[currentLine] = {
            text: line.text.slice(0, currentChar + 1),
            color: line.color,
          }
          return updated
        })
        setCurrentChar(prev => prev + 1)
      }, 25)
      return () => clearTimeout(timeout)
    } else {
      setDisplayedLines(prev => {
        const updated = [...prev]
        while (updated.length <= currentLine) {
          updated.push({ text: '', color: '' })
        }
        updated[currentLine] = { text: line.text, color: line.color }
        return updated
      })
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, line.text === '' ? 50 : 80)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar, activeTab, isTyping])

  return (
    <Container className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      <Container className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/10">
        <Container className="flex items-center gap-2">
          <Container className="w-3 h-3 rounded-full bg-red-500" />
          <Container className="w-3 h-3 rounded-full bg-yellow-500" />
          <Container className="w-3 h-3 rounded-full bg-green-500" />
        </Container>
        <Container className="flex items-center gap-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-xs px-3 py-1 rounded-md transition-colors duration-200 ${
                tab === activeTab ? 'bg-primary text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </Container>
      </Container>
      <Container className="p-5 font-mono text-sm h-[320px] overflow-y-auto custom-scroll">
        {displayedLines.filter(Boolean).map((line, i) => (
          <Container key={i} className="leading-7">
            {line.text === '' ? (
              <Span className="text-transparent">.</Span>
            ) : (
              <Span className={line.color || 'text-gray-300'}>{line.text}</Span>
            )}
          </Container>
        ))}
        {isTyping && (
          <Span className="animate-pulse text-primary font-bold">|</Span>
        )}
      </Container>
    </Container>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">

      <Container className="absolute inset-0 overflow-hidden pointer-events-none">
        <Container className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </Container>

      <Container className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <Container className="flex items-center gap-2 w-fit">
            <Container className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Span className="text-sm text-gray-400">Available for work</Span>
          </Container>

          <Container>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              {personalInfo.name}
            </h1>
            <Container className="flex items-center gap-3 mt-3">
              <Container className="h-px w-8 bg-primary" />
              <Span className="text-primary font-medium text-lg">{personalInfo.title}</Span>
            </Container>
          </Container>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            {personalInfo.bio}
          </p>

          <Container className="flex flex-wrap gap-4">
            <Container className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={14} className="text-primary" />
              {personalInfo.location}
            </Container>
            <Container className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} className="text-primary" />
              {personalInfo.timezone}
            </Container>
          </Container>

          <Container className="flex flex-wrap gap-4 mt-2">
            <AnchorLink
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View My Work
              <ArrowRight size={16} />
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </AnchorLink>
          </Container>

          <Container className="flex items-center gap-4 mt-2">
            <AnchorLink
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <GitBranch size={20} />
            </AnchorLink>
            <AnchorLink
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Send size={20} />
            </AnchorLink>
          </Container>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <CodeWindow />

          <Container className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Container
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-1"
              >
                <Span className="text-3xl font-bold text-white">{stat.value}</Span>
                <Span className="text-sm text-gray-500">{stat.label}</Span>
              </Container>
            ))}
          </Container>

          <Container className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Tech Stack</p>
            <Container className="flex flex-col gap-4">
              <Container>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Frontend</p>
                <Container className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, i) => (
                    <Span key={i} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-lg">{skill}</Span>
                  ))}
                </Container>
              </Container>
              <Container>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Backend</p>
                <Container className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, i) => (
                    <Span key={i} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-lg">{skill}</Span>
                  ))}
                </Container>
              </Container>
              <Container>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Database</p>
                <Container className="flex flex-wrap gap-2">
                  {skills.database.map((skill, i) => (
                    <Span key={i} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-lg">{skill}</Span>
                  ))}
                </Container>
              </Container>
            </Container>
          </Container>

          <Container className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between">
            <Container>
              <p className="text-xs text-gray-500 mb-1">Reach me at</p>
              <p className="text-white font-medium">{personalInfo.email}</p>
            </Container>
            <AnchorLink
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
              className="bg-primary hover:bg-primary-dark text-white text-sm px-4 py-2 rounded-lg transition-colors"
            target="_blank"
  rel="noopener noreferrer"
  className="bg-primary hover:bg-primary-dark text-white text-sm px-4 py-2 rounded-lg transition-colors"
>
  Email Me
</AnchorLink>
          </Container>
        </motion.div>

      </Container>
    </section>
  )
}