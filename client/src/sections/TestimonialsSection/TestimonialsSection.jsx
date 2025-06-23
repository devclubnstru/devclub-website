import { Link } from "react-router-dom"

const TestimonialsSection = () => {
    return (
        <section className="flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-md w-fit font-black text-center bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-200 dark:to-cyan-500 from-cyan-600 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                    Echoes of DevClub
                </h1>
                <div className="text-center">
                    <p className="text-3xl mb-2 font-semibold">Elevate</p>
                    <p className="dark:text-text-muted-dark text-text-muted-light">
                        At DevClub, our journey is shaped by the people behind it.<br />
                        Hear firsthand from members and mentors who make our community thrive.
                    </p>
                </div>
            </div>
            <div className="py-8 mx-auto container">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-bold">Community Stories</h1>
                    <Link to="/projects">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-cyan-500 text-cyan-600 cursor-pointer">More About Us &rarr;</button>
                    </Link>
                </div>
                {/* <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-2 overflow-x-auto">
                    {dummyProjects.slice(0, 4).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default TestimonialsSection