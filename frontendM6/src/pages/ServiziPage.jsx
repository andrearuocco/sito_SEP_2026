import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import thermo from "../assets/section2-clima.jpg"

const ease = [0.22, 1, 0.36, 1]

export default function ServiziPage() {
  return (
    <div style={{ paddingTop: 110, paddingBottom: 30 }}>
      <Container className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <h1>Servizi</h1>
          <p className="text-muted mb-4">
            Seleziona l’area: trovi una panoramica e il collegamento alla pagina dedicata.
          </p>

          <div className="p-3 p-md-4" style={{ border: "1px solid #eef1f4", borderRadius: 18 }}>
            <Row className="g-4 align-items-center">
              <Col md={5}>
                <img
                  src={thermo}
                  alt="Servizi SEP"
                  style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 16 }}
                />
              </Col>

              <Col md={7}>
                <h3 className="mb-2">Principali servizi</h3>
                <ul className="mb-3">
                  <li>
                    <strong>Edilizia</strong>: costruzioni, ristrutturazioni, facciate, manutenzioni.
                  </li>
                  <li>
                    <strong>Impiantistica</strong>: termoidraulica, climatizzazione, elettrico, manutenzioni.
                  </li>
                </ul>

                <div className="d-flex gap-2 flex-wrap">
                  <Button as={Link} to="/edilizia" variant="dark">
                    Vai a Edilizia
                  </Button>
                  <Button as={Link} to="/impiantistica" variant="outline-dark">
                    Vai a Impiantistica
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
