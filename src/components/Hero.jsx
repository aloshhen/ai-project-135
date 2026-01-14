import { motion } from 'framer-motion'

function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-dota-gradient text-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl px-4"
      >
        <h1 className="text-6xl font-bold mb-6 text-dota-text">Dominate the Battlefield</h1>
        <p className="text-xl mb-8 text-gray-300">
          Advanced strategies, hero builds, and in-depth guides for experienced Dota 2 players
        </p>
        <div className="space-x-4">
          <a 
            href="#hero-guides" 
            className="bg-dota-text text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition"
          >
            Explore Hero Guides
          </a>
          <a 
            href="#build-calculator" 
            className="border-2 border-dota-text text-dota-text px-8 py-3 rounded-full hover:bg-dota-text hover:text-white transition"
          >
            Hero Build Calculator
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero