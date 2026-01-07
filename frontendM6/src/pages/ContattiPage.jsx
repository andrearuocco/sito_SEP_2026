import React, { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { sendContactMessage } from "../data/apiForm"

export default function ContattiPage() {
  const [status, setStatus] = useState({ type: "", msg: "" })
  const [form, setForm] = useState({ nome: "", cognome: "", email: "", telefono: "", messaggio: "" })

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    try {
      await sendContactMessage(form);
      setStatus({ type: "success", msg: "Messaggio inviato! Ti risponderemo al più presto." });
      setForm({ nome: "", cognome: "", email: "", telefono: "", messaggio: "" });
    } catch (err) {
      setStatus({ type: "danger", msg: "Errore durante l’invio. Riprova più tardi." });
    }
  }

  return (
    <div style={{ paddingTop: 120 }}>
      <Container className="py-4">
        <h1>Contatti</h1>
        <p className="text-muted">Compila il modulo per richiedere informazioni e preventivi.</p>

        <Row className="g-4">
          <Col md={5}>
            <div className="p-4" style={{ background: "#f4f6f8", borderRadius: 14 }}>
              <h5>Sede</h5>
              <div>Inserisci indirizzo</div>
              <hr />
              <h5>Recapiti</h5>
              <div>☎️ +39 342 176 7992</div>
              <div>✉️ andresepsrl@gmail.com</div>
              <div className="mt-3">
                <Button as="a" href="https://wa.me/393421767992" variant="dark">
                  WhatsApp
                </Button>
              </div>
            </div>
          </Col>

          <Col md={7}>
            {status.msg && <Alert variant={status.type}>{status.msg}</Alert>}
            <Form onSubmit={onSubmit} className="p-4" style={{ border: "1px solid #eef1f4", borderRadius: 14 }}>
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
                  <Form.Control as="textarea" rows={5} name="messaggio" value={form.messaggio} onChange={onChange} required />
                </Col>
                <Col md={12} className="d-flex justify-content-end">
                  <Button type="submit" variant="dark">Invia</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
