import { IconQuoteFilled } from "@tabler/icons-react"

const EventCard = (props) => {
    return (
        <article className="dark:bg-background-dark-base bg-background-light-base border border-black/20 dark:border-white/20 rounded-lg flex flex-col p-4 w-full min-w-0 dark:shadow-none shadow-lg">
            <div className="mb-2 flex space-x-4">
                <img className="rounded-full w-12" src={props.avatar} alt={props.name} />
                <div>
                    <h1 className="sm:text-lg text-sm font-semibold dark:text-white">{props.name} <span className="text-xs">(Class of '{props.graduationYear.slice(2, props.graduationYear.length)})</span> </h1>
                    <h3 className="text-xs font-light dark:text-text-muted-dark text-text-muted-light">{props.role}</h3>
                </div>
            </div>
            <IconQuoteFilled />
            <p className="text-sm text-left my-2">{props.testimonial}</p>
        </article>
    )
}

export default EventCard