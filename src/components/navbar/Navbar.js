import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { resetLoggedUser } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navibar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(resetLoggedUser());
    Swal.fire("Logout Successfully");
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
                {user?.token ? (
                  <Link to="/add-recipe" className="nav-menu">
                    Add Recipe
                  </Link>
                ) : (
                  <div
                    onClick={() =>
                      Swal.fire({
                        icon: "info",
                        text: "You need to login first",
                      }).then(
                        (result) => result.isConfirmed && navigate("/login")
                      )
                    }
                    className="nav-menu"
                  >
                    Add Recipe
                  </div>
                )}
              </Nav.Link>
              <Nav.Link>
                {user?.token ? (
                  <Link to="/profile" className="nav-menu">
                    profile
                  </Link>
                ) : (
                  <div
                    onClick={() =>
                      Swal.fire({
                        icon: "info",
                        text: "You need to login first",
                      }).then(
                        (result) => result.isConfirmed && navigate("/login")
                      )
                    }
                    className="nav-menu"
                  >
                    Profile
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {user?.token ? (
                <Dropdown size="sm" as={ButtonGroup}>
                  <Button variant="warning" size="sm">
                    {user?.name}
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
