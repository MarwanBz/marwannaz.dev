import { Experience } from "@/types";

interface SocialLink {
  platform: string;
  url: string;
}

interface ProfileData {
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
  experiences: Experience[];
  email: string;
  socials: SocialLink[];
  description: string;
  skills: string[];
}

export const profileData: ProfileData = {
  description: "I'm a passionate web developer with expertise in modern web technologies. I specialize in building responsive, user-friendly web applications using React, Next.js, and TypeScript.",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "JavaScript",
    "HTML/CSS",
    "Git",
    "RESTful APIs"
  ],
  email: "",
  socials: [
    { platform: "linkedin", url: "" },
    { platform: "github", url: "" },
    { platform: "twitter", url: "" }
  ],
  githubUrl: "",
  linkedinUrl: "",
  cvUrl: "",
  experiences: []
}
