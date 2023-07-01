import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {BrowserRouter, Link } from "react-router-dom";


export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >Text-Utils</Navbar.Brand>
          <Nav className="me-auto">
          {/* <BrowserRouter> */}
          {/* <Outlet> */}

            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/features">Features</Link></Nav.Link>
        {/* </Outlet> */}
         {/* </BrowserRouter> */}
         </Nav>
        </Container>
      </Navbar>
    </>
  );
}
