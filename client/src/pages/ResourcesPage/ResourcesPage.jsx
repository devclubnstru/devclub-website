import { motion } from "framer-motion"
import ResourceCard from "../../components/ResourceCard/ResourceCard"
import { resourceTypeMap } from "../../data/resourceType"
import { resourceDomainMap } from "../../data/resourceDomain";

const ResourcesPage = () => {

  const dummyResources = [
    {
      id: 1,
      resourceName: "Mastering React",
      channelName: "Chai aur Code",
      thumbnailSrc: "https://www.youtube.com/embed/Ke90Tje7VS0",
      resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
      domains: ["client"].map(d => resourceDomainMap[d])
    },
  ];

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide px-2 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {dummyResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            variants={cardVariants}
            custom={index}
          >
            <ResourceCard {...resource} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ResourcesPage