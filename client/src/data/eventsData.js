export const events = [
    {
        id: 1,
        yearConducted: "2024",
        eventName: "JS Mastery",
        eventThumbnail: "/images/events/js-mastery-2024.jpeg",
        eventLabels: ["JavaScript", "Browser Extensions", "DOM"].map((t) => ({
            label: t,
            className: "bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100",
        })),
        eventType: "Syntax Summit"
    },
    {
        id: 2,
        yearConducted: "2024",
        eventName: "GitHub Workshop",
        eventThumbnail: "/images/events/github-workshop-2024.JPG",
        eventLabels: ["Talks", "Networking", "Workshops"].map((t) => ({
            label: t,
            className: "bg-yellow-100 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100",
        })),
        eventType: "Syntax Summit"
    },
    {
        id: 3,
        yearConducted: "2024",
        eventName: "ElevateX with Rithwick Sethi",
        eventThumbnail: "/images/events/elevatex-rithwick-sethi.png",
        eventLabels: ["Research", "Learning"].map((t) => ({
            label: t,
            className: "bg-cyan-100 text-cyan-900 dark:bg-cyan-800 dark:text-cyan-100",
        })),
        eventType: "ElevateX"
    },
    {
        id: 4,
        yearConducted: "2024",
        eventName: "HackTheHunt",
        eventThumbnail: "/images/events/hackthehunt-2024.jpg",
        eventLabels: ["CyberSecurity", "HTML/CSS"].map((t) => ({
            label: t,
            className: "bg-purple-300 text-purple-900 dark:bg-purple-800 dark:text-purple-100",
        })),
        eventType: "Treasure Hunt"
    },
];