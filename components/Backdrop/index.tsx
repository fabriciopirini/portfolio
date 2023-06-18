import { motion } from 'framer-motion'

export const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-hidden bg-black/50"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
