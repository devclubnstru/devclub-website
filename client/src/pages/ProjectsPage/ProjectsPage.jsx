import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { techStackMap } from '../../data/techStack'

const ProjectsPage = () => {
    const dummyProjects = [
        {
            id: 1,
            yearOfDevelopment: "2024",
            projectName: "CampusConnect",
            projectImage: "https://placehold.co/300x200?text=CampusConnect",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind"].map(t => techStackMap[t]),
            projectLiveLink: "Live",
            projectGitHubLink: "GitHub",
        },
        {
            id: 2,
            yearOfDevelopment: "2023",
            projectName: "DevBoard",
            projectImage: "https://placehold.co/300x200?text=DevBoard",
            techStack: ["Next.js", "Firebase", "Chakra UI"].map(t => techStackMap[t]),
            projectLiveLink: "Live",
            projectGitHubLink: "GitHub",
        },
        {
            id: 3,
            yearOfDevelopment: "2022",
            projectName: "CodeShare",
            projectImage: "https://placehold.co/300x200?text=CodeShare",
            techStack: ["Vue", "Express", "Socket.io"].map(t => techStackMap[t]),
            projectLiveLink: "Live",
            projectGitHubLink: "GitHub",
        },
        {
            id: 4,
            yearOfDevelopment: "2022",
            projectName: "CodeShare",
            projectImage: "https://placehold.co/300x200?text=CodeShare",
            techStack: ["Vue", "Express", "Socket.io"].map(t => techStackMap[t]),
            projectLiveLink: "Live",
            projectGitHubLink: "GitHub",
        },
    ]

    return (
        <div className='h-screen flex items-center flex-col p-2'>
            <div className='text-center p-2'>
                <h1 className="text-3xl mb-2 font-bold">Projects</h1>
                <p className="dark:text-text-muted-dark text-text-muted-light">We love building tools that make life easier and ideas come to life. <br /> At DevClub, it's all about solving real problems through clean, thoughtful tech.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide">
                {dummyProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage