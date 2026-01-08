import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"
import logo from "../../assets/logo.png"
import "./siteLayout.css"

export default function SiteNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="site-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="SEP srl" className="site-brand-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="site-navbar-nav" />
        <Navbar.Collapse id="site-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/edilizia">
              Edilizia
            </Nav.Link>
            <Nav.Link as={NavLink} to="/impiantistica">
              Impiantistica
            </Nav.Link>

            <Nav.Link
              as="a"
              href="https://wa.me/393929004078"
              target="_blank"
              rel="noreferrer"
              className="nav-whatsapp"
              aria-label="Contattaci su WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp size={34} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


