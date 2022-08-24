import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function RestaurantDetails() {
    const [restaurant, setRestaurant] = useState({})
    const [errors, setErrors] = useState([])

    const params = useParams()

    useEffect(()=>{
        fetch(`/restaurants/${params.id}`)
        .then((resp)=>{
            if(resp.ok){
                resp.json().then(data => setRestaurant(data))
            }else{
                resp.json().then((data)=> setErrors(data.error))
            }
        })
    },[])


  return (
    <div>
        <h1>Welcome to {restaurant.name}!</h1>
        <img alt="food image" src={restaurant.image_url}/>
    </div>
  )
}

export default RestaurantDetails