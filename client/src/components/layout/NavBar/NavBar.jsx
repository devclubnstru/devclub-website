import { useTheme } from "../../../hooks/useTheme"
import { Link } from "react-router-dom"
import { IconBrandGithubFilled, IconSunFilled, IconMoonFilled } from "@tabler/icons-react"


const NavBar = () => {

  const navigationItems = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Events",
      link: "/"
    },
    {
      title: "Projects",
      link: "/"
    },
    {
      title: "Resources",
      link: "/"
    },
    {
      title: "Team",
      link: "/"
    },
    {
      title: "Who built us?",
      link: "/"
    },
  ]

  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 border-gray-100/50 shadow-lg bg-white/80 backdrop-blur-sm z-50 border-b p-4">
      <div className="w-full mx-auto lg:container lg:mx-auto px-4 md:px-12 h-full flex justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center flex-col ">
            {/* <img src="/images/devclub_logo.svg" alt="" /> */}
            <h2 className="text-primary-red text-lg"><span className="text-primary-blue">nst x</span> ru</h2>
            <h1 className="font-bold text-5xl -mt-2">devclub.</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center gap-8">
              {
                navigationItems.map((item) => (
                  <Link to={item.link}>
                    <li>{item.title}</li>
                  </Link>
                ))
              }
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className="flex items-center gap-2">
                <IconBrandGithubFilled />
                <span>GitHub</span>
              </button>
            </Link>
            <button onClick={toggleTheme}>
              {theme === "dark" ? <IconSunFilled /> : <IconMoonFilled />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar