import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'

function Hero() {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center">
      <BackgroundBeams />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl font-bold text-white mb-4">Dota 2 Masters</h1>
        <p className="text-xl text-[#E5E7EB] max-w-2xl mx-auto">
          Профессиональные гайды и стратегии для опытных игроков
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#3B82F6] text-white px-8 py-3 rounded-[1rem] hover:bg-[#2563EB] transition"
        >
          Начать изучение
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero