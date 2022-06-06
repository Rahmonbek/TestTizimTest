import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import { MenuOutlined } from "@ant-design/icons";

export default class Navbarr extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar bg="light" expand="lg" className="navbari">
            <Container>
              <Navbar.Brand href="#home" className="nomi">
                G'ofurjonova Umida A'zamjon qizi
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                children={
                  <MenuOutlined
                    style={{ color: "white", fontSize: "1.5rem" }}
                  />
                }
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto mt-2">
                  <Link className="navlink py-2 surish" to="/kabinet">
                    Test ishlash
                  </Link>
                  <Link className="navlink py-2" to="/kabinet/olimpiada">
                    Olimpiadalar
                  </Link>
                  <Link className="navlink py-2" to="/kabinet/natija">
                    Natijalar
                  </Link>
                  <Link className="navlink py-2" to="/kabinet/parol">
                    Parol almashtirish
                  </Link>
                  <Link className="navlink py-2" to="../../">
                    Chiqish
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}
