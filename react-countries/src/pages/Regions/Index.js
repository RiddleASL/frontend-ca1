import { Row, Col, Container, InputGroup, Form } from "react-bootstrap"
import CountryCard from "../../components/CountryCard"
import axios from "axios"
import * as React from "react"

const Index = () => {
    return(
        <Container>
            <Row className="my-3 pt-5 d-flex justify-content-center">
                <Col xs={8}>
                    <InputGroup>
                        <Form.Control
                        className="py-3 fs-4"
                        placeholder="Country Common Name"
                        aria-label="Country Common Name"
                        aria-describedby="basic-addon1"
                        onChange={handleText}
                        onKeyUp={handleEnter}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="g-3 pt-5" md={4}>
                <Card>
                    <Card
                </Card>
            </Row>
        </Container>
    )
}

export default Index