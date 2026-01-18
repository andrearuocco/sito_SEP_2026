import { Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import bricks from "../assets/bricks.png"

const ease = [0.22, 1, 0.36, 1]

export default function ITPage() {
  return (
    <div className="it-page">
      <div className="it-bg" style={{ backgroundImage: `url(${bricks})` }} />
      <div className="it-overlay" />

      <Container className="it-content">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="it-card"
        >
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="it-kicker"
          >
            SEP • IT Division
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="it-title"
          >
            Coming Soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="it-sub"
          >
            Stiamo costruendo qualcosa di solido. Torna presto.
          </motion.p>

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [-0.8, 0.8, -0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="it-brick-badge"
          >
            🧱
          </motion.div>

          <div className="d-flex gap-2 flex-wrap mt-3">
            <Button as="a" href="https://wa.me/393929004078" target="_blank" rel="noreferrer" variant="light">
              WhatsApp
            </Button>
            <Button as="a" href="/" variant="outline-light">
              Torna alla Home
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
