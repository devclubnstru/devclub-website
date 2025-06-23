import Button from "../../components/ui/Button/Button"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
            <div className="flex space-y-4 sm:flex-row flex-col items-center justify-center text-6xl font-ballyane">
                {/* <h1 className="sm:text-normal text-6xl font-brand">404</h1> */}
                {/* <div className="w-8 h-12 hidden sm:flex border-r mr-8"></div> */}
                <p className="font-light font-hero text-center sm:w-[60%]">Apologies, We could not find what you we're looking for.</p>
            </div>
            <Link to="/">
                <Button variant="outline">Take me home</Button>
            </Link>
        </div>
    )
}

export default NotFoundPage