import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";

function RestaurantCard({restaurant}) {
    const location = restaurant.address

  return (
    <RestaurantCardContainer imageUrl = {restaurant.image_url}>
            <Link to={`/restaurant/${restaurant.id}`}><RestaurantLink>{restaurant.name}</RestaurantLink></Link>
            <p>{location.street_number} {location.street_name}</p>
            <p>{location.city},{location.state}</p>
            <p>{location.zipcode}</p>
            {/* <Image alt="food image" src={restaurant.image_url}/> */}
    </RestaurantCardContainer>
  )
}


export default RestaurantCard

const RestaurantCardContainer = styled.div`
  display: flex;
  height: 46vh;
  width: 46vw;
  margin: 2%;
  background-image: url(${(props)=> props.imageUrl}); opacity: 0.8;
  background-size: cover;
  background-position: center;
`

const RestaurantLink = styled.h2`
text-decoration: none;
color: white;
`
