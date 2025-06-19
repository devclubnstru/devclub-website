import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../components/layout/AppLayout/AppLayout"
import HomePage from "../pages/HomePage/HomePage"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
])

export default routes