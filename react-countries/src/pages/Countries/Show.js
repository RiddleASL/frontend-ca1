import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import CountryCard from '../../components/CountryCard'
import { Col, Container, Row } from "react-bootstrap";
import { wait } from "@testing-library/user-event/dist/utils";

const Show = () => {
	const API_URL = "https://restcountries.com/v3.1/alpha";

	const { cca3 } = useParams();
	const [card, setCard] = useState();
	const [borders, setBorders] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			await getCard();
		}
		
		fetchData().catch(console.error)		
	}, []);

	const getCard = () => {
		axios.get(`${API_URL}/${cca3}`).then((response) => {
			setCard(response.data[0]);
		});
	};

	function getBord(nation) {
		axios.get(`${API_URL}/${nation}`).then((response) => {
			setBorders((curr) => [...curr, response.data[0]])
		});
	};

	if (card !== undefined) {
		const nativeName = Object.values(card.name.nativeName)[0];

		return (
			<>
				<Container>
					<Row>
						<Col md={9}>
                        <Row>
								<Col className="d-flex justify-content-between py-3">
									<div>
										<h2>{card.name.common}</h2>
										<h5>{nativeName.common}</h5>
									</div>
									<div className="border border-2 rounded" />
									<div>
										<h2>{card.name.official}</h2>
										<h5>{nativeName.official}</h5>
									</div>
								</Col>
							</Row>
							<hr className="border border-2 rounded" />
							<Row>
								<Col className="d-flex justify-content-center py-2">
									<img src={card.flags.svg} className="img-fluid border" />
								</Col>
							</Row>
                            <hr className="border border-2 rounded" />
                            <Row>
                                <Col className="d-flex justify-content-between py-2 pb-4"> 
									<div className="col-6">
									<h3>{card.region}</h3>
									<h5>{card.subregion}</h5>
									<br/>
									<h4>{`Population : ${card.population}`}</h4>
									<br/>
									<h4>{`Timezone : ${card.timezones[0]}`}</h4>
									</div>
									<div className="border border-2 rounded mx-2"/>
									<div>
										<h2 className="text-center text-decoration-underline">Bordering Nations</h2>
										
									</div>
								</Col>
                            </Row>
						</Col>
						<Col md={3} className="pt-5 mt-5">
							<div className="pt-3 sticky-top">
                                <iframe
                                    width="400"
                                    height="350"
                                    className="rounded"
                                    loading="lazy"
                                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                                        card.latlng[1] + 0.5
                                    }%2C${card.latlng[0] - 4}%2C${card.latlng[1]}%2C${
                                        card.latlng[0] + 3
                                    }&amp;layer=mapnik&amp;marker=${card.latlng[1]}%2C${
                                        card.latlng[0]
                                    }`}
                                ></iframe>
                            </div>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
};

export default Show;
