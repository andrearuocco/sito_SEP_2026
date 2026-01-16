import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./sections13.css"

export default function Hero13() {

    return (
        <Container className="hero-image" fluid> {/* ABSOLUTE POSITIONING */}
            <Container className="hero-overlay" fluid> {/* RELATIVE POSITIONING ON TOP HERO-IMAGE */}</Container>
            
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
                        <Button as={Link} to="/edilizia" className="button-nvm-blue">
                            Scopri i servizi
                        </Button>
                        <div className=""></div>
                    </motion.div>

                </div>
            
        </Container>
    )

}
