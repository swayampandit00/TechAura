
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { default as JsonData } from "../data/data.json";


export function About() {
  return (

    <div id="about">




      <Container >
        <Row>
          <Col xs={12} md={6}>
            {" "}
            <img src="img/about_img.png" className="img-responsive" alt="" />{" "}
          </Col>
          <Col xs={12} md={6} >
            <div className="about-text">
              <h2>About Us</h2>
              <p>{JsonData ? JsonData.About.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <ul>
                      {JsonData
                        ? JsonData.About.Why.map((key, index) => (
                          <li key={`why-${index}`}>
                            <FontAwesomeIcon icon={faCheck} style={{ color: 'blue' }} />
                            {" "}{`${key}`}
                          </li>
                        ))
                        : "loading"}
                    </ul>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <ul>
                      {JsonData ? JsonData.About.Why2.map((key, index) => (
                        <li key={`why2-${index}`}>
                          <FontAwesomeIcon icon={faCheck} style={{ color: 'blue' }} />
                          {" "}{`${key}`}
                        </li>
                      ))
                        : "loading"}
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
