import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react"

const TeamCard = (props) => {
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

    const getSocialIcon = (platform) => {
        switch (platform) {
            case 'github':
                return <IconBrandGithub className="w-4 h-4" />
            case 'linkedin':
                return <IconBrandLinkedin className="w-4 h-4" />
            case 'twitter':
                return <IconBrandTwitter className="w-4 h-4" />
            case 'youtube':
                return <IconBrandYoutube className="w-4 h-4" />
            default:
                return <IconWorld className="w-4 h-4" />
        }
    }

    return (
        <div style={{ perspective: "1000px" }}>
            <motion.article
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX: rotation.rotateX, rotateY: rotation.rotateY }}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="relative rounded-lg overflow-hidden dark:bg-background-dark-base bg-background-light-base border border-black/20 dark:border-white/20 flex flex-col sm:p-6 p-4 w-full h-105 min-w-0 dark:shadow-none shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    ...shimmerStyle,
                }}
            >
                {/* Avatar */}
                <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/30 dark:border-blue-400/30">
                        <img 
                            className="w-full h-full object-cover" 
                            src={props.avatar} 
                            alt={props.name}
                        />
                    </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-3">
                    <h1 className="text-lg font-semibold dark:text-white mb-1">
                        {props.name}
                    </h1>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {props.role}
                    </p>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                        Class of {props.graduationYear}
                    </p>
                </div>

                {/* Bio */}
                <div className="flex-grow mb-4">
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center leading-relaxed line-clamp-4">
                        {props.bio}
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {props.skills?.slice(0, 3).map((skill, index) => (
                        <span 
                            key={index} 
                            className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                    {props.skills?.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                            +{props.skills.length - 3}
                        </span>
                    )}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-auto">
                    {props.social && Object.entries(props.social).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 text-text-muted-light dark:text-text-muted-dark hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {getSocialIcon(platform)}
                        </a>
                    ))}
                </div>
            </motion.article>
        </div>
    )
}

export default TeamCard