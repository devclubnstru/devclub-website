import Button from "../../components/ui/Button/Button"
import {
    IconBrandInstagram,
    IconBrandDiscord,
    IconBrandX,
    IconBrandGithub,
    IconBrandLinkedin
} from "@tabler/icons-react"

const CTASection = () => {
    return (
        <section className="relative flex items-center flex-col gap-6 py-12 min-h-[400px] sm:min-h-[500px]">
            <IconBrandInstagram
                className="absolute top-6 left-4 w-10 h-10 text-black dark:text-white opacity-20 pointer-events-none md:hidden"
                style={{ transform: "rotate(-12deg)" }}
            />
            <IconBrandX
                className="absolute top-6 right-10 w-10 h-10 text-black dark:text-white opacity-20 pointer-events-none md:hidden"
                style={{ transform: "rotate(12deg)" }}
            />
            <IconBrandInstagram
                className="absolute top-32 right-4 w-12 h-12 text-black dark:text-white opacity-20 pointer-events-none md:hidden"
                style={{ transform: "rotate(12deg)" }}
            />
            <IconBrandX
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 text-black dark:text-white opacity-20 pointer-events-none md:hidden"
                style={{ transform: "rotate(8deg)" }}
            />
            <IconBrandDiscord
                className="absolute bottom-32 left-1/8 -translate-x-1/2 w-12 h-12 text-black dark:text-white opacity-20 pointer-events-none md:hidden"
                style={{ transform: "rotate(8deg)" }}
            />
            <IconBrandDiscord
                className="absolute bottom-8 right-4 w-10 h-10 text-black dark:text-white opacity-20 pointer-events-none md:hidden"
                style={{ transform: "rotate(-10deg)" }}
            />

            <div className="hidden md:block">
                <IconBrandInstagram
                    className="absolute top-8 left-8 w-16 h-16 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(-18deg)" }}
                />
                <IconBrandDiscord
                    className="absolute top-12 right-16 w-20 h-20 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(12deg)" }}
                />
                <IconBrandX
                    className="absolute top-1/3 left-4 w-14 h-14 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(-8deg)" }}
                />
                <IconBrandGithub
                    className="absolute top-1/2 right-8 w-16 h-16 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(16deg)" }}
                />
                <IconBrandLinkedin
                    className="absolute top-[45%] left-1/4 w-12 h-12 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(-24deg)" }}
                />
                <IconBrandInstagram
                    className="absolute bottom-16 left-24 w-14 h-14 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(10deg)" }}
                />
                <IconBrandDiscord
                    className="absolute bottom-12 right-24 w-16 h-16 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(-12deg)" }}
                />
                <IconBrandX
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 text-black dark:text-white opacity-20 pointer-events-none"
                    style={{ transform: "rotate(6deg)" }}
                />
            </div>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto font-bold z-10 leading-tight">
                Intrigued by what we do? Become a part of our community!
            </h1>
            <div className="flex gap-4 sm:flex-row flex-col items-center justify-center z-10">
                <a href="https://www.linkedin.com/company/dev-club-nstru/" target="_blank" rel="noopener noreferrer">
                    <Button>Our LinkedIn</Button>
                </a>
                <a href="https://discord.com/invite/F2a9ceq7ss" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Join Our Discord</Button>
                </a>
            </div>
        </section>
    )
}

export default CTASection