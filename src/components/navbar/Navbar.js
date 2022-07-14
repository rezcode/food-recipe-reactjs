import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { ProfileContex } from "../../config/Contex";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Navibar = () => {
  const { token, username } = ProfileContex?._currentValue2;

  const handleAlert = () => {
    if (!token) {
      Swal.fire("You need to login first");
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(false);
    window.location.href = "/";
  };

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
              <Nav.Link></Nav.Link>
              <Nav.Link>
                {token ? (
                  <Link to="/add-recipe" className="nav-menu">
                    Add Recipe
                  </Link>
                ) : (
                  <Link to="/" onClick={handleAlert} className="nav-menu">
                    Add Recipe
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link>
                {token ? (
                  <Link to="/profile" className="nav-menu">
                    Profile
                  </Link>
                ) : (
                  <Link to="/" onClick={handleAlert} className="nav-menu">
                    Add Recipe
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {token ? (
                <Dropdown size="sm" as={ButtonGroup}>
                  <Button variant="warning" size="sm">
                    {username}
                  </Button>

                  <Dropdown.Toggle
                    split
                    variant="warning"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="/login" className="nav-menu">
                  Login
                </Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
