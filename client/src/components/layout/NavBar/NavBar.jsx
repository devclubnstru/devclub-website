import { useState } from "react"
import { useTheme } from "../../../hooks/useTheme"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  IconBrandGithubFilled,
  IconSunFilled,
  IconMoonFilled,
  IconMenu2,
  IconX,
} from "@tabler/icons-react"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navigationItems = [
    { title: "Home", link: "/" },
    { title: "Events", link: "/events" },
    // { title: "Achievements", link: "/achievements" },
    { title: "Projects", link: "/projects" },
    { title: "Resources", link: "/resources" },
    { title: "Team", link: "/team" },
    // { title: "About", link: "/about" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background-light-base/80 dark:bg-background-dark-base/80 border-b border-black/10 dark:border-white/10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-brand text-4xl font-black text-text-light dark:text-text-dark select-none">
            devclub.
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex justify-between space-x-8">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-blue-500 text-text-light/75 dark:text-text-dark/85 transition-all duration-300"
            >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button className="cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? <IconSunFilled /> : <IconMoonFilled />}
          </button>
          <motion.button
            className="lg:hidden text-xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            animate={menuOpen ? "open" : "closed"}
            variants={buttonVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="lg:hidden fixed top-16 left-0 right-0 w-full bg-background-light-base/95 dark:bg-background-dark-base/95 backdrop-blur-md border-t border-black/10 dark:border-white/10 shadow-md z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.ul
              className="flex flex-col px-6 py-4 space-y-4"
              variants={menuVariants}
            >
              {navigationItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    to={item.link}
                    className="dark:text-text-dark text-text-light hover:underline block py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar