import React, { useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'

function EditMyMenu() {
    const [editMenu, setEditMenu] = useState(null)
    const [editCourses, setEditCourses] = useState([])
    const [errors, setErrors] = useState([])
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [itemPrice, setItemPrice] = useState(null)
    const [courseName, setCourseName] = useState("")
    const [showAddCourse, setShowAddCourse] = useState(false)
    const [courseId, setCourseId]= useState(null)
    const [showAddItem, setShowAddItem] = useState(false)
    const [newItemName, setNewItemName] = useState("")
    const [newItemDescription, setNewItemDescription] = useState("")
    const [newItemPrice, setNewItemPrice] = useState(null)

    const params = useParams()
    const history = useHistory()
    const menuId= params.id

    const courseNameFormData = {
        name: courseName,
        menu_id: menuId
    }

    const newItemFormData= {
        name: newItemName,
        description: newItemDescription,
        price: newItemPrice,
        course_id: courseId
    }

    console.log(errors)

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

    function handleCourseDelete(e){
        const deleteCourse= e.target.id
        fetch(`/courses/${deleteCourse}`,{
            method: 'DELETE',
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }

    function handleCourseNameUpdate(e, course){
        e.preventDefault()
        fetch(`/courses/${course.id}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body:JSON.stringify({
                name: courseName
            })
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }

    function addItemClick(e){
        setShowAddItem(!showAddItem)
        setCourseId(e.target.id)
    }

    function handleAddItem(e){
        e.preventDefault()
        fetch('/menu_items',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItemFormData),
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }

    function handleItemDelete(e){
        const deleteItem = e.target.id
        fetch(`/menu_items/${deleteItem}`,{
            method: 'DELETE',
        }).then((resp)=>{
            if(resp.ok){
                resp.json().then(history.go(0))
            }else{
                resp.json().then((data)=> setErrors(data.errors))
            }
        })
    }

    function handleItemUpdate(e, item){
        e.preventDefault()
        const itemId= e.target.id
        fetch(`/menu_items/${itemId}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body:JSON.stringify({
                name: itemName || item.name ,
                description: itemDescription || item.description,
                price: itemPrice || item.price
            }),
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
                <form id ={item.id} onSubmit={(e) => handleItemUpdate(e, item)}>
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
                <button id={item.id} onClick={handleItemDelete}>Delete item</button>
            </div>
        })

        return <div>
            <form onSubmit={(e)=> handleCourseNameUpdate(e, course)}>
                <label>Course Name:
                <input type="text" value={courseName} placeholder={course.name}onChange={(e)=> setCourseName(e.target.value)}/>
                </label>
                <input type="submit" value="Save"/>
            </form>
            <button id={course.id} onClick={handleCourseDelete}>Delete Course</button>
            <button id={course.id} onClick={addItemClick} >Add new Item</button>
            {showAddItem?<form onSubmit={handleAddItem}>
                <label>Item Name:
                    <input type="text" value={newItemName} placeholder="Add new item name..." onChange={(e)=>setNewItemName(e.target.value)}/>
                </label>
                <label>Item description:
                    <textarea  value={newItemDescription} placeholder="Add new item description..." onChange={(e)=>setNewItemDescription(e.target.value)}/>
                </label>
                <label>Item price:
                    <input type="number" value={newItemPrice} placeholder="Add new item price..." onChange={(e)=>setNewItemPrice(e.target.value)}/>
                </label>
                <input type="submit" value="Add" />
            </form> :null}
            {editItemsList}
        </div>
    })

// rendering what is seen on the page

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
                    <input type="text" value={courseName} placeholder="Add new course name..." onChange={(e)=>setCourseName(e.target.value)}/>
                </label>
                <input type="submit" value="Add" />
            </form> :null}
            {courses}
        </div>
    )
}

export default EditMyMenu