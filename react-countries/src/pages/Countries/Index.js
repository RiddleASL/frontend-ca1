import { Row, Col, Container, InputGroup, Form } from "react-bootstrap"
import CountryCard from "../../components/CountryCard"
import axios from "axios"
import * as React from "react"

const Index = () => {
    
    const [data, setData] = React.useState([])
    const [text, setText] = React.useState("")

    React.useEffect(()=>{
        allCountries()
    },[])

    React.useEffect(()=>{
        handleSearch()
    },[text])

    const allCountries = () => {
        axios.get("https://restcountries.com/v3.1/all").then((response)=>{
            setData(response.data)
        })
        .catch(err => {
            // console.log(err);
        })
    }

    const searchCountries = () => {
        axios.get("https://restcountries.com/v3.1/name/" + text).then((response)=>{
            setData(response.data)
        })
        .catch(err => {
            allCountries()
            console.log(err);
        })
    }

    const cards = data.map((card,i) => {
        return(
            <CountryCard props={card} key={i}/>
        )
    })

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        if(text === ""){
            allCountries()
        } else {
            searchCountries()
        }
        
    }

    const handleEnter = (e) => {
        if(e.key === "Enter"){
            handleSearch()
        }   
    }

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
                {cards.length != 0?cards : <div className="spinner-border text-primary" role="status">
                </div>}
                
            </Row>
        </Container>
    )
}

export default Index