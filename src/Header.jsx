import { Link } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import { useContext } from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react"


const Header = () =>{

    const{user} = useContext(UserContext)

    return(<><h1>NC News</h1>
    {user && <h2>User: {user}</h2>}   
    <nav className = "navbar">
        <Link className = "navitem" to = "/"> Home </Link>
        <Link className = "navitem" to="/Articles"> Articles</Link>
    </nav>
</>)
}
// return (
//     <div>
//     <Navbar>
//       <NavbarContent className="sm:flex gap-4" justify="center">
//         <NavbarItem>
//            <Link to = "/"> Home </Link>
//         </NavbarItem>
//         <NavbarItem>
//         <Link to="/Articles"> Articles</Link>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//     </div>
//   );
// }

export default Header