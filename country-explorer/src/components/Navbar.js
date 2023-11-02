import { ReactComponent as Logo } from "../assets/images/Logo.svg"
import {Link} from "react-router-dom"

//CSS Stuff
import { Container } from "react-bootstrap"

const Navbar = () => {
    return(
        <>
            <Container>
                <Link to={"/"} className="d-flex">
                    <Logo/>
                    <h1>Country Explorer</h1>
                </Link>
                <Link to={"/"}>Home 2</Link>
            </Container>
        </>
    )
}

export default Navbar