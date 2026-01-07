import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./sections.css"

const items = [
  {
    title: "Impiantistica",
    text: "Impianti di climatizzazione ed elettrici, losney, impianti citofonici, antenne e dati.",
    to: "/impiantistica",
  },
  {
    title: "Edilizia",
    text: "Costruzioni, ristrutturazioni, facciate e manutenzioni.",
    to: "/edilizia",
  },
  {
    title: "Contatti",
    text: "Parlaci del progetto: sopralluogo e preventivo.",
    to: "/contatti",
  },
]

export default function ServiceCards() {
  return (
    <section className="section">
      <Container>
        <Row className="g-4">
          {items.map((it) => (
            <Col key={it.title} md={4}>
              <Card className="service-card h-100">
                <Card.Body>
                  <Card.Title>{it.title}</Card.Title>
                  <Card.Text className="text-muted">{it.text}</Card.Text>
                  <Button as={Link} to={it.to} variant="dark">
                    Vai alla pagina
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

