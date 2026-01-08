import React from "react"
import { Container } from "react-bootstrap"
import "./siteLayout.css"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
          <div>
            <strong>SEP Società a Responsabilità Limitata</strong>
            <div className="text-muted">Costruzioni • Ristrutturazioni • Impianti • Bonifiche</div>
          </div>

          <div className="text-md-end">
            <div>📍 Sede: via Padre N. Magri 41/B</div>
            <div>✉️ Email: sep.edilizia@virgilio.it</div>
            <div>☎️ Tel: +39 335 7548 581</div>
          </div>
        </div>
        <hr />
        <div className="text-muted small">
          © {new Date().getFullYear()} Edilizia & Impianti — Privacy & Cookie
        </div>
      </Container>
    </footer>
  )
}

