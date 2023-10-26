import { Row, Card, Col, Container } from "react-bootstrap"
import CountryCard from "../../components/CountryCard"
import axios from "axios"
import * as React from "react"

const Index = () => {
    
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((response)=>{
            setData(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    // const cards = data.map((card,i) => {
    //     return(
    //         <Col key={i}>
    //             <Card>
    //                 <Card.Title className="text-center my-3 fw-bold">{card.name.common}</Card.Title>
    //                 <Card.Body>
    //                     <Card.Text>Capital : </Card.Text>
    //                     <Card.Text>Population : </Card.Text>                
    //                 </Card.Body>
    //             </Card>
    //         </Col>
    //     )
    // })

    const cards = data.map((card,i) => {
        return(
            <CountryCard props={card} key={i} />
        )
    })

    return(
        <Container>
            <h1>Index Countries</h1>
            <Row className="g-3" md={4}>
                {cards}
            </Row>
        </Container>
    )
}

export default Index