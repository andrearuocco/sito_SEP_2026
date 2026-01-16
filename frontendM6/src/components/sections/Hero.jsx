import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import "./sections.css"

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const easePro = [0.22, 1, 0.36, 1]

  const overlayAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, ease: easePro },
      }

  // 1) Kicker: arriva per primo da destra (parte fuori schermo)
  const kickerAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: "110vw" },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.85, ease: easePro, delay: 0.1 },
      }

  // 2) Rettangolo: arriva dopo il kicker da destra
  const panelAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: "110vw" },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.9, ease: easePro, delay: 0.45 },
      }

  // 3) Contenuti dentro al rettangolo (stagger)
  const content = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.18 } },
      }

  const item = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easePro } },
      }

  return (
    <section className="hero hero-image mm-20">
      <motion.div className="hero-overlay" aria-hidden="true" {...overlayAnim} />

      <Container className="hero-inner">
        <div className="hero-grid">
          {/* Stack in basso a sinistra dentro l’immagine */}
          <div className="hero-stack">

            <motion.div className="hero-intro" {...panelAnim}>
              <motion.div
                variants={content}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? false : "show"}
              >
                <motion.div className="hero-kicker" {...kickerAnim}>
                  SEP Società a Responsabilità Limitata • Edilizia & Impianti
                </motion.div>
                <motion.h1 variants={item} className="hero-title">
                  Costruzioni • Ristrutturazioni • Impianti civili e industriali • Manutenzioni
                </motion.h1>

                <motion.p variants={item} className="hero-subtitle">
                  SEP Srl è un&apos;azienda di edilizia ed impianti che opera a Livorno e provincia,
                  realizziamo impianti termoidraulici, elettrici e di climatizzazione per costruzioni
                  civili ed industriali.
                </motion.p>

                <motion.div variants={item}>
                  <Button as={Link} to="/edilizia" className="button-nvm-blue">
                    Scopri i servizi
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  )
}

