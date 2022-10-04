import React from 'react'
import RestaurantsDisplay from '../components/RestaurantsDisplay'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

function Home({restaurants}) {

  return (
    <Container fluid>
      <Row>
        <Col>
          <MainBanner>
            <FeatureTitle>Our Featured Restaurants</FeatureTitle>
          </MainBanner>
        </Col>
      </Row>
      <Row>
        <Col>
          <RestaurantsDisplay restaurants={restaurants}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Home

const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  width: 100wv;
`
const FeatureTitle = styled.h1`
font-weight: bold;
font-size: 50px;
color: #a5c9ca;
text-shadow: #474747 3px 5px 2px;
`