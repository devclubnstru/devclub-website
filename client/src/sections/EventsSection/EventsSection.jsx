import { Link } from "react-router-dom"
import EventCard from "../../components/EventCard/EventCard"

const EventsSection = () => {

    const dummyEvents = [
        {
            id: 1,
            yearConducted: "2024",
            eventName: "HackHorizon",
            eventThumbnail: "https://placehold.co/300x200?text=HackHorizon",
            eventLabels: ["Hackathon", "AI", "Web3"].map((t) => ({
                label: t,
                className: "bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100",
            })),
            eventType: "ElevateX"
        },
        {
            id: 2,
            yearConducted: "2023",
            eventName: "DevSummit",
            eventThumbnail: "https://placehold.co/300x200?text=DevSummit",
            eventLabels: ["Talks", "Networking", "Workshops"].map((t) => ({
                label: t,
                className: "bg-yellow-100 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100",
            })),
            eventType: "ByteQuest"
        },
        {
            id: 3,
            yearConducted: "2023",
            eventName: "CodeSprint",
            eventThumbnail: "https://placehold.co/300x200?text=CodeSprint",
            eventLabels: ["Competitive", "DSA", "CP"].map((t) => ({
                label: t,
                className: "bg-cyan-100 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",
            })),
            eventType: "Syntax Summit"
        },
        {
            id: 4,
            yearConducted: "2022",
            eventName: "Buildathon",
            eventThumbnail: "https://placehold.co/300x200?text=Buildathon",
            eventLabels: ["Design", "No-Code", "Product"].map((t) => ({
                label: t,
                className: "bg-purple-300 text-purple-900 dark:bg-purple-800 dark:text-purple-100",
            })),
            eventType: "Syntax Summit"
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-md w-fit font-black text-center bg-gradient-to-r dark:from-green-400 dark:via-amber-200 dark:to-green-400 from-green-600 via-amber-400 to-green-600 bg-clip-text text-transparent">
                    Events we've conducted
                </h1>
                <div className="text-center">
                    <p className="text-3xl mb-2 font-semibold">Collaborate</p>
                    <p className="dark:text-text-muted-dark text-text-muted-light">
                        At DevClub, collaboration is at the core of everything we do.<br /> Through events and initiatives, we explore ideas and build them into reality.
                    </p>
                </div>
            </div>
            <div className="py-8 mx-auto container">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-bold">Featured Events</h1>
                    <Link to="/events">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-green-700 text-green-600 cursor-pointer">All Events &rarr;</button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-2 overflow-x-auto">
                    {dummyEvents.slice(0, 4).map((project) => (
                        <EventCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventsSection