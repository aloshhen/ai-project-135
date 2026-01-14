import { motion } from 'framer-motion'
import { Github, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-dota-accent py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <h3 className="text-3xl font-bold mb-4 text-dota-text">Dota 2 Pro Guides</h3>
        <p className="text-gray-300 mb-8">
          Elevate your Dota 2 gameplay with expert strategies and insights.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="#" 
            className="text-dota-text hover:text-white transition"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="#" 
            className="text-dota-text hover:text-white transition"
          >
            <Twitter className="w-8 h-8" />
          </a>
        </div>

        <p className="text-gray-400">
          © 2024 Dota 2 Pro Guides. Not affiliated with Valve Corporation.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer