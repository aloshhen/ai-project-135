import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Info } from 'lucide-react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 bg-dota-gradient text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <Info className="w-10 h-10 text-dota-text" />
          <h2 className="text-4xl font-bold text-dota-text">About Our Platform</h2>
        </div>
        
        <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-8">
          Created by experienced Dota 2 players for players who want to elevate their game. 
          Our platform provides advanced strategies, detailed hero guides, and an interactive build calculator.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: 'Expert Guides', description: 'In-depth hero strategies' },
            { title: 'Build Calculator', description: 'Optimize item progression' },
            { title: 'Community Driven', description: 'Insights from top players' }
          ].map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-dota-dark p-6 rounded-xl hover:bg-dota-highlight transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-dota-text">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About