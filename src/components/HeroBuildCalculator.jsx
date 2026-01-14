import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

function HeroBuildCalculator() {
  const [hero, setHero] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  const heroItems = [
    { id: 1, name: 'Dagon', cost: 2720, type: 'Burst Damage' },
    { id: 2, name: 'Ethereal Blade', cost: 4700, type: 'Magic Amplification' },
    { id: 3, name: 'Aghanim\'s Scepter', cost: 4200, type: 'Ultimate Upgrade' }
  ]

  return (
    <section 
      id="build-calculator" 
      className="py-24 bg-dota-dark text-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-dota-text flex items-center justify-center gap-4">
            <Calculator className="w-10 h-10" /> Hero Build Calculator
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Design and optimize your hero's item progression strategically.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-dota-accent rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-dota-text mb-2">Select Hero</label>
              <select 
                value={hero}
                onChange={(e) => setHero(e.target.value)}
                className="w-full bg-dota-dark p-3 rounded-lg text-white"
              >
                <option value="">Choose a Hero</option>
                <option value="invoker">Invoker</option>
                <option value="pudge">Pudge</option>
                <option value="pa">Phantom Assassin</option>
              </select>
            </div>

            <div>
              <label className="block text-dota-text mb-2">Available Items</label>
              <div className="grid grid-cols-3 gap-2">
                {heroItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setSelectedItems([...selectedItems, item])}
                    className="bg-dota-dark p-2 rounded-lg hover:bg-dota-highlight transition"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl text-dota-text mb-4">Selected Build</h3>
            {selectedItems.map((item) => (
              <div 
                key={item.id} 
                className="flex justify-between bg-dota-dark p-3 rounded-lg mb-2"
              >
                <span>{item.name}</span>
                <span className="text-gray-400">${item.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBuildCalculator