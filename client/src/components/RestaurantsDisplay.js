import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantsDisplay({restaurants}) {

    const restaurantCards = restaurants.map((restaurant) =>{
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    })

  return (
    <div>
        {restaurantCards}
    </div>
  )
}

export default RestaurantsDisplay