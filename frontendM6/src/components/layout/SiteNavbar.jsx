import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./siteLayout.css"
import { FaWhatsapp } from "react-icons/fa"

export default function SiteNavbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`site-navbar ${scrolled ? "scrolled" : ""}`} >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" className="site-brand-logo border rounded-4 flag-wave" />
          {/* <span className="site-brand-text">Edilizia & Impianti</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="site-navbar-nav" />
        <Navbar.Collapse id="site-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/edilizia">Edilizia</Nav.Link>
            <Nav.Link as={NavLink} to="/impiantistica">Impiantistica</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/contatti">Contatti</Nav.Link> */}
            <Nav.Link as={NavLink} to="https://wa.me/393929004078"><FaWhatsapp size={40} color="green" /></Nav.Link>

            {/* <Button
              as="a"
              href="https://wa.me/393421767992"
              variant="dark"
              className="ms-lg-3 btn-icon"
              aria-label="Contattaci su WhatsApp"
              title="WhatsApp"
            > */}
            
            {/* </Button> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

