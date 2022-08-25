import React, {useEffect, useState} from 'react'

function MyRestaurants({user}) {
    const [ownedRestaurant, setOwnedRestaurant] = useState(null)
    const [errors, setErrors] = useState([])
    const [myRestaurantMenus, setMyRestaurantMenus] = useState(null)

    const myRestaurants = user.restaurants
    const restaurantId = myRestaurants.map((rest)=> rest.id)


    useEffect(()=>{
        fetch(`/restaurants/${restaurantId[0]}`)
        .then((resp)=>{
            if(resp.ok){
                resp.json().then(data => {
                    setOwnedRestaurant(data)
                    setMyRestaurantMenus(data.menus)
                })
            }else{
                resp.json().then((data)=> setErrors(data.error))
            }
        })
    },[])

    if (myRestaurantMenus == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    const menusList = myRestaurantMenus.map((menu)=> <li>{menu.name}<button>edit</button><button>remove</button></li>)

    return (
        <div>
            <h1>Welcome to {ownedRestaurant.name} Management Page</h1>
            <ul>Current Menus:
                {menusList}
            </ul>

        </div>
    )
}

export default MyRestaurants