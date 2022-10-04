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
            <h1>Our Featured Restaurants</h1>
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