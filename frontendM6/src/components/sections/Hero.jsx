import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Reveal from "../ui/Reveal"
import "./sections.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-decor" aria-hidden="true" />
      <Container className="hero-inner">
        <Reveal y={16}>
          <h1 className="hero-title">Edilizia e impianti, con cantieri seguiti dall’inizio alla fine.</h1>
        </Reveal>

        <Reveal y={12} delay={0.08}>
          <p className="hero-subtitle">
            Costruzioni, ristrutturazioni, impianti civili e industriali, manutenzioni.
          </p>
        </Reveal>

        <Reveal y={10} delay={0.14}>
          <div className="d-flex gap-2 flex-wrap">
            <Button as={Link} to="/contatti" variant="dark" size="lg" className="btn-soft">
              Richiedi un preventivo
            </Button>
            <Button as={Link} to="/edilizia" variant="outline-dark" size="lg" className="btn-soft">
              Scopri i servizi
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

