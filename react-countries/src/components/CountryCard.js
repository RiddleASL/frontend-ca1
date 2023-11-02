import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CountryCard = (props) => {
    const data = props.props;

    return(
        <Col>
            <Card className="px-2 h-100">
                <Card.Title className="text-center my-3 fw-bold"><Link to={`/countries/${data.cca3}`} className="text-decoration-none">{data.name.common}</Link></Card.Title>
                <Link to={`/countries/${data.cca3}`}><Card.Img src={data.flags.svg} className="border"></Card.Img></Link>
                <Card.Body className="d-flex align-items-end">
                    <div className="border-top border-3 pt-3">
                        <Card.Text>Capital : {(data.capital !== undefined && data.capital.length > 1) ? data.capital[0] : data.capital}</Card.Text>
                        <Card.Text>Population : {data.population}</Card.Text> 
                    </div>               
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CountryCard