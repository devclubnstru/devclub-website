import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react"
import ResourceCard from "../../components/ResourceCard/ResourceCard"
import { resources } from "../../data/resourcesData"

const ResourcesPage = () => {
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
          Resources
        </motion.h1>
        <motion.p 
          className="dark:text-text-muted-dark text-text-muted-light"
          variants={headingVariants}
        >
          From beginner guides to advanced tutorials, we've handpicked the best resources just for you.<br /> 
          Start learning at your own pace and turn curiosity into real skills.
        </motion.p>
      </motion.div>
      
      <motion.div 
        ref={scrollContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 px-2 py-8 overflow-y-scroll max-h-[70vh] scrollbar-hide"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onScroll={handleScroll}
        onLoad={handleScroll}
      >
        {resources.map((resource, index) => (
          <motion.div
            key={resource.id}
            variants={cardVariants}
            custom={index}
          >
            <ResourceCard {...resource} />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Buttons */}
      {showScrollButtons && (
        <>
          <button
            onClick={scrollUp}
            className="fixed top-1/2 right-4 transform -translate-y-12 text-inherit p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10 border"
            aria-label="Scroll up"
          >
            <IconChevronUp size={16} />
          </button>
          
          <button
            onClick={scrollDown}
            className="fixed top-1/2 right-4 transform translate-y-12 text-inherit p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10 border"
            aria-label="Scroll down"
          >
            <IconChevronDown size={16} />
          </button>
        </>
      )}
    </div>
  )
}

export default ResourcesPage