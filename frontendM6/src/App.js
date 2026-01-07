import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import SiteNavbar from "./components/layout/SiteNavbar"
import SiteFooter from "./components/layout/SiteFooter"

import HomePage from "./pages/HomePage"
import EdiliziaPage from "./pages/EdiliziaPage"
import ImpiantisticaPage from "./pages/ImpiantisticaPage"
import ContattiPage from "./pages/ContattiPage"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edilizia" element={<EdiliziaPage />} />
        <Route path="/impiantistica" element={<ImpiantisticaPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </Router>
  )
}

export default App

