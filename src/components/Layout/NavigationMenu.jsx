import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";

function NavigationMenu() {
  const {pathname} = useLocation()
  return (
    <>

        <Navbar bg="white" expand={"lg"} className="mb-3 shadow-md" fixed="top">
          <Container className="py-2">
            <Navbar.Brand href="#">TAIWO OYELUMADE</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  TAIWO OYELUMADE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    className={`nav-link hover:border-b hover:border-sky-500 text-xl mr-10 ${pathname==="/"? "border-sky-500 border-b-2":null}`}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`nav-link hover:border-b hover:border-sky-500 text-xl mr-10 ${pathname.includes("about")? "border-sky-500 border-b-2":null}`}
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={`nav-link hover:border-b hover:border-sky-500 text-xl ${pathname.includes("contact")? "border-sky-500 border-b-2":null}`}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  );
}

export default NavigationMenu;
