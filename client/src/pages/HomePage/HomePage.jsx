import HeroSection from "../../sections/HeroSection/HeroSection"
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection"
import EventsSection from "../../sections/EventsSection/EventsSection"
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection"
import CTASection from "../../sections/CTASection/CTASection"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}

export default HomePage