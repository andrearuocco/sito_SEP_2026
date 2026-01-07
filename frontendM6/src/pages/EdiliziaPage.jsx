import React from "react"
import { Container } from "react-bootstrap"
import CTA from "../components/sections/CTA"

export default function EdiliziaPage() {
  return (
    <>
      <div style={{ paddingTop: 120, paddingBottom: 40, background: "#f4f6f8" }}>
        <Container>
          <h1>Edilizia</h1>
          <p className="text-muted">
            Costruzioni, ristrutturazioni e manutenzioni di fabbricati civili, industriali e del terziario.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <h3>Attività</h3>
        <ul>
          <li>Costruzioni</li>
          <li>Ristrutturazioni</li>
          <li>Manutenzioni</li>
        </ul>

        <h3 className="mt-4">Clienti</h3>
        <ul>
          <li>Privati</li>
          <li>Enti pubblici</li>
          <li>Società e condomini</li>
        </ul>
      </Container>

      <CTA />
    </>
  )
}
