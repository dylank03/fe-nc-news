import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"

const Header = () =>{

    const{user} = useContext(UserContext)

    return(<>
    <div className="navbar bg-blue"> 
        <img className = "page_logo" src="/logo.svg" alt="Site Logo"></img>
        <nav className="d-flex justify-content-center vw-100 position-absolute">
        <Link className = "header_link" to = "/"> Home </Link>
        <Link className="header_link" to="/articles"> Articles</Link>
        </nav>
        {user ? <div className="card bg-light-blue mr-20"><h1><i className="bi bi-person-fill"></i><img className="rounded-circle ml-4" style = {{height: "40px", width: "40px"}} src={user.avatar_url} /></h1><h5>{user.username}</h5></div> : <h2 className="mr-20 text-white">Log In</h2>}
    </div>
</>)
}

export default Header