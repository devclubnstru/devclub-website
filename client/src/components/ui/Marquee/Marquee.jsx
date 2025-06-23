import { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const Marquee = ({ children, speed = 36, direction = "left" }) => {
    const controls = useAnimation()
    const [pausedAt, setPausedAt] = useState(0)
    const marqueeRef = useRef(null)

    const getCurrentX = () => {
        if (marqueeRef.current) {
            const style = window.getComputedStyle(marqueeRef.current)
            const matrix = new WebKitCSSMatrix(style.transform)
            return matrix.m41
        }
        return 0
    }

    const startMarquee = (from = 0) => {
        const width = marqueeRef.current?.scrollWidth / 2 || 0
        const to = direction === "left" ? -width : width

        controls.start({
            x: [from, to],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed * (1 - Math.abs(from) / width),
                    ease: "linear"
                }
            }
        })
    }

    const pauseMarquee = () => {
        controls.stop()
        setPausedAt(getCurrentX())
    }

    const resumeMarquee = () => {
        startMarquee(pausedAt)
    }

    useEffect(() => {
        setTimeout(() => startMarquee(0), 100)
    }, [])

    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Gradient mask - Left */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10 bg-gradient-to-r dark:from-background-dark-base dark:via-background-dark-base/80 from-gray-100 via-gray-100/80 to-transparent" />
            {/* Gradient mask - Right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10 bg-gradient-to-l dark:from-background-dark-base dark:via-background-dark-base/80 from-gray-100 via-gray-100/80 to-transparent" />
            
            <motion.div
                className="flex space-x-6"
                animate={controls}
                style={{ width: "max-content" }}
                ref={marqueeRef}
            >
                {children.map((child, idx) => (
                    <div
                        key={idx}
                        className="w-[320px] sm:w-[360px] h-[200px] flex-shrink-0 flex shadow-lg"
                        onMouseEnter={pauseMarquee}
                        onMouseLeave={resumeMarquee}
                    >
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Marquee