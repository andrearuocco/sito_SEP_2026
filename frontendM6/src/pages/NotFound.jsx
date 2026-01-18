import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import bricks from "../assets/bricks.png"

const ease = [0.22, 1, 0.36, 1]

export default function NotFound() {
  return (
    <div style={{ paddingTop: 86, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bricks})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.03)",
          filter: "saturate(1.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(32,48,128,0.55), transparent 45%)," +
            "radial-gradient(circle at 80% 70%, rgba(192,16,16,0.45), transparent 50%)," +
            "rgba(15,17,21,0.62)",
        }}
      />

      <Container style={{ position: "relative", zIndex: 2, padding: "70px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          style={{
            width: "min(760px, 92vw)",
            borderRadius: 22,
            padding: 22,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(14px)",
            color: "#fff",
          }}
        >
          <div style={{ letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 900, opacity: 0.9, fontSize: ".8rem" }}>
            SEP • 404
          </div>

          <motion.h1
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            style={{ fontWeight: 900, marginTop: 10, fontSize: "clamp(2.1rem, 5vw, 3.4rem)" }}
          >
            Questa pagina non esiste
          </motion.h1>

          <p style={{ color: "rgba(255,255,255,0.88)", maxWidth: "62ch" }}>
            Hai seguito un link non valido oppure la pagina è stata spostata. Torna alla home o vai ai servizi.
          </p>

          <div className="d-flex gap-2 flex-wrap mt-3">
            <Button as={Link} to="/" variant="light">
              Home
            </Button>
            <Button as={Link} to="/servizi" variant="outline-light">
              Servizi
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

