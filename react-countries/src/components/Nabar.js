import { Button } from "react-bootstrap"
import { ReactComponent as Logo } from "../images/Icon.svg"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid px-5 mx-5 d-flex justify-content-between">
                    <a className="navbar-brand" href="/"><Logo className="mx-auto"/><span className="fw-bold">Country Explorer</span></a>
                    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item border-start border-2">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item border-start border-end border-2">
                                <a className="nav-link" href="/countries">Countries</a>
                            </li>
                            <li className="nav-item border-end border-2">
                                <a className="nav-link" href="/regions">Regions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar