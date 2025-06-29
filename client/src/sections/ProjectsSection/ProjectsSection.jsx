import { techStackMap } from "../../data/techStack"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

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

    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <section className="flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <motion.div 
                className="flex flex-col items-center justify-center space-y-2"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
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
            </motion.div>
            <div className="py-8 mx-auto container">
                <motion.div 
                    className="flex items-center justify-between mb-8"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="text-xl font-bold">Featured Projects</h1>
                    <Link to="/projects">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-violet-500 text-violet-800 cursor-pointer">All Projects &rarr;</button>
                    </Link>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-2 overflow-x-auto py-6 px-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {dummyProjects.slice(0, 4).map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectsSection