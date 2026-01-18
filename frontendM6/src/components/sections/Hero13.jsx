import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./sections13.css"
import wobble from "../../assets/bricks-wobble.png"

const ease = [0.22, 1, 0.36, 1]

export default function Hero13() {
  return (
    
     <section className="hero-image container-fluid"> {/* ABSOLUTE POSITIONING */}
            <section className="hero-overlay container-fluid"> {/* RELATIVE POSITIONING ON TOP HERO-IMAGE */}</section>
            
                <div className="hero-inner"> {/* RELATIVE POSITIONING BOTTOM/RIGHT */}

                    <motion.div className="hero-kicker">
                        SEP Società a Responsabilità Limitata • Edilizia & Impianti
                    </motion.div>

                    <motion.h1 className="head-one">
                        Costruzioni • Ristrutturazioni • Termoidraulica • Manutenzioni
                    </motion.h1>

                    <motion.p className="hero-subtitle">
                        SEP Srl è un&apos;azienda di edilizia ed impianti che opera a Livorno e provincia,<br></br>
                        realizziamo impianti termoidraulici, elettrici e di climatizzazione per costruzioni<br></br>
                        civili ed industriali.
                    </motion.p>

                    <motion.div className="d-flex align-items-center justify-content-between">
                        <Button as={Link} to="/servizi" className="button-nvm-blue">
                            Scopri i servizi
                        </Button>
                        <img src={wobble} alt="mattoni-ondeggianti" className="bricks-wobble" />
                    </motion.div>

                </div>
      </section>
            
  )
}


