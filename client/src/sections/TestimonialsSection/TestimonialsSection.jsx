import { Link } from "react-router-dom"
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard"
import Marquee from "../../components/ui/Marquee/Marquee"


const dummyTestimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        testimonial: "DevClub gave me the confidence to build real-world projects and collaborate with amazing people. The mentorship and community are unmatched!",
        graduationYear: "2028"
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "UI/UX Designer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        testimonial: "Joining DevClub was the best decision for my design journey. I learned so much and made friends for life!",
        graduationYear: "2028"
    },
    {
        id: 3,
        name: "Rahul Verma",
        role: "Backend Lead",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        testimonial: "The collaborative spirit at DevClub helped me grow as a developer and a leader. Highly recommended for anyone passionate about tech.",
        graduationYear: "2023"
    },
    {
        id: 4,
        name: "Sneha Singh",
        role: "Mentor",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        testimonial: "Mentoring at DevClub has been a rewarding experience. The enthusiasm and curiosity of the members is inspiring!",
        graduationYear: "2023"
    },
    {
        id: 5,
        name: "Vikram Joshi",
        role: "Full Stack Developer",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        testimonial: "DevClub's hands-on projects and peer learning helped me land my first internship. The community is always supportive.",
        graduationYear: "2028"
    },
    {
        id: 6,
        name: "Meera Nair",
        role: "Product Manager",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        testimonial: "I love how DevClub brings together people from different backgrounds to solve real problems. It's a great place to grow.",
        graduationYear: "2023"
    },
    {
        id: 7,
        name: "Siddharth Rao",
        role: "Mobile App Developer",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        testimonial: "Building apps with DevClub taught me teamwork and agile development. The experience was invaluable.",
        graduationYear: "2028"
    },
    {
        id: 8,
        name: "Ananya Gupta",
        role: "Community Lead",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        testimonial: "Organizing events at DevClub has been a highlight of my college life. The energy and passion here are contagious!",
        graduationYear: "2023"
    }
]

const TestimonialsSection = () => {
    const marqueeTestimonials = [...dummyTestimonials, ...dummyTestimonials]

    return (
        <section className="flex flex-col items-center justify-center space-y-4 mb-24 sm:p-2 px-4">
            <div className="flex flex-col items-center justify-center space-y-2">
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
            </div>
            <div className="py-8 mx-auto container">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-bold">Community Stories</h1>
                    <Link to="/projects">
                        <button className="flex text-sm items-center justify-center w-fit font-black text-center bg-gradient-to-r dark:text-cyan-500 text-cyan-600 cursor-pointer">Know More &rarr;</button>
                    </Link>
                </div>
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