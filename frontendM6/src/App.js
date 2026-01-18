import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import SiteNavbar from "./components/layout/SiteNavbar"
import SiteFooter from "./components/layout/SiteFooter"

import HomePage from "./pages/HomePage"
import EdiliziaPage from "./pages/EdiliziaPage"
import ImpiantisticaPage from "./pages/ImpiantisticaPage"
import ServiziPage from "./pages/ServiziPage"
import ITPage from "./pages/ITPage"
import ContattiPage from "./pages/ContattiPage"
import NotFound from "./pages/NotFound"

import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servizi" element={<ServiziPage />} />
        <Route path="/edilizia" element={<EdiliziaPage />} />
        <Route path="/impiantistica" element={<ImpiantisticaPage />} />
        <Route path="/it" element={<ITPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <SiteNavbar />
      <AnimatedRoutes />
      <SiteFooter />
    </Router>
  )
}


