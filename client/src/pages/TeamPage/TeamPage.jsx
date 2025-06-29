import { motion } from "framer-motion"
import { useState } from "react"
import TeamCard from "../../components/TeamCard/TeamCard"

const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState("All Years")

  const teamMembers = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "President",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Leading DevClub with passion for innovation and community building. Full-stack developer with 3+ years experience.",
      skills: ["Leadership", "React", "Node.js", "Community Management"],
      social: {
        github: "https://github.com/arjunmehta",
        linkedin: "https://linkedin.com/in/arjunmehta",
        twitter: "https://twitter.com/arjunmehta"
      },
      graduationYear: "2025",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Vice President",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Passionate about creating inclusive tech spaces and mentoring newcomers. UI/UX designer and frontend developer.",
      skills: ["UI/UX Design", "React", "Figma", "Mentorship"],
      social: {
        github: "https://github.com/priyasharma",
        linkedin: "https://linkedin.com/in/priyasharma",
        dribbble: "https://dribbble.com/priyasharma"
      },
      graduationYear: "2025",
      yearsActive: ["2023", "2024", "2025"]
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Technical Lead",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      bio: "Backend enthusiast who loves building scalable systems. Organizes hackathons and technical workshops.",
      skills: ["Python", "Django", "PostgreSQL", "AWS", "Docker"],
      social: {
        github: "https://github.com/rahulverma",
        linkedin: "https://linkedin.com/in/rahulverma"
      },
      graduationYear: "2024",
      yearsActive: ["2023", "2024"]
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Events Coordinator",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Event planning wizard who brings amazing speakers and creates memorable experiences for the community.",
      skills: ["Event Management", "Public Speaking", "Marketing", "Networking"],
      social: {
        linkedin: "https://linkedin.com/in/snehapatel",
        twitter: "https://twitter.com/snehapatel"
      },
      graduationYear: "2024",
      yearsActive: ["2023", "2024"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Web Developer",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Frontend specialist focused on creating beautiful, accessible web experiences. React and Vue.js expert.",
      skills: ["JavaScript", "React", "Vue.js", "CSS", "Accessibility"],
      social: {
        github: "https://github.com/vikramsingh",
        linkedin: "https://linkedin.com/in/vikramsingh",
        portfolio: "https://vikramsingh.dev"
      },
      graduationYear: "2026",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 6,
      name: "Meera Joshi",
      role: "Content Creator",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      bio: "Creates engaging content for social media and manages community outreach. Also a talented mobile app developer.",
      skills: ["Content Writing", "Social Media", "Flutter", "Dart", "Photography"],
      social: {
        github: "https://github.com/meerajoshi",
        linkedin: "https://linkedin.com/in/meerajoshi",
        instagram: "https://instagram.com/meerajoshi"
      },
      graduationYear: "2026",
      yearsActive: ["2024", "2025"]
    },
    {
      id: 7,
      name: "Siddharth Rao",
      role: "DevOps Engineer",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      bio: "Cloud infrastructure enthusiast who ensures our projects run smoothly. Passionate about automation and CI/CD.",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      social: {
        github: "https://github.com/siddharthrao",
        linkedin: "https://linkedin.com/in/siddharthrao"
      },
      graduationYear: "2025",
      yearsActive: ["2023", "2024", "2025"]
    },
    {
      id: 8,
      name: "Ananya Gupta",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      bio: "Design thinking advocate who creates user-centered experiences. Loves conducting user research and usability testing.",
      skills: ["UI/UX Design", "Figma", "Adobe XD", "User Research", "Prototyping"],
      social: {
        linkedin: "https://linkedin.com/in/ananyagupta",
        dribbble: "https://dribbble.com/ananyagupta",
        behance: "https://behance.net/ananyagupta"
      },
      graduationYear: "2026",
      yearsActive: ["2025",]
    }
  ];

  // Get all unique years from team members
  const allYears = [...new Set(teamMembers.flatMap(member => member.yearsActive))].sort((a, b) => b - a)
  const yearOptions = ["All Years", ...allYears]

  // Filter team members based on selected year
  const filteredMembers = selectedYear === "All Years"
    ? teamMembers
    : teamMembers.filter(member => member.yearsActive.includes(selectedYear))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <div className='min-h-screen flex items-center flex-col p-2'>
      <motion.div
        className='text-center p-2'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl mb-2 font-bold"
          variants={headingVariants}
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          className="dark:text-text-muted-dark text-text-muted-light mb-6"
          variants={headingVariants}
        >
          The passionate individuals behind DevClub who make everything possible.<br />
          Get to know the people driving innovation and building community.
        </motion.p>

        {/* Year Filter Dropdown */}
        <motion.div
          className="mb-8"
          variants={headingVariants}
        >
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-black text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            {yearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">
            Showing {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''}
            {selectedYear !== "All Years" && ` from ${selectedYear}`}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-4 py-8 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        key={selectedYear}
      >
        {filteredMembers.map((member, index) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            custom={index}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </motion.div>

      {filteredMembers.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-500 dark:text-gray-400">
            No team members found for {selectedYear}
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default TeamPage