import { motion } from 'framer-motion'

function Reviews() {
  const reviews = [
    {
      name: 'Иван П.',
      text: 'Отличные гайды, помогли значительно улучшить мою игру',
      rating: 5
    },
    {
      name: 'Анна С.',
      text: 'Подробные и понятные материалы для новичков',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      text: 'Профессиональный подход к обучению',
      rating: 4
    }
  ]

  return (
    <div id="reviews" className="container mx-auto py-24 px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Отзывы игроков</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1E293B] p-6 rounded-[1rem] text-center"
          >
            <p className="text-lg mb-4 text-[#E5E7EB]">"{review.text}"</p>
            <h3 className="text-xl font-semibold text-[#3B82F6]">{review.name}</h3>
            <div className="flex justify-center mt-2">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Reviews