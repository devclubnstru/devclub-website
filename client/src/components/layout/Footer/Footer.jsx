import { IconBrandDiscordFilled, IconBrandInstagramFilled, IconBrandX } from "@tabler/icons-react"

const Footer = () => {

  const socialLinks = [
    {
      id: 1,
      link: "",
      icon: <IconBrandX className="sm:h-12 sm:w-12 w-8 h-8" />
    },
    {
      id: 2,
      link: "",
      icon: <IconBrandInstagramFilled className="sm:h-12 sm:w-12 w-8 h-8" />
    },
    {
      id: 3,
      link: "",
      icon: <IconBrandDiscordFilled className="sm:h-12 sm:w-12 w-8 h-8" />
    },
  ]

  return (
    <footer>
      Footer
    </footer>
  )
}

export default Footer