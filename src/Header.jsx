import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () =>{

    const{user} = useContext(UserContext)

    return (
        <Navbar expand="lg" className="me-3">
            <Navbar.Brand><img className = "page_logo rounded" style ={{width: "100px"}} src="/logo.svg" alt="Site Logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
              {user && <div className="d-flex align-items-center responsive-login me-3 bg-white rounded w-50" ><img className="rounded me-3 ms-2 responsive-login" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /><div className="responsive-login"><h5 className="mt-3 me-2">{user.username}</h5><Link to="/login"><p className="me-2">Switch User</p></Link></div></div>}
                <Link className="header-links text-center my-2" to="/"><h5>Home</h5></Link>
                <Link className="header-links text-center my-2" to="/articles"><h5>Articles</h5></Link>
                <Link className ="header-links responsive-login text-center my-2" to = "/login"><h5>login</h5></Link>
              </Nav>
            </Navbar.Collapse>
            <Container className="d-flex justify-content-end user-icon">{user ? <div className="d-flex align-items-center user-icon me-5 bg-white rounded" ><img className="rounded me-3 ms-2 user-icon" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /><div className="user-icon"><h5 className="mt-3 me-2">{user.username}</h5><Link to="/login"><p className="me-2">Switch User</p></Link></div></div> :<Link className="user-icon me-5" to="/login"><h5 className="text-primary">login</h5></Link>}</Container>
        </Navbar>)


}

export default Header