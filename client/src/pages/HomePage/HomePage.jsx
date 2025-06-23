import HeroSection from "../../sections/HeroSection/HeroSection"
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection"
import EventsSection from "../../sections/EventsSection/EventsSection"
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection"

const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <ProjectsSection />
      <EventsSection />
      <TestimonialsSection />
    </main>
  )
}

export default HomePage