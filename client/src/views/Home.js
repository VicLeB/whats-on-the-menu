import React from 'react'
import RestaurantsDisplay from '../components/RestaurantsDisplay'
import styled from "styled-components";

function Home({restaurants}) {

  return (
    <div>
        <h1>Our Featured Restaurants</h1>
        <RestaurantsDisplay restaurants={restaurants}/>
    </div>
  )
}

export default Home