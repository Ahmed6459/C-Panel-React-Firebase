import React from "react";
import Toggle from "./Toggle"

import { Navbar,Nav,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hedder = ({toggleTheme,theme}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <LinkContainer to="/">
      <Navbar.Brand>Controle Panel</Navbar.Brand>
    </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Toggle toggleTheme={toggleTheme} theme={theme}/>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default Hedder ;