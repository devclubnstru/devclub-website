import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import EventCard from "../../components/EventCard/EventCard"

const EventsSection = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Parallax transforms for text elements only
    const conductedTextY = useTransform(scrollYProgress, [0, 1], [0, -30])
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -60])
    const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -90])

    const dummyEvents = [
        {
            id: 1,
            yearConducted: "2024",
            eventName: "HackHorizon",
            eventThumbnail: "https://placehold.co/300x200?text=HackHorizon",
            eventLabels: ["Hackathon", "AI", "Web3"].map((t) => ({
                label: t,
                className: "bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100",
            })),
            eventType: "ElevateX"
        },
        {
            id: 2,
            yearConducted: "2023",
            eventName: "DevSummit",
            eventThumbnail: "https://placehold.co/300x200?text=DevSummit",
            eventLabels: ["Talks", "Networking", "Workshops"].map((t) => ({
                label: t,
                className: "bg-yellow-100 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100",
            })),
            eventType: "ByteQuest"
        },
        {
            id: 3,
            yearConducted: "2023",
            eventName: "CodeSprint",
            eventThumbnail: "https://placehold.co/300x200?text=CodeSprint",
            eventLabels: ["Competitive", "DSA", "CP"].map((t) => ({
                label: t,
                className: "bg-cyan-100 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",
            })),
            eventType: "Syntax Summit"
        },
        {
            id: 4,
            yearConducted: "2022",
            eventName: "Buildathon",
            eventThumbnail: "https://placehold.co/300x200?text=Buildathon",
            eventLabels: ["Design", "No-Code", "Product"].map((t) => ({
                label: t,
                className: "bg-purple-300 text-purple-900 dark:bg-purple-800 dark:text-purple-100",
            })),
            eventType: "Syntax Summit"
        },
    ];

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
        <section ref={ref} className="relative z-10 flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h1 
                    className="text-md w-fit font-black text-center bg-gradient-to-r dark:from-green-400 dark:via-amber-200 dark:to-green-400 from-green-600 via-amber-400 to-green-600 bg-clip-text text-transparent"
                    style={{ y: conductedTextY }}
                >
                    Events we've conducted
                </motion.h1>
                <div className="text-center">
                    <motion.p 
                        className="text-3xl mb-2 font-semibold"
                        style={{ y: titleY }}
                    >
                        Collaborate
                    </motion.p>
                    <motion.p 
                        className="dark:text-text-muted-dark text-text-muted-light"
                        style={{ y: subtitleY }}
                    >
                        At DevClub, collaboration is at the core of everything we do.<br /> Through events and initiatives, we explore ideas and build them into reality.
                    </motion.p>
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
                    <h1 className="text-xl font-bold">Featured Events</h1>
                    <Link to="/events">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-green-700 text-green-600 cursor-pointer">All Events &rarr;</button>
                    </Link>
                </motion.div>
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-2 overflow-x-auto py-6 px-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {dummyEvents.slice(0, 4).map((event) => (
                        <motion.div
                            key={event.id}
                            variants={cardVariants}
                        >
                            <EventCard {...event} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default EventsSection