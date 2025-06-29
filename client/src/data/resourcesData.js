import { resourceTypeMap } from "./resourceType"
import { resourceDomainMap } from "./resourceDomain";

export const resources = [
    {
        id: 1,
        resourceName: "JavaScript One-Shot",
        channelName: "Bro Code",
        thumbnailSrc: "https://www.youtube.com/embed/lfmg-EJ8gm4?si=PKD53fu23rBoGj8j",
        resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
        domains: ["language", "fsd", "basics"].map(d => resourceDomainMap[d])
    },
    {
        id: 2,
        resourceName: "JavaScript Playlist (Hindi)",
        channelName: "Chai aur Code",
        thumbnailSrc: "https://www.youtube.com/embed/videoseries?si=291MUEBVmEotn3k1&amp;list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
        resourceTypes: ["playlist"].map(r => resourceTypeMap[r]),
        domains: ["language", "fsd", "basics"].map(d => resourceDomainMap[d])
    },
    {
        id: 3,
        resourceName: "HTML/CSS One-Shot",
        channelName: "Bro Code",
        thumbnailSrc: "https://www.youtube.com/embed/HGTJBPNC-Gw?si=NAgPJqnLD7r9AzT_",
        resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
        domains: ["client", "basics"].map(d => resourceDomainMap[d])
    },
    {
        id: 4,
        resourceName: "ReactJS (Hindi)",
        channelName: "Chai Aur Code",
        thumbnailSrc: "https://www.youtube.com/embed/videoseries?si=ri5wc0qyOo8Xu1w_&amp;list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
        resourceTypes: ["playlist"].map(r => resourceTypeMap[r]),
        domains: ["client", "framework"].map(d => resourceDomainMap[d])
    },
    {
        id: 4,
        resourceName: "ReactJS",
        channelName: "Cosden Solutions",
        thumbnailSrc: "https://www.youtube.com/embed/videoseries?si=1YsuQR3vJruSu8LI&amp;list=PLApy4UwQM3UqAkfITNFzlqoD__UI6X5pb",
        resourceTypes: ["playlist"].map(r => resourceTypeMap[r]),
        domains: ["client", "framework"].map(d => resourceDomainMap[d])
    },
    {
        id: 5,
        resourceName: "Design Patterns in ReactJS",
        channelName: "Cosden Solutions",
        thumbnailSrc: "https://www.youtube.com/embed/videoseries?si=tkH1fEOin2errYnQ&amp;list=PLApy4UwQM3Updrw-4mOXTwgsWar9bqk6i",
        resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
        domains: ["client", "framework"].map(d => resourceDomainMap[d])
    },
    {
        id: 6,
        resourceName: "Vanilla Node.js",
        channelName: "Traversy Media",
        thumbnailSrc: "https://www.youtube.com/embed/_1xa8Bsho6A?si=pe69TO8IOi0CqFBu",
        resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
        domains: ["server", "framework"].map(d => resourceDomainMap[d])
    },
    {
        id: 7,
        resourceName: "Node.js Crash Course",
        channelName: "Traversy Media",
        thumbnailSrc: "https://www.youtube.com/embed/32M1al-Y6Ag?si=TQ_XN3EPw5UaQzui",
        resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
        domains: ["server", "framework"].map(d => resourceDomainMap[d])
    },
    {
        id: 8,
        resourceName: "Backend Using JavaScript",
        channelName: "Chai Aur Code",
        thumbnailSrc: "https://www.youtube.com/embed/videoseries?si=iMpM2zq3E5CufJzr&amp;list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
        resourceTypes: ["playlist"].map(r => resourceTypeMap[r]),
        domains: ["server", "framework"].map(d => resourceDomainMap[d])
    },
];