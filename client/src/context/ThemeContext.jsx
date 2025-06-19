import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedPreference = localStorage.getItem("theme");
        const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setTheme(savedPreference || systemPreference);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
