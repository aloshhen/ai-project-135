import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-[#1E293B] py-12">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-[#3B82F6] mb-4">Dota 2 Guide</h3>
          <p className="text-[#E5E7EB] mb-8">Профессиональное обучение игре Dota 2</p>
          <div className="flex justify-center space-x-4">
            {['Discord', 'YouTube', 'Twitch'].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-[#3B82F6] transition"
              >
                {platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer