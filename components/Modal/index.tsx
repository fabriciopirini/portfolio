import { AnimatePresence, motion } from 'framer-motion'

import { Backdrop } from '@/components/Backdrop'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

export const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <div>
          <h3>Text</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam expedita voluptates
            tempore asperiores sequi, alias cum veritatis, minima dolor iste similique eos id. Porro, culpa? Officiis,
            placeat?
          </h5>
        </div>
        <motion.button type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onClick}>
          Close
        </motion.button>
      </motion.div>
    </Backdrop>
  )
}

export const ModalContainer = ({ children }) => (
  <AnimatePresence initial={false} mode="wait">
    {children}
  </AnimatePresence>
)
