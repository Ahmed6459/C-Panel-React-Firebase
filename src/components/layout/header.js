import React from "react";
import Toggle from "./Toggle"

import { Navbar,Nav,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {signout} from "../../actions/authAction"



const Hedder = ({toggleTheme,theme}) => {

  const auth = useSelector((state) => state.firebase.auth)
  const {uid} = auth;

  console.log(auth);
  const dispatch = useDispatch();

  const handelLogout = ()=>{
    dispatch(signout())

  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <LinkContainer to="/">
      <Navbar.Brand>Controle Panel</Navbar.Brand>
    </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to="/">
          <Nav.Link  >Home</Nav.Link>
        </LinkContainer>
        {uid?
            <LinkContainer to="/login">
          <Nav.Link className="mr-2" onClick={handelLogout}>logout</Nav.Link>
        </LinkContainer>:
        <>
        <LinkContainer to="/login">
          <Nav.Link className="mr-2">Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signup">
          <Nav.Link className="mr-2">Sign Up</Nav.Link>
        </LinkContainer>
        </>
        }
          <Toggle toggleTheme={toggleTheme} theme={theme}/>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default Hedder ;