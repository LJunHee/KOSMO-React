import React, { useContext, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import LoginContext from './LoginContext';

function Frame() {
  const {user}=useContext(LoginContext);
  useEffect(()=>{console.log(user)},[]);
  return (
    <>
    <Navbar  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">인제대학교</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="div" className="me-auto">
          <Link to={'/'}><Nav.Link as="div">Home</Nav.Link></Link>
          <Link to={'/intro'}><Nav.Link as="div">Intro</Nav.Link></Link>
          <Link to={'/dept/'}><Nav.Link as="div">Dept</Nav.Link></Link>
            {user.id}
            <Link to={'/login/'}><Nav.Link as="div">Login</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
        <Outlet/>
    </Container>
    </>
  )
}

export default Frame