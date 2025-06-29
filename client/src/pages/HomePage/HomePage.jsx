import HeroSection from "../../sections/HeroSection/HeroSection"
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection"
import EventsSection from "../../sections/EventsSection/EventsSection"
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <EventsSection />
      <TestimonialsSection />

      {/* Words Marquee Section */}
      {/* <section className="relative w-full py-16">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="inline-block text-4xl lg:text-7xl text-text-light/80 dark:text-text-dark/80 animate-marquee font-hero">
            <span> To the Students . For the Students . By the Students . </span>
            <span> To the Students . For the Students . By the Students . </span>
            <span> To the Students . For the Students . By the Students . </span>
            <span> To the Students . For the Students . By the Students . </span>
          </div>
        </div>
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="inline-block text-4xl lg:text-7xl text-text-light/80 dark:text-text-dark/80 animate-marquee-reverse font-hero">
            <span> To the Students . For the Students . By the Students . </span>
            <span> To the Students . For the Students . By the Students . </span>
            <span> To the Students . For the Students . By the Students . </span>
            <span> To the Students . For the Students . By the Students . </span>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default HomePage