import { motion } from "framer-motion"
import EventCard from '../../components/EventCard/EventCard'
import { events } from "../../data/eventsData"

const EventsPage = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <div className='h-screen flex items-center flex-col p-2'>
      <motion.div
        className='text-center p-2'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl mb-2 font-bold"
          variants={headingVariants}
        >
          Events
        </motion.h1>
        <motion.p
          className="dark:text-text-muted-dark text-text-muted-light"
          variants={headingVariants}
        >
          At DevClub, collaboration is at the core of everything we do.<br />
          Through events and initiatives, we explore ideas and build them into reality.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide px-2 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            variants={cardVariants}
            custom={index}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default EventsPage