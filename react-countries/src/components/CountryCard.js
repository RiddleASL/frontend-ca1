import { Card, Col } from "react-bootstrap"

const CountryCard = (props,key) => {
    return(
        <Col key={key}>
            <Card>
                <Card.Title className="text-center my-3 fw-bold">{props.name.common}</Card.Title>
                <Card.Body>
                    <Card.Text>Capital : </Card.Text>
                    <Card.Text>Population : </Card.Text>                
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CountryCard