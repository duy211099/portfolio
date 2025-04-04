import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#f5f5f5] border-b-4 border-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter">
            <span className="bg-[#4cc9f0] px-3 py-1 text-black font-extrabold border-2 border-black rotate-2 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              DUY
            </span>
            <span className="bg-black px-2 py-1 text-white -rotate-1 inline-block ml-1">PHAM</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold hover:underline decoration-[#ff5252] decoration-4 underline-offset-4"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button className="bg-black hover:bg-[#333] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Resume
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto px-4" id="about">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#4cc9f0] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                Software Engineer & <span className="bg-black text-white px-2">Problem Solver</span>
              </h1>
              <p className="text-xl mb-8">
                I build exceptional digital experiences with clean code and modern technologies. Turning complex
                problems into elegant solutions is what I do best.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black hover:bg-[#333] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <a href="http://localhost:3000/#projects" className="w-full h-full">View Projects</a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"

                >
                  <a href="mailto:duy211099@gmail.com" target="_blank" rel="noopener noreferrer">
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center mt-12 gap-6">
              <a
                href="https://github.com/duy211099"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f8f9fa] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/duy211099"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f8f9fa] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:duy211099@gmail.com"
                className="bg-[#f8f9fa] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-[#ffbe0b] border-y-4 border-black" id="projects">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black mb-12 inline-block bg-black text-white px-4 py-2 -rotate-1">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing."
                tags={["React", "Node.js", "MongoDB", "Stripe"]}
                image="/placeholder.svg?height=300&width=500"
                github="https://github.com/duy211099"
                demo="https://example.com"
                color="#fb5607"
              />

              <ProjectCard
                title="Task Management App"
                description="A productivity application built with Next.js and Firebase. Includes real-time updates, drag-and-drop interface, and team collaboration features."
                tags={["Next.js", "Firebase", "Tailwind CSS", "TypeScript"]}
                image="/placeholder.svg?height=300&width=500"
                github="https://github.com/duy211099"
                demo="https://example.com"
                color="#8338ec"
              />

              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered application that generates marketing content using OpenAI's GPT-4. Built with React and Python Flask backend."
                tags={["React", "Python", "Flask", "OpenAI"]}
                image="/placeholder.svg?height=300&width=500"
                github="https://github.com/duy211099"
                demo="https://example.com"
                color="#3a86ff"
              />

              <ProjectCard
                title="Fitness Tracker"
                description="A mobile-first web application for tracking workouts and nutrition. Features include progress visualization and custom workout plans."
                tags={["React Native", "GraphQL", "Node.js", "D3.js"]}
                image="/placeholder.svg?height=300&width=500"
                github="https://github.com/duy211099"
                demo="https://example.com"
                color="#ff006e"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 container mx-auto px-4" id="skills">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 inline-block bg-[#4cc9f0] text-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
              Skills & Technologies
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 bg-black text-white inline-block px-3 py-1">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="React" color="#61dafb" />
                <SkillBadge name="Next.js" color="#000000" />
                <SkillBadge name="TypeScript" color="#3178c6" />
                <SkillBadge name="JavaScript" color="#f7df1e" />
                <SkillBadge name="HTML5" color="#e34f26" />
                <SkillBadge name="CSS3" color="#1572b6" />
                <SkillBadge name="Tailwind CSS" color="#06b6d4" />
                <SkillBadge name="Redux" color="#764abc" />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 bg-black text-white inline-block px-3 py-1">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" color="#339933" />
                <SkillBadge name="Express" color="#000000" />
                <SkillBadge name="Python" color="#3776ab" />
                <SkillBadge name="Django" color="#092e20" />
                <SkillBadge name="GraphQL" color="#e10098" />
                <SkillBadge name="REST API" color="#ff5252" />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 bg-black text-white inline-block px-3 py-1">Database</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="MongoDB" color="#47a248" />
                <SkillBadge name="PostgreSQL" color="#336791" />
                <SkillBadge name="MySQL" color="#4479a1" />
                <SkillBadge name="Firebase" color="#ffca28" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 bg-black text-white inline-block px-3 py-1">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" color="#f05032" />
                <SkillBadge name="Docker" color="#2496ed" />
                <SkillBadge name="AWS" color="#ff9900" />
                <SkillBadge name="CI/CD" color="#4cc9f0" />
                <SkillBadge name="Jest" color="#c21325" />
                <SkillBadge name="Figma" color="#f24e1e" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-[#ff5252] border-y-4 border-black" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-black mb-8 inline-block bg-white text-black px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                Get In Touch
              </h2>

              <p className="text-xl mb-12 bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Have a project in mind or just want to chat? Feel free to reach out! I&apos;m always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-black text-2xl tracking-tighter mb-2">
                <span className="bg-[#4cc9f0] px-3 py-1 text-black font-extrabold border-2 border-black rotate-2 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  DUY
                </span>
                <span className="bg-white px-2 py-1 text-black -rotate-1 inline-block ml-1">PHAM</span>
              </div>
              <p className="text-gray-400">Building digital experiences that matter.</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/duy211099"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5252] transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/duy211099"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff5252] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:duy211099@gmail.com" className="hover:text-[#ff5252] transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Duy Pham. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

