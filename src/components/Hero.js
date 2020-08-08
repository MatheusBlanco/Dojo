import React from 'react';
import { Jumbotron, Row, Container, Col } from 'react-bootstrap';


function Hero(props) {

    return(
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        { props.title && <h1>{props.title}</h1> }
                        { props.subTitle && <h3>{props.subTitle}</h3> }
                        { props.text && <h3>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;