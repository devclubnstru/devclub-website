import { useTheme } from "../../../context/ThemeContext";

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow">
            <span className="text-xl font-semibold">My App</span>
            <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-3 py-2 rounded bg-gray-300 dark:bg-gray-700 transition-colors"
            >
                {theme === "dark" ? (
                    <>
                        <span>Light Mode</span>
                    </>
                ) : (
                    <>
                        <span>Dark Mode</span>
                    </>
                )}
            </button>
        </nav>
    );
};

export default NavBar;
