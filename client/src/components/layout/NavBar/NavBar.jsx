import { useTheme } from "../../../hooks/useTheme"


const NavBar = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "dark" : "light"}
      </button>
      <p className="text-red-500 dark:text-blue-500">Nigga</p>
    </div>
  )
}

export default NavBar