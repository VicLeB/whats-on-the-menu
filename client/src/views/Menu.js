import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Menu() {
    const [menu, setMenu] = useState(null)
    const [errors, setErrors] = useState([])

    const params = useParams()
    console.log(menu)

    useEffect(()=>{
        fetch(`/menus/${params.id}`)
        .then((resp)=>{
            if(resp.ok){
                resp.json().then(data => setMenu(data))
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
        <h2>{menu.name}</h2>
    </div>
  )
}

export default Menu