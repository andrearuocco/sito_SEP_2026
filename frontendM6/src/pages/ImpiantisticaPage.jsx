import { Container, Row, Col, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import imgClima from "../assets/section2-clima.jpg"
import imgElettrico from "../assets/section2-elettrico.jpg"

const ease = [0.22, 1, 0.36, 1]

// TODO: sostituisci con numeri reali reparto
const WHATSAPP_CLIMA = "393421767992"
const WHATSAPP_ELETTRICO = "393929004078"

function Block({ id, title, img, list, whatsapp }) {
  return (
    <div id={id} className="p-3 p-md-4 mb-4" style={{ border: "1px solid #eef1f4", borderRadius: 18 }}>
      <Row className="g-4 align-items-center">
        <Col md={5}>
          <img src={img} alt={title} style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 16 }} />
        </Col>
        <Col md={7}>
          <h2 className="h3 mb-2">{title}</h2>
          <ul className="mb-3">
            {list.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className="d-flex gap-2 flex-wrap">
            <Button
              as="a"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              variant="dark"
            >
              WhatsApp {title}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default function ImpiantisticaPage() {
  return (
    <>
      <div style={{ paddingTop: 110, paddingBottom: 20 }}>
        <Container className="py-4">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <h1>Impiantistica</h1>
            <p className="text-muted mb-4">
              Installazione, sostituzione e manutenzione di impianti: clima, termoidraulica ed elettrico.
            </p>

            <Block
              id="clima"
              title="Clima"
              img={imgClima}
              whatsapp={WHATSAPP_CLIMA}
              list={[
                "Installazione e manutenzione climatizzatori",
                "Impianti termoidraulici e idrosanitari",
                "Assistenza e interventi programmati",
                "Dichiarazioni e conformità (se previste)",
              ]}
            />

            <Block
              id="elettrico"
              title="Elettrico"
              img={imgElettrico}
              whatsapp={WHATSAPP_ELETTRICO}
              list={[
                "Impianti elettrici civili e industriali",
                "Quadri, linee e manutenzione",
                "Impianti dati / citofonia (se previsti)",
                "Verifiche e ripristini guasti",
              ]}
            />
          </motion.div>
        </Container>
      </div>

{/*       <CTA /> */}
    </>
  )
}

