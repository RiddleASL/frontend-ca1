import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import CountryCard from '../../components/CountryCard'
import { Col, Container, Row } from "react-bootstrap";
import { wait } from "@testing-library/user-event/dist/utils";
import BorderNation from "../../components/BorderNation";
import CountryWheather from "../../components/CountryWheather"

const Show = () => {
	const API_URL = "https://restcountries.com/v3.1/region";

	const { region } = useParams();
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		setCountries([])
		const fetchData = async () => {
			await getCards();
		}
		
		fetchData().catch(console.error)		
	}, [region]);

	const getCards = () => {
		axios.get(`${API_URL}/${region}`).then((response) => {
			response.data.map((country,i) => {
				setCountries((curr) => [...curr, <CountryCard props={country} key={i} />])
			})
		});
	};

	if (countries.length != 0) {
		

		return (
			<Container className="pt-4">
				<Row md={4} className="g-3">
					{countries}
				</Row>
			</Container>
		);
	} else {
		<div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
	}
};

export default Show;
