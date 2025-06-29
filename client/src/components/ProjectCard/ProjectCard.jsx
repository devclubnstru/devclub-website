import { IconWorld, IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

const ProjectCard = (props) => {
    const cardRef = useRef(null)
    const [gradientPos, setGradientPos] = useState(null)
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const xPercent = (x / rect.width) * 100
        const yPercent = (y / rect.height) * 100
        setGradientPos({ x: `${xPercent}%`, y: `${yPercent}%` })

        // Mouse-as-weight logic: heavier pull the farther from center
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const offsetX = x - centerX
        const offsetY = y - centerY
        const maxRotate = 12

        const rotateY = (offsetX / centerX) * maxRotate
        const rotateX = -(offsetY / centerY) * maxRotate

        setRotation({ rotateX, rotateY })
    }

    const handleMouseLeave = () => {
        setGradientPos(null)
        setRotation({ rotateX: 0, rotateY: 0 })
    }

    const backgroundStyle = gradientPos
        ? {
            background: `radial-gradient(circle at ${gradientPos.x} ${gradientPos.y}, rgba(255,255,255,0.08), transparent 70%)`,
        }
        : {}

    return (
        <div style={{ perspective: "1000px" }}>
            <motion.article
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.015 }}
                animate={{ rotateX: rotation.rotateX, rotateY: rotation.rotateY }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="relative rounded-lg overflow-hidden dark:bg-background-dark-base bg-background-light-base border border-black/20 dark:border-white/20 flex flex-col sm:p-4 p-2 w-full min-w-0 dark:shadow-none shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    ...backgroundStyle,
                }}
            >
                {/* Top Meta */}
                <div className="mb-2 z-10">
                    <h3 className="text-xs font-light dark:text-white/40 text-text-muted-light/50">
                        {props.yearOfDevelopment}
                    </h3>
                    <a href={props.projectLiveLink} className="flex items-center space-x-2">
                        <h1 className="sm:text-lg text-sm font-semibold dark:text-white">{props.projectName}</h1>
                        <IconArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Image */}
                <div className="rounded-lg overflow-hidden mb-4 z-10">
                    <img className="w-[350px] h-[200px] object-cover" src={props.projectImage} alt={props.projectName} />
                </div>

                {/* Tech Stack Pills */}
                <div className="sm:flex hidden items-center gap-1 flex-wrap mb-4 z-10">
                    {props.techStack.map((tech, index) => (
                        <p key={index} className={`text-xs px-2 py-1 rounded-full font-medium ${tech.className}`}>
                            {tech.label}
                        </p>
                    ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto pt-2 text-xs min-w-10 z-10">
                    {/* <Link className="flex items-center gap-1">
                        {props.projectLiveLink}
                        <IconWorld className="w-4 h-4 dark:text-white/60" />
                    </Link> */}
                    <a href={props.projectGitHubLink} className="flex items-center gap-1">
                        <h3>Code</h3>
                        <IconBrandGithub className="w-4 h-4 dark:text-white/60" />
                    </a>
                </div>
            </motion.article>
        </div>
    )
}

export default ProjectCard