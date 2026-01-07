import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../sections.css"

export default function CTA() {
  return (
    <section className="cta">
      <Container className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <h3 className="mb-1">Hai bisogno di un preventivo?</h3>
          <div className="text-muted">Scrivici due righe e ti ricontatteremo il prima possibile.</div>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <Button as={Link} to="/contatti" variant="dark">Contattaci</Button>
          <Button as="a" href="tel:+393357548581" variant="outline-dark">Chiama ora</Button>
        </div>
      </Container>
    </section>
  )
}

