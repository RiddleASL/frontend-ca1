//Images
import { ReactComponent as Welcome } from "../images/Welcome.svg"
import { ReactComponent as Countries } from "../images/Countries.svg"
import { ReactComponent as Regions } from "../images/Regions.svg"
import { Button, Col, Container, Row } from "react-bootstrap"

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row className="border-bottom border-2 py-5">
                    <Col className=" d-flex justify-content-center py-4"> <Welcome /> </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-5 g-3 pb-3">
                    <Col md={6} sm={12}>
                        <Countries className="img-fluid" />
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div className="fs-2 lh-1 px-5">
                            <p>Explore the <span className="fw-bold">World</span></p>
                            <div className="text-end pe-5 me-5">
                                <p>and <span className="fw-bold">Learn</span> more about</p>
                                <p>our Home</p>
                            </div>
                            <div className="d-flex justify-content-center pt-3 mt-3">
                                <Button href="/countries" className="fs-md-3">Explore Countries</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr className="m-0 p-0 border-2"/>
            <Container>
                <Row className="mt-5">
                    <Col className="d-flex align-items-center">
                        <div className="fs-2 lh-1 px-5">
                            <p>Explore the <span className="fw-bold">World</span></p>
                            <div className="text-end pe-5 me-5">
                                <p>and <span className="fw-bold">Learn</span> more about</p>
                                <p>our Home</p>
                            </div>
                            <div className="d-flex justify-content-center py-3 mt-5">
                                <Button href="/regions">Explore Regions</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <Regions className="img-fluid"  />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home