import { motion } from "framer-motion"
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <div className='h-screen flex items-center flex-col p-2'>
            <motion.div 
                className='text-center p-2'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className="text-3xl mb-2 font-bold"
                    variants={headingVariants}
                >
                    Projects
                </motion.h1>
                <motion.p 
                    className="dark:text-text-muted-dark text-text-muted-light"
                    variants={headingVariants}
                >
                    We love building tools that make life easier and ideas come to life. <br /> 
                    At DevClub, it's all about solving real problems through clean, thoughtful tech.
                </motion.p>
            </motion.div>
            
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide px-2 py-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {dummyProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        custom={index}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ProjectsPage