import { techStackMap } from "../../data/techStack"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { Link } from "react-router-dom"

const ProjectsSection = () => {
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
        <section className="flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-md w-fit font-black text-center bg-gradient-to-r dark:from-violet-500 dark:to-pink-300 from-violet-800 to-pink-500 bg-clip-text text-transparent">
                    Projects we've worked on
                </h1>
                <div className="text-center">
                    <h2 className="text-3xl mb-2 font-semibold">Innovate</h2>
                    <p className="dark:text-text-muted-dark text-text-muted-light">
                        We love building tools that make life easier and ideas come to life.
                        <br />
                        At DevClub, it's all about solving real problems through clean, thoughtful tech.
                    </p>
                </div>
            </div>
            <div className="py-8 mx-auto container">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-bold">Featured Projects</h1>
                    <Link to="/projects">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-violet-500 text-violet-800 cursor-pointer">All Projects &rarr;</button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-2 overflow-x-auto py-4">
                    {dummyProjects.slice(0, 4).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection