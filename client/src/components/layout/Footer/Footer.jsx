import { IconBrandDiscordFilled, IconBrandInstagramFilled, IconBrandLinkedin, IconBrandGithub, IconMail } from "@tabler/icons-react"
import { motion } from "framer-motion"

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      link: "https://www.instagram.com/devclub.nstru",
      icon: <IconBrandInstagramFilled className="opacity-70 group-hover:opacity-100 transition-opacity" aria-label="Instagram" height="60%" width="60%" />
    },
    {
      id: 2,
      link: "https://discord.com/invite/F2a9ceq7ss",
      icon: <IconBrandDiscordFilled className="opacity-70 group-hover:opacity-100 transition-opacity" aria-label="Discord" height="60%" width="60%" />
    },
    {
      id: 3,
      link: "https://www.linkedin.com/company/dev-club-nstru",
      icon: <IconBrandLinkedin className="opacity-70 group-hover:opacity-100 transition-opacity" aria-label="LinkedIn" height="60%" width="60%" />
    },
    {
      id: 4,
      link: "https://github.com/devclub-nstru",
      icon: <IconBrandGithub className="opacity-70 group-hover:opacity-100 transition-opacity" aria-label="GitHub" height="60%" width="60%" />
    },
    {
      id: 5,
      link: "mailto:softwaredevg.club@rishihood.edu.in",
      icon: <IconMail className="opacity-70 group-hover:opacity-100 transition-opacity" aria-label="GitHub" height="60%" width="60%" />
    },
  ]

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <footer className="relative min-h-[45vh] bg-white dark:bg-[#090909] overflow-hidden border-t-2 border-dashed sm:mt-24">
      <motion.div 
        className="flex flex-col md:flex-row gap-8 px-6 sm:px-8 md:px-12 lg:px-20 py-8 justify-between items-start z-10 relative w-full max-w-7xl mx-auto"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInVariants}>
          <h3 className="text-2xl font-bold mb-4">DevClub</h3>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark max-w-xs">
            Empowering students through code and creativity since 2023.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-start"
          variants={fadeInVariants}
        >
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex flex-wrap gap-4 relative">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 sm:size-12 md:size-14 border border-stone-400 dark:border-stone-700 flex justify-center items-center rounded-lg cursor-pointer group dark:hover:border-stone-100 hover:border-stone-700 transition-colors"
                tabIndex="0"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute font-extrabold text-[20vh] sm:text-[30vh] md:text-[40vh] lg:text-[44vh] left-0 right-0 -bottom-[50%] md:-bottom-[70%] text-center select-none pointer-events-none text-black dark:text-gray-100/80"
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        DevClub
      </motion.div>
    </footer>
  )
}

export default Footer