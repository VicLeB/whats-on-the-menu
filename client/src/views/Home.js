import React from 'react'
import RestaurantsDisplay from '../components/RestaurantsDisplay'

function Home({restaurants}) {

  return (
    <div>
        <h1>Welcome!</h1>
        <RestaurantsDisplay restaurants={restaurants}/>
    </div>
  )
}

export default Home