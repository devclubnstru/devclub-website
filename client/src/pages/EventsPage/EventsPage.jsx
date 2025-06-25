import EventCard from '../../components/EventCard/EventCard'

const EventsPage = () => {
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
    <div className='h-screen flex items-center flex-col p-2'>
      <div className='text-center p-2'>
        <h1 className="text-3xl mb-2 font-bold">Events</h1>
        <p className="dark:text-text-muted-dark text-text-muted-light">At DevClub, collaboration is at the core of everything we do.<br /> Through events and initiatives, we explore ideas and build them into reality.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide">
        {dummyEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  )
}

export default EventsPage