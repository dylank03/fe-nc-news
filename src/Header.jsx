import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () =>{

    const{user} = useContext(UserContext)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand><img className = "page_logo" style ={{width: "100px"}} src="/logo.svg" alt="Site Logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Link className="me-3" to="/"><h5>Home</h5></Link>
                <Link className="me-3" to="/articles"><h5>Articles</h5></Link>
              </Nav>
            </Navbar.Collapse>
            <Container className="d-flex justify-content-end">{user ? <div className="user-icon card me-5" ><h1><i className="bi bi-person-fill ms-3"></i><img className="rounded-circle ms-5 me-3" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /></h1><h5 className="ms-3">{user.username}</h5></div> :<Link className="user-icon me-5" to="/login"><h5>login</h5></Link>}</Container>
        </Navbar>)


}

export default Header