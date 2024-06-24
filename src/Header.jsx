import { Link, NavLink } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext, useEffect } from "react"
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation} from "react-router-dom";

const Header = () =>{


    let location = useLocation()
    console.log(location.pathname)

    const{user} = useContext(UserContext)

    return (
        <Navbar expand='lg' className={location.pathname !== '/' ? "responsive-background": "me-3"} collapseOnSelect="true">
            <Navbar.Brand><img className = "page_logo rounded" src="/logo.svg" alt="Site Logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3"/>
            <Navbar.Offcanvas
            className = "w-50"
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end pe-3">
                {user && <div className="align-items-center responsive-login me-3 bg-info rounded mx-5" ><img className="rounded me-3 ms-2 responsive-login" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /><div className="responsive-login"><h5 className="mt-3 me-2">{user.username}</h5><Link to="/login"><p className="me-2">Switch User</p></Link></div></div>}
                  <Link className="header-links my-2" to="/"><h5>Home</h5></Link>
                  <Link className="header-links my-2" to="/articles"><h5>Articles</h5></Link>
                  <Link className ="header-links responsive-login my-2" to = "/login"><h5>login</h5></Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Container className="d-flex justify-content-end user-icon">{user ? <div className="d-flex align-items-center user-icon me-5 bg-white rounded" ><img className="rounded me-3 ms-2 user-icon" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /><div className="user-icon"><h5 className="mt-3 me-2">{user.username}</h5><Link to="/login"><p className="me-2">Switch User</p></Link></div></div> :<Link className="user-icon me-5" to="/login"><h5 className="text-primary">login</h5></Link>}</Container>
        </Navbar>)


}

export default Header