import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Reveal from "../ui/Reveal"
import "./sections.css"

export default function CTA() {
  return (
    <section className="cta">
      <Container className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <Reveal y={10}>
          <div>
            <h3 className="mb-1">Hai bisogno di un preventivo?</h3>
            <div className="text-muted">Scrivici due righe e ti ricontatteremo il prima possibile.</div>
          </div>
        </Reveal>

        <Reveal y={10} delay={0.06}>
          <div className="d-flex gap-2 flex-wrap">
            <Button as={Link} to="/contatti" variant="dark" className="btn-soft">Contattaci</Button>
            <Button as="a" href="tel:+393357548581" variant="outline-dark" className="btn-soft">Chiama ora</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

