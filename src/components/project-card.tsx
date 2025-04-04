import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
  color: string
}

export function ProjectCard({ title, description, tags, image, github, demo, color }: ProjectCardProps) {
  return (
    <div
      className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
      style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full border-2 border-black hover:bg-gray-100 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full border-2 border-black hover:bg-gray-100 transition-colors"
          >
            <ExternalLink size={24} />
          </a>
        </div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={192}
          className="w-full h-48 object-cover border-b-4 border-black"
        />
      </div>

      <div className="p-6">
        <div
          className="inline-block px-3 py-1 mb-4 font-bold text-white border-2 border-black"
          style={{ backgroundColor: color }}
        >
          {title}
        </div>

        <p className="mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-bold px-2 py-1 bg-gray-100 border-2 border-black">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              Code
            </a>
          </Button>

          <Button
            size="sm"
            className="bg-black hover:bg-[#333] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            asChild
          >
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

