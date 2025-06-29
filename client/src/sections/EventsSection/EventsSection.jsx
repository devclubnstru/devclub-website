import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import EventCard from "../../components/EventCard/EventCard"
import { events } from "../../data/eventsData"

const EventsSection = () => {

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
        <section className="relative z-10 flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="text-md w-fit font-black text-center bg-gradient-to-r dark:from-green-400 dark:via-amber-200 dark:to-green-400 from-green-600 via-amber-400 to-green-600 bg-clip-text text-transparent">
                    Events we've conducted
                </h1>
                <div className="text-center">
                    <p className="text-3xl mb-2 font-semibold">Collaborate</p>
                    <p className="dark:text-text-muted-dark text-text-muted-light">
                        At DevClub, collaboration is at the core of everything we do.<br /> Through events and initiatives, we explore ideas and build them into reality.
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
                    {events.slice(0, 4).map((event) => (
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