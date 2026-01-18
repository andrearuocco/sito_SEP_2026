import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { motion, AnimatePresence } from "framer-motion"
import InfoForm from "../components/forms/InfoForm"
import imgEdilizia from "../assets/section2-edilizia.jpg"

const ease = [0.22, 1, 0.36, 1]

export default function EdiliziaPage() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div style={{ paddingTop: 110, paddingBottom: 20 }}>
        <Container className="py-4">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <h1>Edilizia</h1>
            <p className="text-muted mb-4">
              Costruzioni, ristrutturazioni e manutenzioni per privati, aziende e terziario.
            </p>

            <div className="p-3 p-md-4" style={{ border: "1px solid #eef1f4", borderRadius: 18 }}>
              <Row className="g-4 align-items-center">
                <Col md={5}>
                  <img
                    src={imgEdilizia}
                    alt="Edilizia SEP"
                    style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 16 }}
                  />
                </Col>

                <Col md={7}>
                  <h3 className="mb-2">Servizi principali</h3>
                  <ul className="mb-3">
                    <li>Costruzioni e ampliamenti</li>
                    <li>Ristrutturazioni complete</li>
                    <li>Facciate e ripristini</li>
                    <li>Manutenzioni programmate e urgenti</li>
                  </ul>

                  <div className="d-flex gap-2 flex-wrap align-items-center">
                    <Button variant="dark" onClick={() => setOpen((s) => !s)}>
                      {open ? "Chiudi form" : "Richiedi informazioni"}
                    </Button>
                    <Button as="a" href="https://wa.me/393929004078" target="_blank" rel="noreferrer" variant="outline-dark">
                      WhatsApp Edilizia
                    </Button>
                  </div>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.45, ease }}
                        style={{ overflow: "hidden" }}
                      >
                        <InfoForm reparto="edilizia" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Col>
              </Row>
            </div>
          </motion.div>
        </Container>
      </div>

{/*       <CTA /> */}
    </>
  )
}

