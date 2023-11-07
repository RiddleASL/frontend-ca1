import { useEffect, useState  } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CountryCard from "./CountryCard"

const BorderNation = (props) => {
    const API_URL = 'https://restcountries.com/v3.1/alpha'

    const [nations, setNation] = useState([])
    window.scrollTo({top:0, behavior: "smooth"})

    // console.log(props.props);
    useEffect(()=>{
        setNation([])
        axios.get(`${API_URL}/${props.props}`).then((response)=>{
            console.log(response.data[0]);
            let len = 0;
            response.data[0].borders != undefined ? len = response.data[0].borders.length : len = 0;
            if(len > 0)
            response.data[0].borders.map((nation,i) => {
                axios.get(`${API_URL}/${nation}`).then((nat)=>{
                    // console.log(nations.length < response.data[0].borders.length);
                    if(nations.length < response.data[0].borders.length){
                        setNation((curr) => [...curr, <CountryCard props={nat.data[0]} key={i}/>])
                    }
                })
            })
        })
    },[props])

    return (
        <>
            {nations}
        </>
    )
}

export default BorderNation