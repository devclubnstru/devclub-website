import ResourceCard from "../../components/ResourceCard/ResourceCard"
import { resourceTypeMap } from "../../data/resourceType"
import { resourceDomainMap } from "../../data/resourceDomain";

const ResourcesPage = () => {

  const dummyResources = [
    {
      id: 1,
      resourceName: "Mastering React",
      channelName: "Chai aur Code",
      thumbnailSrc: "https://www.youtube.com/embed/Ke90Tje7VS0",
      resourceTypes: ["vid"].map(r => resourceTypeMap[r]),
      domains: ["client"].map(d => resourceDomainMap[d])
    },
  ];

  return (
    <div className='h-screen flex items-center flex-col p-2'>
      <div className='text-center p-2'>
        <h1 className="text-3xl mb-2 font-bold">Resources</h1>
        <p className="dark:text-text-muted-dark text-text-muted-light">From beginner guides to advanced tutorials, we&dve handpicked the best resources just for you.<br /> Start learning at your own pace and turn curiosity into real skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto mt-6 scrollbar-hide">
        {dummyResources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </div>
  )
}

export default ResourcesPage