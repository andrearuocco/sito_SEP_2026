import React from "react"
import { Container } from "react-bootstrap"
import CTA from "../components/sections/CTA"

export default function ImpiantisticaPage() {
  return (
    <>
      <div style={{ paddingTop: 120, paddingBottom: 40, background: "#f4f6f8" }}>
        <Container>
          <h1>Impiantistica</h1>
          <p className="text-muted">
            Interventi di installazione nuovi impianti, sostituzione e manutenzione impianti esistenti.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <h3>Servizi</h3>
        <ul>
          <li>Rimozione vecchi impianti</li>
          <li>Smaltimento impianti di scarico, termoidraulici e idrosanitari</li>
          <li>Videoispezioni (canne fumarie, fognature, colonne di scarico)</li>
          <li>Verifica e collaudo</li>
          <li>F-gAS, procedura per detrazioni fiscali, dichiarazioni di conformità impianti</li>
        </ul>
      </Container>

      <CTA />
    </>
  )
}
