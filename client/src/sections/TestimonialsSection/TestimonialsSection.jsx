import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard"
import Marquee from "../../components/ui/Marquee/Marquee"


const dummyTestimonials = [
    {
        id: 1,
        name: "Kevish Sewliya",
        role: "Maven & Frontend Developer",
        avatar: "images/team/class_of_28/kevish_team_image.jpeg",
        testimonial: "DevClub gave me the confidence to build real-world projects and collaborate with amazing people. The community support is unmatched!",
        graduationYear: "2028"
    },
    {
        id: 2,
        name: "Rohan Singh",
        role: "Secretary",
        avatar: "images/team/class_of_28/rohan_team_image.jpeg",
        testimonial: "Building DevClub from scratch has taught me things which I otherwise would not have learnt on my own.",
        graduationYear: "2028"
    },
    {
        id: 3,
        name: "Rishik",
        role: "Maven & Backend Developer",
        avatar: "images/team/class_of_28/rishik_team_image.jpeg",
        testimonial: "The collaborative spirit at DevClub helped me grow as a developer. Highly recommended for anyone passionate about tech.",
        graduationYear: "2028"
    },
    {
        id: 4,
        name: "Hardik Jaiswal",
        role: "Maven & AI/ML Developer",
        avatar: "images/team/class_of_28/hardik_team_image.jpeg",
        testimonial: "Mentoring at DevClub has been a rewarding experience. The enthusiasm and curiosity of the members is inspiring!",
        graduationYear: "2028"
    },
    {
        id: 5,
        name: "Krishna Dave",
        role: "Maven & Web Developer",
        avatar: "images/team/class_of_28/krishna_team_image.jpeg",
        testimonial: "DevClub's hands-on projects and peer learning helped me crack GSoC. The community is always supportive.",
        graduationYear: "2028"
    },
    {
        id: 6,
        name: "Rishav Dewan",
        role: "Executive",
        avatar: "images/team/class_of_28/rishav_team_image.jpeg",
        testimonial: "I love how DevClub brings together people from different backgrounds to solve problems. It's a great place to grow.",
        graduationYear: "2028"
    },
    {
        id: 7,
        name: "Pushpendra Parihar",
        role: "Associate & Web Developer",
        avatar: "images/testimonials/pushpendra_testimonial_image.jpeg",
        testimonial: "Building projects with DevClub taught me teamwork and agile development. The experience was invaluable.",
        graduationYear: "2028"
    },
    {
        id: 8,
        name: "Ananya Narang",
        role: "Associate and Web Developer",
        avatar: "/images/testimonials/ananya_testimonial.jpeg",
        testimonial: "The workshops and ElevateX Masterclasses are also very useful and helps me learn things easily. The community support is also a great motivator.",
        graduationYear: "2028"
    }
]

const TestimonialsSection = () => {
    const marqueeTestimonials = [...dummyTestimonials, ...dummyTestimonials]

    const headingVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section className="flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <motion.div 
                className="flex flex-col items-center justify-center space-y-2"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="text-md w-fit font-black text-center bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-200 dark:to-cyan-500 from-cyan-600 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                    Echoes of DevClub
                </h1>
                <div className="text-center">
                    <p className="text-3xl mb-2 font-semibold">Elevate</p>
                    <p className="dark:text-text-muted-dark text-text-muted-light">
                        At DevClub, our journey is shaped by the people behind it.<br />
                        Hear firsthand from members and mentors who make our community thrive.
                    </p>
                </div>
            </motion.div>
            <div className="py-8 mx-auto container">
                <motion.div 
                    className="flex items-center justify-between mb-8"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="text-xl font-bold">Community Stories</h1>
                    {/* <Link to="/projects">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-cyan-500 text-cyan-600 cursor-pointer">Know More &rarr;</button>
                    </Link> */}
                </motion.div>
                <Marquee speed={58} direction="left">
                    {marqueeTestimonials.map((t, idx) => (
                        <TestimonialCard key={t.id + "-" + idx} {...t} />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default TestimonialsSection