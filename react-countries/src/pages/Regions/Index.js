import { Row, Col, Container, InputGroup, Form, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import CountryCard from "../../components/CountryCard"
import axios from "axios"
import * as React from "react"

const Index = () => {
    return(
        <Container>
            <Row className="pt-5">
                <Col md={6} className="m-0 p-0 p-1">
                    <Card>
                        <Card.Header> 
                            <Card.Img src="https://i.etsystatic.com/36867827/r/il/948792/4193015157/il_1080xN.4193015157_ngaw.jpg" className="img-fluid rounded"></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <h1><Link to={'/regions/europe'}>Europe</Link></h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="m-0 p-0 p-1">
                    <Card>
                        <Card.Header>
                            <Card.Img src="https://i.etsystatic.com/36867827/r/il/8bab7f/4142443202/il_570xN.4142443202_s875.jpg" className="img-fluid rounded"></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <h1><Link to={'/regions/africa'}>Africa</Link></h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="m-0 p-0 p-1">
                <Card>
                        <Card.Header>
                            <Card.Img src="https://static.vecteezy.com/system/resources/previews/003/087/783/original/outline-simple-map-of-asia-free-vector.jpg" className="img-fluid rounded"></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <h1><Link to={'/regions/asia'}>Asia</Link></h1>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Img src="https://i.pinimg.com/736x/61/64/60/616460e851846d64385a95287c11b816.jpg" className="img-fluid rounded"></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <h1><Link to={'/regions/oceania'}>Oceania</Link></h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="m-0 p-0 p-1">
                    <Card className="">
                        <Card.Header>
                            <Card.Img src="https://i.pinimg.com/564x/a9/e1/26/a9e126b194bd246f71428b3befd913e7.jpg" className="img-fluid rounded"></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <h1><Link to={'/regions/america'}>Americas</Link></h1>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Index