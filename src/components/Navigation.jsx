import { motion } from 'framer-motion'

function Navigation() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full z-50 bg-[#1E293B] bg-opacity-70 py-4"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-[#3B82F6] text-2xl font-bold">Dota 2 Guide</div>
        <div className="space-x-6">
          {['hero', 'features', 'guides', 'reviews'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white hover:text-[#3B82F6] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation