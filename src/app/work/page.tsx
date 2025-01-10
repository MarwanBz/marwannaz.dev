"use client"

import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CustomCard } from "@/components/custom-card"
import { FilterBar } from "@/components/filter-bar"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Ticknask",
    description: "Note taking application designed to amplify users' productivity and streamline their workflow and revolutionizes the way you capture ideas, communicate, generate visuals with DALL-E, share notes with friends, organize your schedule with a calendar view, and effortlessly rearrange note content using a dragger.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FTFhcXONG9w63bkcQiSBGiQqJVEZ5s.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "DALL-E", "OpenAI", "LLM", "GPT"],
    category: "web",
    learnMoreUrl: "#"
  },
  {
    id: 2,
    title: "Natsapp",
    description: "End to end encrypted messaging application with a focus on privacy and security, offering a way to chat with friends, send photos, videos, and files.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FTFhcXONG9w63bkcQiSBGiQqJVEZ5s.png",
    technologies: ["Node.js", "DialogFlow", "Firebase", "Express.js", "React.js", "Redux"],
    category: "mobile",
    learnMoreUrl: "#"
  },
  {
    id: 3,
    title: "Nalaso Website",
    description: "A personal website to introduce myself, showcase my work, and to share my thoughts, providing a way to contact me.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FTFhcXONG9w63bkcQiSBGiQqJVEZ5s.png",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "web",
    learnMoreUrl: "#"
  },
  {
    id: 4,
    title: "Dropit",
    description: "All in one file management application. Integrate with Google Drive, Dropbox, and OneDrive.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FTFhcXONG9w63bkcQiSBGiQqJVEZ5s.png",
    technologies: ["Node.js", "React.js", "Redux", "Express.js", "Firebase", "Google Drive", "Dropbox"],
    category: "web",
    learnMoreUrl: "#"
  }
]

export default function WorkPage() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  )

  return (
    <main className="min-h-screen bg-black text-white p-4 flex flex-col items-center justify-start">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-white">
              <ArrowLeft size={20} />
              Back to Profile
            </Button>
          </Link>
          <ThemeToggle />
        </div>
        
        <CustomCard className="p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-white">Work</h1>
          <FilterBar currentFilter={filter} onFilterChange={setFilter} />
          <div className="grid gap-6 mt-8 grid-cols-1">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </CustomCard>
      </div>
    </main>
  )
}

