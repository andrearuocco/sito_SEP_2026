import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { motion } from "framer-motion"
import { sendContactMessage } from "../data/apiForm"
import bricks from "../assets/bricks.png"

const ease = [0.22, 1, 0.36, 1]

export default function ContattiPage() {
  const [status, setStatus] = useState({ type: "", msg: "" })
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    messaggio: "",
  })

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: "", msg: "" })
    setSending(true)

    try {
      await sendContactMessage({ ...form, reparto: "contatti" })
      setStatus({ type: "success", msg: "Messaggio inviato! Ti ricontattiamo al più presto." })
      setForm({ nome: "", cognome: "", email: "", telefono: "", messaggio: "" })
    } catch {
      setStatus({ type: "danger", msg: "Errore durante l’invio. Riprova più tardi." })
    } finally {
      setSending(false)
    }
  }

  return (
    <div style={{ paddingTop: 110, paddingBottom: 20 }}>
      {/* mini hero “brand” */}
      <div
        style={{
          position: "relative",
          borderBottom: "1px solid rgba(15,17,21,0.08)",
          backgroundImage: `linear-gradient(180deg, rgba(32,48,128,0.10), rgba(192,16,16,0.06)), url(${bricks})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,17,21,0.22)" }} />
        <Container style={{ position: "relative", padding: "34px 0" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div style={{ letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 900, color: "rgba(255,255,255,0.9)", fontSize: ".8rem" }}>
              SEP • Contatti
            </div>
            <h1 style={{ color: "#fff", fontWeight: 900, marginTop: 10 }}>Parliamo del tuo intervento</h1>
            <p style={{ color: "rgba(255,255,255,0.88)", maxWidth: 62 + "ch", marginBottom: 0 }}>
              Inviaci i dettagli: zona, tempi e tipologia. Ti rispondiamo con chiarezza e tempi realistici.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container className="py-4">
        <Row className="g-4">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="p-4"
              style={{
                borderRadius: 18,
                border: "1px solid #eef1f4",
                background: "linear-gradient(135deg, rgba(32,48,128,0.06), rgba(192,16,16,0.04))",
              }}
            >
              <h4 className="mb-2" style={{ fontWeight: 900 }}>Recapiti</h4>
              <div className="text-muted">Edilizia • Impianti • Assistenza</div>

              <hr />

              <div className="mb-2"><strong>📍 Sede</strong></div>
              <div className="text-muted">via Padre N. Magri 41/B</div>

              <div className="mt-3 mb-2"><strong>☎️ Telefono</strong></div>
              <div className="text-muted">+39 335 7548 581</div>

              <div className="mt-3 mb-2"><strong>✉️ Email</strong></div>
              <div className="text-muted">sep.edilizia@virgilio.it</div>

              <div className="mt-4 d-flex gap-2 flex-wrap">
                <Button as="a" href="https://wa.me/393929004078" target="_blank" rel="noreferrer" variant="dark">
                  WhatsApp
                </Button>
                <Button as="a" href="mailto:sep.edilizia@virgilio.it" variant="outline-dark">
                  Scrivi una mail
                </Button>
              </div>

              <div className="mt-4 p-3" style={{ borderRadius: 16, background: "rgba(255,255,255,0.55)" }}>
                <div style={{ fontWeight: 900, marginBottom: 6 }}>Orari (indicativi)</div>
                <div className="text-muted mb-0">Lun–Ven: 9:00–18:00 • Urgenze: WhatsApp</div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
            >
              {status.msg && <Alert variant={status.type}>{status.msg}</Alert>}

              <Form
                onSubmit={onSubmit}
                className="p-4"
                style={{ border: "1px solid #eef1f4", borderRadius: 18 }}
              >
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name="nome" value={form.nome} onChange={onChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control name="cognome" value={form.cognome} onChange={onChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} onChange={onChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name="telefono" value={form.telefono} onChange={onChange} />
                  </Col>
                  <Col md={12}>
                    <Form.Label>Messaggio</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="messaggio"
                      value={form.messaggio}
                      onChange={onChange}
                      required
                      placeholder="Esempio: ristrutturazione bagno, zona…, tempi…, sopralluogo…"
                    />
                  </Col>
                  <Col md={12} className="d-flex justify-content-end">
                    <Button type="submit" variant="dark" disabled={sending}>
                      {sending ? "Invio..." : "Invia"}
                    </Button>
                  </Col>
                </Row>
              </Form>

              <div className="mt-3 text-muted small">
                Inviando il modulo accetti di essere ricontattato per finalità di preventivo/assistenza.
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

