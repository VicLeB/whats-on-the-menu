import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import ReviewsContainer from '../components/ReviewsContainer'

function RestaurantDetails({user}) {
    const [restaurant, setRestaurant] = useState(null)
    const [errors, setErrors] = useState([])

    const params = useParams()

    const writeReview= () =>{
        if (user == null){
        return <p>Sign in or Create an account to add your own Review</p>
    } else{
        return user.admin? null: <Link to={`/restaurant/${params.id}/review`}><button>Add Your Review</button></Link>
    }
}

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

    if (restaurant == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h1>Welcome to {restaurant.name}!</h1>
            <img alt="food image" src={restaurant.image_url}/>
            <h2>Checkout our Reviews:</h2>
            {writeReview()}
            <ReviewsContainer restaurant={restaurant}/>
        </div>
    )
}

export default RestaurantDetails