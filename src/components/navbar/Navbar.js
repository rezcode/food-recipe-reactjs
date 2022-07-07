import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <>
      <Navbar fixed="top" bg="light">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand-nav">
              Food Recipe
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="nav-menu">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/add-recipe" className="nav-menu">
                  Add Recipe
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/profile" className="nav-menu">
                  Profile
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/login" className="nav-menu">
                Login
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
