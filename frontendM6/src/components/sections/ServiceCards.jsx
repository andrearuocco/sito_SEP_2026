import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./sections.css"

const items = [
  {
    title: "Impiantistica",
    text: "Impianti di climatizzazione ed elettrici, impianti citofonici, antenne e dati.",
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

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServiceCards() {
  return (
    <section className="section">
      <Container>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Row className="g-4">
            {items.map((it) => (
              <Col key={it.title} md={4}>
                <motion.div variants={item} className="h-100">
                  <Card className="service-card h-100">
                    <Card.Body>
                      <Card.Title>{it.title}</Card.Title>
                      <Card.Text className="text-muted">{it.text}</Card.Text>
                      <Button as={Link} to={it.to} variant="dark" className="btn-soft">
                        Vai alla pagina
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}


