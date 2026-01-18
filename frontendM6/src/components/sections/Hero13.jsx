import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import bricksIcon from "../../assets/bricks-wobble.png"
import "./sections13.css"

const ease = [0.22, 1, 0.36, 1]

export default function Hero13() {
  return (
    <section className="hero13 container-fluid px-0">
      <div className="hero13-bg" />
      <div className="hero13-overlay" />

      <div className="hero13-inner-wrap">
        <div className="hero13-inner">
          {/* kicker entra da sinistra */}
          <motion.div
            className="hero13-kicker"
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            SEP Srl • Edilizia & Impianti • Livorno e provincia
          </motion.div>

          {/* resto entra da destra “aspettando” il kicker */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
          >
            <h1 className="hero13-h1">
              Costruzioni, ristrutturazioni e impianti
              <span className="d-block">fatti bene, senza sorprese.</span>
            </h1>

            <p className="hero13-p">
              SEP Srl opera su edilizia civile e industriale e su impianti termoidraulici, elettrici e
              climatizzazione. Interventi, manutenzioni e soluzioni su misura.
            </p>

            <div className="hero13-bottomline">
              <Button as={Link} to="/servizi" className="hero13-cta">
                Scopri i servizi
              </Button>

              <div className="hero13-bricks">
                <img src={bricksIcon} alt="Mattoni" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


