import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { useRef } from "react"
import Button from "../../components/ui/Button/Button"

const HeroSection = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const innovateY = useTransform(scrollYProgress, [0, 1], [0, -30])
    const collaborateY = useTransform(scrollYProgress, [0, 1], [0, -60])
    const elevateY = useTransform(scrollYProgress, [0, 1], [0, -90])
    const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -120])
    const buttonsY = useTransform(scrollYProgress, [0, 1], [0, -150])

    return (
        <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background-light-base dark:bg-background-dark-base transition-colors duration-500 select-none grainy-bg mb-12">
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 w-full h-[130%] fill-[hsl(0,0%,15%)] stroke-[hsl(0,0%,15%)] dark:fill-gray-400/30 dark:stroke-gray-400/80 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] skew-y-12 opacity-35"
            >
                <defs>
                    <pattern
                        id="grid-pattern"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                        x="-1"
                        y="-1"
                    >
                        <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl md:text-9xl font-hero text-text-light dark:text-text-dark mb-4"
                >
                    <motion.p style={{ y: innovateY }}>Innovate</motion.p>
                    <motion.p
                        className="font-black font-ballyane bg-clip-text text-transparent animate-wave-gradient"
                        style={{ 
                            backgroundImage: "linear-gradient(270deg, #0ea5e9, #3b82f6, #2563eb, #1e40af, #0ea5e9)",
                            y: collaborateY
                        }}
                    >
                        Collaborate.
                    </motion.p>
                    <motion.p style={{ y: elevateY }}>Elevate</motion.p>
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{ y: subtitleY }}
                    className="text-lg md:text-xl font-body text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto mb-8"
                >
                    DevClub is where creators come together to build and learn.<br className="hidden sm:block" />Join us to explore tech, share ideas, and make cool things.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{ y: buttonsY }}
                    className="flex space-x-4 justify-center items-center"
                >
                    <Link to="/events">
                        <Button>
                            Events
                        </Button>
                    </Link>
                    <Link to="/projects">
                        <Button variant="outline">
                            View Projects
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
