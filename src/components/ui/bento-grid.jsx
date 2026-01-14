import React from 'react'
import { motion } from 'framer-motion'

export const BentoGrid = ({ children }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">
      {children}
    </div>
  )
}

export const BentoGridItem = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#1E293B] rounded-[1rem] p-6 flex flex-col justify-between hover:border hover:border-[#3B82F6]"
    >
      <div className="mb-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#E5E7EB]">{description}</p>
      </div>
    </motion.div>
  )
}