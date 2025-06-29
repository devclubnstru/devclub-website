import { techStackMap } from './techStack'

export const projects = [
        {
            id: 1,
            yearOfDevelopment: "2024",
            projectName: "NXTUP",
            projectImage: "/images/projects/nxtup.png",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind", "Express"].map(t => techStackMap[t]),
            projectLiveLink: "https://nxtup.in",
            projectGitHubLink: "https://github.com/devclub-nstru/NXTUP",
        },
        {
            id: 2,
            yearOfDevelopment: "2025",
            projectName: "Ripplex",
            projectImage: "https://opengraph.githubassets.com/54c6dafcd9f93d895328fdc57409345555ea517c7c4d4ad9b75d0a4208404735/devclub-nstru/ripplex",
            techStack: ["React", "TypeScript"].map(t => techStackMap[t]),
            projectLiveLink: "Live",
            projectGitHubLink: "https://github.com/devclub-nstru/ripplex",
        },
        {
            id: 3,
            yearOfDevelopment: "2025",
            projectName: "DeskBuddy",
            projectImage: "/images/projects/desk-buddy.png",
            techStack: ["React", "MongoDB", "Tailwind", "Node.js", "Express"].map(t => techStackMap[t]),
            projectLiveLink: "https://desk-buddy.vercel.app/",
            projectGitHubLink: "https://github.com/devclub-nstru/DeskBuddy-Client",
        },
        {
            id: 4,
            yearOfDevelopment: "2024",
            projectName: "DCODE Platform v1",
            projectImage: "/images/projects/dcode-platform-v1.png",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind", "Express"].map(t => techStackMap[t]),
            projectLiveLink: "Live",
            projectGitHubLink: "GitHub",
        },
    ]