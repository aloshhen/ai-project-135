import { useState } from 'react'
import { motion } from 'framer-motion'

function HeroGuide() {
  const [selectedHero, setSelectedHero] = useState(null)

  const heroes = [
    { name: 'Invoker', complexity: 'Высокая', role: 'Маг' },
    { name: 'Pudge', complexity: 'Средняя', role: 'Танк' },
    { name: 'Axe', complexity: 'Низкая', role: 'Инициатор' }
  ]

  return (
    <div id="guides" className="container mx-auto py-24 px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Герои Dota 2</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {heroes.map((hero, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1E293B] p-6 rounded-[1rem] text-center"
          >
            <h3 className="text-2xl font-semibold text-[#3B82F6] mb-4">{hero.name}</h3>
            <p>Сложность: {hero.complexity}</p>
            <p>Роль: {hero.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HeroGuide