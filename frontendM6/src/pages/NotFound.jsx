import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div style={{ paddingTop: 120 }}>
      <Container className="py-5">
        <h1>404</h1>
        <p className="text-muted">Pagina non trovata.</p>
        <Button as={Link} to="/" variant="dark">Torna alla Home</Button>
      </Container>
    </div>
  )
}
