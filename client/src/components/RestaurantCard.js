import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";

function RestaurantCard({restaurant}) {
    const location = restaurant.address

  return (
    <RestaurantCardContainer imageUrl = {restaurant.image_url}>
      <RestaurantText>
        <RestaurantLink to={`/restaurant/${restaurant.id}`}>{restaurant.name}</RestaurantLink>
        <AddressDetails>{location.street_number} {location.street_name}</AddressDetails>
        <AddressDetails>{location.city},{location.state}</AddressDetails>
        <AddressDetails>{location.zipcode}</AddressDetails>
      </RestaurantText>
    </RestaurantCardContainer>
  )
}


export default RestaurantCard

const RestaurantCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left ;
  height: 46vh;
  width: 46vw;
  margin: 2%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85),
  transparent), url(${(props)=> props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 1%;
  border: none;
  -webkit-box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.7);
box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.7);
`
const RestaurantText = styled.div`
padding-left: 3%;
padding-bottom: 2%;
`

const RestaurantLink = styled(Link)`
text-decoration: none;
color: white;
font-size: 45px;
font-weight: bold;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
        transition: all 0.2s ease-in-out;
        color: #a5c9ca;
        text-decoration: none;
    }
`

const AddressDetails = styled.h5`
color: white;
`
