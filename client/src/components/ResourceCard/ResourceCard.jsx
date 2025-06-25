const isYouTube = (url) => url.includes("youtube.com/embed");


const ResourceCard = (props) => {

    return (
        <article className="dark:bg-background-dark-base bg-background-light-base border border-black/20 dark:border-white/20 rounded-lg flex flex-col sm:p-4 p-2 w-full min-w-0 dark:shadow-none shadow-lg">

            <div className="mb-2">
                <h1 className="sm:text-lg text-sm font-semibold dark:text-white">{props.resourceName}</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="rounded-lg overflow-hidden aspect-video">
                    {isYouTube(props.thumbnailSrc) ? (
                        <iframe
                            className="w-full h-full"
                            src={props.thumbnailSrc}
                            title={props.resourceName}
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <img
                            className="w-full h-full object-cover"
                            src={props.fallbackImage || "/default-thumbnail.png"}
                            alt={`${props.resourceName} thumbnail`}
                        />
                    )}
                </div>
                <h3 className="text-xs font-light dark:text-white/40 text-text-muted-light/50 my-2">{props.channelName}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
                {props.resourceTypes
                    // .filter(Boolean)
                    .map((type, index) => (
                        <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${type.className}`}
                        >
                            {type.label}
                        </span>
                    ))}
            </div>

            <div className="flex flex-wrap gap-2">
                {props.domains
                    // .filter(Boolean)
                    .map((domain, index) => (
                        <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${domain.className}`}
                        >
                            {domain.label}
                        </span>
                    ))}
            </div>
        </article>
    );
};

export default ResourceCard;