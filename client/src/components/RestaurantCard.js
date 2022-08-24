import React from 'react'
import {Link} from 'react-router-dom'

function RestaurantCard({restaurant}) {
    const location = restaurant.address

  return (
    <div>
        <Link to={`/restaurant/${restaurant.id}`}><h2>{restaurant.name}</h2></Link>
            <p>{location.street_number} {location.street_name}</p>
            <p>{location.city},{location.state}</p>
            <p>{location.zipcode}</p>
            <img alt="food image" src={restaurant.image_url}/>
    </div>
  )
}

export default RestaurantCard