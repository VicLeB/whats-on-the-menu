import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

function MenusContainer({menus, restaurantParams}) {

    const menuList = menus.map((menu)=>{
        return <ViewMenuLink to={`/restaurant/${restaurantParams}/menu/${menu.id}`} key={menu.id}>{menu.name}</ViewMenuLink>
    })
  return (
    <MenuListContainer>
        {menuList}
    </MenuListContainer>
  )
}

export default MenusContainer

const MenuListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3vh;
  justify-content: space-evenly;
`

const ViewMenuLink = styled(Link)`
  text-decoration: none;
  color:  #e7f6f2;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding-right: 3vw;

  &:hover {
        transition: all 0.2s ease-in-out;
        color: #a5c9ca;
        text-decoration: none;
    }
`