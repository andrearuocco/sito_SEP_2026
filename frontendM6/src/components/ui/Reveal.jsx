import React from "react"
import { motion } from "framer-motion"

export default function Reveal({
  children,
  y = 14,
  duration = 0.55,
  delay = 0,
  once = true,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
