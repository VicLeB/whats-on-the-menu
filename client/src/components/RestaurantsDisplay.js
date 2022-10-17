import React from 'react'
import RestaurantCard from './RestaurantCard'
import styled from "styled-components";


function RestaurantsDisplay({restaurants}) {

    const restaurantCards = restaurants.map((restaurant) =>{
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    })

  return (
    <CardDisplay>
        {restaurantCards}
    </CardDisplay>
  )
}

export default RestaurantsDisplay

const CardDisplay = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
flex-wrap: wrap;
justify-content:space-between;
`