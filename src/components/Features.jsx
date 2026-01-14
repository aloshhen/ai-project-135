import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { motion } from 'framer-motion'
import { Book, Target, Trophy, Users } from 'lucide-react'

function Features() {
  const features = [
    {
      title: 'Гайды для новичков',
      description: 'Подробные руководства по основам Dota 2',
      icon: <Book className="text-[#3B82F6]" />
    },
    {
      title: 'Стратегии',
      description: 'Продвинутые тактики для победы',
      icon: <Target className="text-[#3B82F6]" />
    },
    {
      title: 'Рейтинг игроков',
      description: 'Статистика и анализ производительности',
      icon: <Trophy className="text-[#3B82F6]" />
    },
    {
      title: 'Сообщество',
      description: 'Общение с профессиональными игроками',
      icon: <Users className="text-[#3B82F6]" />
    }
  ]

  return (
    <div id="features" className="container mx-auto py-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 text-white"
      >
        Почему выбирают наши гайды
      </motion.h2>
      <BentoGrid>
        {features.map((feature, index) => (
          <BentoGridItem
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default Features