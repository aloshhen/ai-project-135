import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Target } from 'lucide-react'

function HeroGuides() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const heroes = [
    { name: 'Invoker', difficulty: 'Very High', icon: '🧙‍♂️' },
    { name: 'Pudge', difficulty: 'Medium', icon: '🧟‍♂️' },
    { name: 'Phantom Assassin', difficulty: 'Easy', icon: '🗡️' }
  ]

  return (
    <section 
      id="hero-guides" 
      ref={ref}
      className="py-24 bg-dota-accent text-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-dota-text flex items-center justify-center gap-4">
            <BookOpen className="w-10 h-10" /> Hero Guides
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive guides tailored for experienced players. Master complex heroes and advanced strategies.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {heroes.map((hero) => (
            <div 
              key={hero.name} 
              className="bg-dota-dark p-6 rounded-xl hover:bg-dota-highlight transition"
            >
              <div className="text-6xl mb-4 text-center">{hero.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-dota-text text-center">{hero.name}</h3>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Target className="w-5 h-5" />
                <span>Difficulty: {hero.difficulty}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroGuides