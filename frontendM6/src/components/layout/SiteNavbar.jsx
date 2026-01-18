import { useEffect, useMemo, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, Link, useLocation } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"
import logo from "../../assets/logo-transparent.png"
import "./siteLayout.css"

export default function SiteNavbar() {
  const { pathname } = useLocation()
  const isIT = useMemo(() => pathname === "/it", [pathname])

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (isIT) {
      setScrolled(false)
      return
    }

    const onScroll = () => {
      const y = window.scrollY || 0
      setScrolled(y > 10)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isIT])

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`site-navbar ${scrolled ? "is-scrolled" : "is-top"} ${isIT ? "is-it" : ""}`}
    >
      <Container className="site-navbar-inner">
        <Navbar.Brand as={Link} to="/" className="brand-wrap" aria-label="Vai alla Home">
          <img src={logo} alt="SEP Srl" className="site-brand-logo" />
        </Navbar.Brand>

        <Navbar.Toggle className="site-toggler" aria-controls="site-navbar-nav" />
        <Navbar.Collapse id="site-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2 site-nav-links">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/edilizia">
              Edilizia
            </Nav.Link>

            <Nav.Link as={NavLink} to="/impiantistica">
              Impiantistica
            </Nav.Link>

            <Nav.Link as={NavLink} to="/it">
              IT
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
              <span className="d-inline-flex align-items-center gap-2">
                <FaWhatsapp size={30} />
                <span className="d-none d-lg-inline style">Contattaci</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



