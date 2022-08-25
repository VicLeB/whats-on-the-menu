import React from 'react'
import Menu from '../views/Menu'
import { useParams, Link } from 'react-router-dom'

function MenusContainer({menus, restaurantParams}) {

    const menuList = menus.map((menu)=>{
        return <Link to={`/restaurant/${restaurantParams}/menu/${menu.id}`} key={menu.id}><h2>{menu.name}</h2></Link>
    })
  return (
    <div>
        {menuList}
    </div>
  )
}

export default MenusContainer