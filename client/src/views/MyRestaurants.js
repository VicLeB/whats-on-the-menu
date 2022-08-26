import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

function MyRestaurants({user}) {
    const [ownedRestaurant, setOwnedRestaurant] = useState(null)
    const [errors, setErrors] = useState([])
    const [myRestaurantMenus, setMyRestaurantMenus] = useState(null)
    const [showNewMenuForm, setShowNewMenuForm] = useState(false)
    const [newMenuName, setNewMenuName] = useState("")
    const [newMenuTheme, setNewMenuTheme]= useState(1)

    const myRestaurants = user?.restaurants
    const restaurantId = myRestaurants?.map((rest)=> rest.id)
    const history= useHistory()


    useEffect(()=>{
        if (restaurantId != null) {
            fetch(`/restaurants/${restaurantId?.[0]}`)
                .then((resp)=>{
                    if(resp.ok){
                        resp.json().then(data => {
                            setOwnedRestaurant(data)
                            setMyRestaurantMenus(data?.menus)
                        }).catch(err => console.log({err}))
                    }else{
                        resp.json().then((data)=> setErrors(data.error))
                    }
                })
        }
    },[restaurantId])

    function newMenuClick(){
        setShowNewMenuForm(!showNewMenuForm)
    }

    function handleNewMenu(e){
        e.preventDefault()
        fetch('/menus',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newMenuName,
                theme: newMenuTheme,
                restaurant_id: restaurantId[0]
            }),
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }

    function handleMenuDelete(menu){
        fetch(`/menus/${menu.id}`,{
            method: 'DELETE',
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }



    if (myRestaurantMenus == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    const menusList = myRestaurantMenus.map((menu)=> <li>{menu.name}<Link to={`/editMenu/${menu.id}`}><button>edit</button></Link><button onClick={()=>handleMenuDelete(menu)}>remove</button></li>)

    return (
        <div>
            <h1>Welcome to {ownedRestaurant.name} Management Page</h1>
            <ul>Current Menus:
                <button onClick={newMenuClick}>Add A New Menu</button>
                {showNewMenuForm? <div>
                    <form onSubmit={handleNewMenu}>
                        <label>Name:
                            <input type="text" value={newMenuName} placeholder="Add new Menu name..." onChange={(e)=> setNewMenuName(e.target.value)}/>
                        </label>
                        <label>Theme:
                            <input type="number" value={newMenuTheme} placeholder={1} />
                        </label>
                        <input type="submit" value="Add"/>
                    </form>
                </div>:null}
                {menusList}
            </ul>
        </div>
    )
}

export default MyRestaurants