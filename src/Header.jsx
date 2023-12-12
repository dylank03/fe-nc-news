import { Link } from "react-router-dom"


const Header = () =>{

    return(<><h1>NC News</h1>    
    <nav>
        <Link to = "/"> Home </Link>
        <Link to="/Articles"> Articles</Link>
    </nav>
</>)
}

export default Header