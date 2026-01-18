import { useState } from "react"
import { Form, Button, Alert, Row, Col } from "react-bootstrap"
import { motion, AnimatePresence } from "framer-motion"
import { sendContactMessage } from "../../data/apiForm"

const ease = [0.22, 1, 0.36, 1]

export default function InfoForm({ reparto = "edilizia" }) {
  const [status, setStatus] = useState({ type: "", msg: "" })
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" })
  const [sending, setSending] = useState(false)

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: "", msg: "" })
    setSending(true)
    try {
      await sendContactMessage({ ...form, reparto })
      setStatus({ type: "success", msg: "Richiesta inviata! Ti ricontattiamo al più presto." })
      setForm({ nome: "", email: "", telefono: "", messaggio: "" })
    } catch {
      setStatus({ type: "danger", msg: "Errore durante l’invio. Riprova più tardi." })
    } finally {
      setSending(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="form"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 18 }}
        transition={{ duration: 0.5, ease }}
        style={{ border: "1px solid #eef1f4", borderRadius: 18, padding: 16 }}
      >
        {status.msg && <Alert variant={status.type}>{status.msg}</Alert>}

        <Form onSubmit={onSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Nome</Form.Label>
              <Form.Control name="nome" value={form.nome} onChange={onChange} required />
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
                rows={4}
                name="messaggio"
                value={form.messaggio}
                onChange={onChange}
                required
                placeholder="Descrivi brevemente la richiesta (zona, tempi, tipo intervento)…"
              />
            </Col>
            <Col md={12} className="d-flex justify-content-end">
              <Button type="submit" variant="dark" disabled={sending}>
                {sending ? "Invio..." : "Invia richiesta"}
              </Button>
            </Col>
          </Row>
        </Form>
      </motion.div>
    </AnimatePresence>
  )
}

