import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import MenusContainer from '../components/MenusContainer';

function Menu({user}) {
    const [menu, setMenu] = useState(null)
    const [errors, setErrors] = useState([])
    const [menuCourses, setMenuCourses] = useState([])

    const params = useParams()

    const courseList = menuCourses.map((course)=>{
        const items = course.menu_items
        const itemsList= items.map((item)=>{
            return <MenuItem>
                    <ItemTitlePriceContainer>
                        <ItemTitle>{item.name}</ItemTitle>
                        <ItemPrice>${item.price}</ItemPrice>
                    </ItemTitlePriceContainer>
                        <ItemDescription>{item.description}</ItemDescription>
                    </MenuItem>
        })

        return <>
            <CourseTitle key={course.id}>{course.name}</CourseTitle>
            <CourseContentContainer>
                {itemsList}
            </CourseContentContainer>
        </>
    })



    useEffect(()=>{
        fetch(`/menus/${params.id}`)
        .then((resp)=>{
            if(resp.ok){
                resp.json().then(data => {
                    setMenu(data)
                    setMenuCourses(data.courses)
                })
            }else {
                resp.json().then((data)=> setErrors(data.error))
            }
        })
    },[])

    if(menu == null){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <MenuContainer>
            <MenuTitle>{menu.name}</MenuTitle>
            {courseList}
        </MenuContainer>
    )
}

export default Menu

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12vw;
    margin-right: 12vw;
`

const MenuTitle = styled.h1`
    padding-top: 3vh;
    padding-bottom: 5vh;
    color: #a5c9ca;
    text-shadow: #474747 3px 5px 2px;
    font-weight: bold;
    font-size: 40px;
`

const CourseTitle = styled.h2`
    color: #a5c9ca;
    padding-bottom: 3vh;
`
const CourseContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 5vh ;
`
const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width:500px;
    padding: 1%;
`
const ItemTitlePriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ItemTitle = styled.h3`
    color: #a5c9ca;
    text-align: left;

`
const ItemPrice = styled.h4`
    color: #a5c9ca;
    padding-left: 3vw;
`
const ItemDescription = styled.h6`
    color: #a5c9ca;
    font-style: italic;
    text-align: left;
`