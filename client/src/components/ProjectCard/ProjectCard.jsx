import { IconWorld, IconBrandGithub } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const ProjectCard = (props) => {
    return (
        <article className="dark:bg-background-dark-base bg-background-light-base border border-black/20 dark:border-white/20 rounded-lg flex flex-col sm:p-4 p-2 w-full min-w-0 dark:shadow-none shadow-lg">
            {/* Top Meta */}
            <div className="mb-2">
                <h3 className="text-xs font-light dark:text-white/40 text-text-muted-light/50">{props.yearOfDevelopment}</h3>
                <h1 className="sm:text-lg text-sm font-semibold dark:text-white">{props.projectName}</h1>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden mb-4">
                <img className="w-full /object-cover" src={props.projectImage} alt={props.projectName} />
            </div>

            {/* Tech Stack Pills */}
            <div className="sm:flex hidden items-center gap-2 flex-wrap mb-4">
                {props.techStack.map((tech, index) => (
                    <p key={index} className={`text-xs px-2 py-1 rounded-full font-medium ${tech.className}`}>
                        {tech.label}
                    </p>
                ))}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center mt-auto pt-2 text-xs min-w-10">
                <Link className="flex items-center gap-1">
                    {props.projectLiveLink}
                    <IconWorld className="w-4 h-4 dark:text-white/60" />
                </Link>
                <Link className="flex items-center gap-1">
                    {props.projectGitHubLink}
                    <IconBrandGithub className="w-4 h-4 dark:text-white/60" />
                </Link>
            </div>
        </article>
    )
}

export default ProjectCard
