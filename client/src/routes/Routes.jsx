import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../components/layout/AppLayout/AppLayout"
import HomePage from "../pages/HomePage/HomePage"
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage"
import AboutPage from "../pages/AboutPage/AboutPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import TeamPage from "../pages/TeamPage/TeamPage"
import ResourcesPages from "../pages/ResourcesPage/ResourcesPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/projects",
                element: <ProjectsPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/events",
                element: <EventsPage />
            },
            {
                path: "/team",
                element: <TeamPage />
            },
            {
                path: "/resources",
                element: <ResourcesPages />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
])

export default routes