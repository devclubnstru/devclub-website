import { motion } from "framer-motion"
import { useRef, useState } from "react"

const EventCard = (props) => {
    const cardRef = useRef(null)
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 })
    const [gradientPos, setGradientPos] = useState(null)

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const offsetX = x - centerX
        const offsetY = y - centerY
        const maxRotate = 12

        setRotation({
            rotateX: -(offsetY / centerY) * maxRotate,
            rotateY: (offsetX / centerX) * maxRotate,
        })

        setGradientPos({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
        })
    }

    const handleMouseLeave = () => {
        setRotation({ rotateX: 0, rotateY: 0 })
        setGradientPos(null)
    }

    const shimmerStyle = gradientPos
        ? {
              background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, rgba(255, 255, 255, 0.08), transparent 60%)`,
          }
        : {}

    return (
        <div style={{ perspective: "1000px" }}>
            <motion.article
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX: rotation.rotateX, rotateY: rotation.rotateY }}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="relative rounded-lg overflow-hidden dark:bg-background-dark-base bg-background-light-base border border-black/20 dark:border-white/20 flex flex-col sm:p-4 p-2 w-full min-w-0 dark:shadow-none shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    ...shimmerStyle,
                }}
            >
                {/* Top Meta */}
                <div className="mb-2">
                    <h3 className="text-xs font-light dark:text-white/40 text-text-muted-light/50">
                        {props.yearConducted}
                    </h3>
                    <h1 className="sm:text-lg text-sm font-semibold dark:text-white">
                        {props.eventName}
                    </h1>
                </div>

                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                    <img className="w-full object-cover" src={props.eventThumbnail} alt={props.eventName} />
                </div>

                <p className="text-xs text-center my-2 text-text-muted-light/70 dark:text-text-muted-dark/70">
                    {props.eventType}
                </p>

                {/* Tech Stack Pills */}
                <div className="sm:flex hidden items-center gap-2 flex-wrap mb-4">
                    {props.eventLabels.map((label, index) => (
                        <p key={index} className={`text-xs px-2 py-1 rounded-full font-medium ${label.className}`}>
                            {label.label}
                        </p>
                    ))}
                </div>

                {/* Links - Coming Soon */}
                {/* <div className="flex justify-between items-center mt-auto pt-2 text-xs min-w-10">
                    <Link className="flex items-center gap-1">
                        {props.projectLiveLink}
                        <IconWorld className="w-4 h-4 dark:text-white/60" />
                    </Link>
                    <Link className="flex items-center gap-1">
                        {props.projectGitHubLink}
                        <IconBrandGithub className="w-4 h-4 dark:text-white/60" />
                    </Link>
                </div> */}
            </motion.article>
        </div>
    )
}

export default EventCard