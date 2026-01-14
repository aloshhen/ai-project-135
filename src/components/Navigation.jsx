import { motion } from 'framer-motion'
import { Gamepad2 } from 'lucide-react'

function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-dota-accent/50 backdrop-blur-md z-50 py-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Gamepad2 className="text-dota-text w-8 h-8" />
          <h1 className="text-2xl font-bold text-dota-text">Dota 2 Pro Guides</h1>
        </div>
        <div className="space-x-6">
          <a href="#hero-guides" className="text-white hover:text-dota-text transition">Hero Guides</a>
          <a href="#build-calculator" className="text-white hover:text-dota-text transition">Build Calculator</a>
          <a href="#about" className="text-white hover:text-dota-text transition">About</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation