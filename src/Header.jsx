import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"

const Header = () =>{

    const{user} = useContext(UserContext)

    return(<>
    {user && <h2>User: {user}</h2>}
    <div className="header_container"> 
        <img className = "page_logo" src="../src/assets/ShareSphereLogo.png" alt="My Image"></img>
        <nav className="header_list">
        <Link className = "header_link" to = "/"> Home </Link>
        <Link className="header_link" to="/articles"> Articles</Link>
        </nav>
    </div>
</>)
}

export default Header