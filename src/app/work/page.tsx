"use client"

// import { CustomCard } from "@/components/custom-card"
import { FilterBar } from "@/components/filter-bar"
// import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Leapat Web App",
    description: "Youth-led tech initiative aims to create digital transformation in culture, art, education, economy, and more.",
    imageUrl: "/assets/leapat.png",
    technologies: ["NextJS", "Tailwind CSS", "Supabase"],
    category: "web",
    githubUrl: "https://github.com/leapat-mukalla/leapat/",
    liveUrl: "https://leapat.org"
  },
  {
    id: 2,
    title: "Deemat Mobile App",
    description: "Mobile application intended for children and parents, offering audio stories and visual stories.",
    imageUrl: "/assets/deemat1.jpg",
    technologies: ["NextJS", "NextUI", "React Native", "Expo", "i18Next", "NodeJS", "ExpressJS", "PrismaORM", "PostgreSQL"],
    category: "mobile",
    // githubUrl: "https://github.com/leapat-mukalla/deemat",
    liveUrl: "https://apps.apple.com/in/app/deemat-%D8%AF%D9%8A%D9%85%D8%A7%D8%AA/id6467549633"
  },
  {
    id: 3,
    title: "MIS Pay Web App",
    description: "A Website showcasing MISpay's \"Shop Now, Pay Later\" service, featured stores, and merchant solutions.",
    imageUrl: "/assets/misPay.png",
    technologies: ["NextJS", "Tailwind CSS", "Shadcn", "i18Next", "TypeScript"],
    category: "web",
    // githubUrl: "https://github.com/leapat-mukalla/mis-pay",
    // liveUrl: "https://mispay.co"
  }
]

export default function WorkPage() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  )

  return (
    <main className="min-h-screen p-4 pt-44 flex flex-col items-center justify-start">
      <div className="w-full max-w-6xl">
        <div className="p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-white">Work</h1>
          <FilterBar currentFilter={filter} onFilterChange={setFilter} />
          <div className="grid gap-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
