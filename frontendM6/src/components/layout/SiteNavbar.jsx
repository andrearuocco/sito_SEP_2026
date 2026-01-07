import React from "react"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./siteLayout.css"

export default function SiteNavbar() {
  return (
    <Navbar expand="lg" className="site-navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" className="site-brand-logo" />
          <span className="site-brand-text">Edilizia & Impianti</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="site-navbar-nav" />
        <Navbar.Collapse id="site-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/edilizia">Edilizia</Nav.Link>
            <Nav.Link as={NavLink} to="/impiantistica">Impiantistica</Nav.Link>
            <Nav.Link as={NavLink} to="/contatti">Contatti</Nav.Link>

            <Button
              as="a"
              href="tel:+393357548581"
              variant="dark"
              className="ms-lg-3"
            >
              Chiama ora
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

