import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./sections.css"

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero-inner">
        <h1 className="hero-title">Edilizia e impianti, con cantieri seguiti dall’inizio alla fine.</h1>
        <p className="hero-subtitle">
          Costruzioni, ristrutturazioni, impianti civili e industriali, manutenzioni.
        </p>
        <div className="d-flex gap-2 flex-wrap">
          <Button as={Link} to="/contatti" variant="dark" size="lg">
            Richiedi un preventivo
          </Button>
          <Button as={Link} to="/edilizia" variant="outline-dark" size="lg">
            Scopri i servizi
          </Button>
        </div>
      </Container>
    </section>
  )
}
