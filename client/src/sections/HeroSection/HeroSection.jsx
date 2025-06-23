import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Button from "../../components/ui/Button/Button"

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background-light-base dark:bg-background-dark-base transition-colors duration-500 select-none grainy-bg">
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl md:text-9xl font-hero text-text-light dark:text-text-dark mb-4"
                >
                    <p>Innovate</p>
                    <p
                        className="font-black font-ballyane bg-clip-text text-transparent animate-wave-gradient"
                        style={{ backgroundImage: "linear-gradient(270deg, #0ea5e9, #3b82f6, #2563eb, #1e40af, #0ea5e9)" }}
                    >
                        Collaborate.
                    </p>
                    <p>Elevate</p>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg md:text-xl font-body text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto mb-8"
                >
                    DevClub is where creators come together to build and learn.<br className="hidden sm:block" />Join us to explore tech, share ideas, and make cool things.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
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
