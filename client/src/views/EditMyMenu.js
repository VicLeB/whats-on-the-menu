import React, { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'

function EditMyMenu() {
    const [editMenu, setEditMenu] = useState(null)
    const [editCourses, setEditCourses] = useState([])
    const [errors, setErrors] = useState([])
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [courseName, setCourseName] = useState("")
    const [showAddCourse, setShowAddCourse] = useState(false)
    const [editCourseName, setEditCourseName]= useState("")
    const [courseId, setCourseId]= useState(null)

    const params = useParams()
    const history = useHistory()
    const menuId= params.id

    const courseNameFormData = {
        name: editCourseName,
        menu_id: menuId
    }
    // console.log(editMenu)

    useEffect(()=>{
        fetch(`/menus/${menuId}`)
        .then((resp)=>{
            if(resp.ok){
                resp.json().then((data)=>{
                    setEditMenu(data)
                    setEditCourses(data.courses)
                })
            }else {
                resp.json().then((data)=> setErrors(data.error))
            }
        })
    },[])
    console.log(errors)

    function addCourseClick(){
        setShowAddCourse(!showAddCourse)
    }

    function handleAddCourse(e){
        e.preventDefault();
        fetch('/courses',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseNameFormData),
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }

    const courses = editCourses.map((course)=>{
        const editItems = course.menu_items
        const editItemsList= editItems.map((item)=>{
            return <div>
                <form>
                    <label>Item Name:
                        <input type="text" value={itemName} placeholder={item.name} onChange={(e)=> setItemName(e.target.value)}/>
                    </label>
                    <label>Item Description:
                        <textarea value={itemDescription} placeholder={item.description} onChange={(e)=> setItemDescription(e.target.value)}/>
                    </label>
                    <label>Item Price:
                        <input type="number" value={itemPrice} placeholder={item.price} onChange={(e)=> setItemPrice(e.target.value)}/>
                    </label>
                    <input type="submit" value="Save"/>
                </form>
                <button>Delete item</button>
            </div>
        })

        return <div>
            <form>
                <label>Course Name:
                <input type="text" value={courseName} placeholder={course.name}onChange={(e)=> setCourseName(e.target.value)}/>
                </label>
                <input type="submit" value="Save"/>
            </form>
            <button>Delete Course</button>
            {editItemsList}
        </div>
    })

    if(editMenu == null){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h1>{editMenu.name}</h1>
            <h2>Make changes to your Menu with the edit/create/delete buttons</h2>
            <button onClick={addCourseClick}>Add New Course</button>
            {showAddCourse?<form onSubmit={handleAddCourse}>
                <label>Course Name:
                    <input type="text" value={editCourseName} placeholder="Add new course name..." onChange={(e)=>setEditCourseName(e.target.value)}/>
                </label>
                <input type="submit" value="Save" />
            </form> :null}
            {courses}
        </div>
    )
}

export default EditMyMenu