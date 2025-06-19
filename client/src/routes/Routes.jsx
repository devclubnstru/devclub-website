import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../components/layout/AppLayout/AppLayout"
import Home from "../pages/Home/Home"
import Projects from "../pages/Projects/Projects"
import NotFound from "../pages/NotFound/NotFound"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
])

export default routes 