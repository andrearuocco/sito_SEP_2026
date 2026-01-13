import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./sections13.css"

export default function Hero13() {

    return (
        <section className="hero-image"> {/* ABSOLUTE POSITIONING */}
            <Container className="hero-overlay"> {/* RELATIVE POSITIONING ON TOP HERO-IMAGE */}</Container>
            
                <div className="hero-inner"> {/* RELATIVE POSITIONING BOTTOM/RIGHT */}

                    <motion.div>
                        SEP Società a Responsabilità Limitata • Edilizia & Impianti
                    </motion.div>

                    <motion.h1>
                        Costruzioni • Ristrutturazioni • Impianti civili e industriali • Manutenzioni
                    </motion.h1>

                    <motion.p>
                        SEP Srl è un&apos;azienda di edilizia ed impianti che opera a Livorno e provincia,
                        realizziamo impianti termoidraulici, elettrici e di climatizzazione per costruzioni
                        civili ed industriali.
                    </motion.p>

                    <motion.div>
                        <Button as={Link} to="/edilizia" className="button-nvm-blue">
                            Scopri i servizi
                        </Button>
                    </motion.div>

                </div>
            
        </section>
    )

}
