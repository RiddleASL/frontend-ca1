import { Row, Card, Col, Container, Button, InputGroup, Form } from "react-bootstrap"
import CountryCard from "../../components/CountryCard"
import axios from "axios"
import * as React from "react"

const Index = () => {
    
    const [data, setData] = React.useState([])
    const [text, setText] = React.useState("")
    const [cards, setCards] = React.useState([])

    React.useEffect(()=>{
        allCountries()
    },[])

    const allCountries = () => {
        axios.get("https://restcountries.com/v3.1/all").then((response)=>{
            setData(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const searchCountries = () => {
        axios.get("https://restcountries.com/v3.1/name/" + text).then((response)=>{
            setData(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    // data.map((card,i) => {
    //     return(
    //         <CountryCard props={card} key={i}/>
    //     )
    // })

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        searchCountries()
    }

    return(
        <Container>
            <Row className="my-3">
                <Col xs={2}>
                    <Button className="w-100">Search</Button>
                </Col>
                <Col xs={6}>
                    <InputGroup>
                        <Form.Control
                        placeholder="Country Common Name"
                        aria-label="Country Common Name"
                        aria-describedby="basic-addon1"
                        onChange={handleText}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="g-3 pt-5" md={4}>
                {cards}
            </Row>
        </Container>
    )
}

export default Index