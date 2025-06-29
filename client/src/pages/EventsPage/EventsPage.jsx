import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react"
import EventCard from '../../components/EventCard/EventCard'
import { events } from "../../data/eventsData"

const EventsPage = () => {
  const scrollContainerRef = useRef(null)
  const [showScrollButtons, setShowScrollButtons] = useState(false)

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

  const scrollUp = () => {
    scrollContainerRef.current?.scrollBy({
      top: -300,
      behavior: 'smooth'
    })
  }

  const scrollDown = () => {
    scrollContainerRef.current?.scrollBy({
      top: 300,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container
      setShowScrollButtons(scrollHeight > clientHeight)
    }
  }

  return (
    <div className='h-screen flex items-center flex-col p-2 relative'>
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
        ref={scrollContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide px-2 py-8 overflow-y-scroll max-h-[70vh]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onScroll={handleScroll}
        onLoad={handleScroll}
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

      {/* Scroll Buttons */}
      {showScrollButtons && (
        <>
          <button
            onClick={scrollUp}
            className="fixed top-1/2 right-4 transform -translate-y-12 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Scroll up"
          >
            <IconChevronUp size={16} />
          </button>
          
          <button
            onClick={scrollDown}
            className="fixed top-1/2 right-4 transform translate-y-12 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Scroll down"
          >
            <IconChevronDown size={16} />
          </button>
        </>
      )}
    </div>
  )
}

export default EventsPage