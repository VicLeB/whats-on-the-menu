import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Menu({user}) {
    const [menu, setMenu] = useState(null)
    const [errors, setErrors] = useState([])
    const [menuCourses, setMenuCourses] = useState([])

    const params = useParams()

    const courseList = menuCourses.map((course)=>{
        return <h2 key={course.id}>{course.name}</h2>
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
        <div>
            <h1>{menu.name}</h1>
            {courseList}
        </div>
    )
}

export default Menu