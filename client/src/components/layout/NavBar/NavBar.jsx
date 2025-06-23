import { useTheme } from "../../../hooks/useTheme"
import { Link } from "react-router-dom"
import {
  IconBrandGithubFilled,
  IconSunFilled,
  IconMoonFilled,
} from "@tabler/icons-react"
import Button from "../../ui/Button/Button"


const NavBar = () => {

  const navigationItems = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Events",
      link: "/events"
    },
    {
      title: "Projects",
      link: "/projects"
    },
    {
      title: "Resources",
      link: "/resources"
    },
    {
      title: "Team",
      link: "/team"
    },
    {
      title: "About",
      link: "/about"
    },
  ]

  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sm:flex hidden justify-between items-center sticky top-0 z-50 w-full backdrop-blur-2xl /backdrop-saturate-200 bg-background-light-base/80 dark:bg-background-dark-base/80 border-b border-black/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] liquid-glass bg-gradient-to-b dark:from-background-light-1/5 dark:to-background-light-1/1">

      {/* <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-[2rem]  bg-gradient-to-b from-white/70 to-white/30 dark:from-background-light-base/5 dark:to-background-dark-2/5 backdrop-blur-[24px] backdrop-saturate-[300%] border border-white/20 dark:border-white/10 /shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 liquid-glass shadow-md"> */}

      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <div>
          <Link to="/">
            <h1 className="font-brand text-5xl font-black text-text-light dark:text-text-dark select-none">
              devclub.
            </h1>
          </Link>
        </div>
        <ul className="flex justify-between space-x-8">
          {
            navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="dark:hover:text-text-dark hover:text-text-light text-text-light/75 dark:text-text-dark/85 transition-all duration-300"
              >
                <li>{item.title}</li>
              </Link>
            ))
          }
        </ul>
        <div className="flex space-x-2">
          <a
            href="https://github.com/devclub-nstru"
            target="_blank"
          >
            {/* <button className="flex dark:bg-background-dark-base border border-black dark:border-white bg-background-light-base dark:hover:bg-background-light-base dark:hover:text-text-light hover:bg-background-dark-base hover:text-text-dark px-4 py-2 rounded-4xl cursor-pointer transition-colors duration-250"></button> */}
            <Button variant="outline">
              <IconBrandGithubFilled /><span>Github</span>
            </Button>
          </a>
          <button className="cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? <IconSunFilled className="cursor-pointer" /> : <IconMoonFilled className="cursor-pointer" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar