import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen dark:bg-black">
            <motion.img
                src="/images/mascot.svg"
                alt=""
                animate={{ y: [0, -30, 0] }}
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />
            <div className="text-7xl font-bold text-center">
                <p>
                    <span className="bg-gradient-to-r from-primary-blue via-pink-500 to-primary-red bg-clip-text text-transparent">
                        Innovate.
                    </span>{" "}
                    <span className="italic text-stroke-3">
                        Collaborate
                    </span>{". "}
                    <span className="bg-gradient-to-r from-primary-blue via-pink-500 to-primary-red bg-clip-text text-transparent">
                        Elevate.
                    </span>
                </p>
            </div>
            <Link>
                <button>
                    Events
                </button>
            </Link>
            <button>Projects</button>
        </section>
    )
}

export default HeroSection