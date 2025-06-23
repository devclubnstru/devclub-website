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
      title: "About Us",
      link: "/about"
    },
  ]

  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sm:flex hidden justify-between items-center mx-auto sticky top-0 z-50 backdrop-blur-sm backdrop-saturate-150 dark:bg-background-dark-base/40 bg-background-light-base/40 border-b dark:border-white/5 border-black/5">
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
                className="dark:hover:text-text-dark hover:text-text-light text-text-light/75 dark:text-text-dark/85"
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