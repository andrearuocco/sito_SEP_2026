import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import imgEdilizia from "../../assets/section2-edilizia.jpg"
import imgClima from "../../assets/section2-clima.jpg"
import imgElettrico from "../../assets/section2-elettrico.jpg"
import "./section2.css"

const ease = [0.22, 1, 0.36, 1]

export default function Section2Triptych() {
  return (
    <section className="section2">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
        >
          <Row className="g-3">
            <Col md={4}>
              <Link to="/edilizia" className="s2-card">
                <img src={imgEdilizia} alt="Edilizia" />
                <div className="s2-label">Edilizia</div>
              </Link>
            </Col>

            <Col md={4}>
              <Link to="/impiantistica#clima" className="s2-card">
                <img src={imgClima} alt="Climatizzazione" />
                <div className="s2-label">Clima</div>
              </Link>
            </Col>

            <Col md={4}>
              <Link to="/impiantistica#elettrico" className="s2-card">
                <img src={imgElettrico} alt="Elettrico" />
                <div className="s2-label">Elettrico</div>
              </Link>
            </Col>
          </Row>

          <div className="s2-text">
            <h2 className="s2-title">Un unico partner per cantiere e impianti</h2>
            <p className="text-muted mb-0">
              Dalla muratura alla finitura, fino agli impianti: tempi chiari, comunicazione diretta e soluzioni pratiche.
              Seleziona l’area di interesse per vedere servizi e contatti dedicati.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
