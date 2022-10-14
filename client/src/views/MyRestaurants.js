import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function MyRestaurants({user}) {
    const [ownedRestaurant, setOwnedRestaurant] = useState(null)
    const [errors, setErrors] = useState([])
    const [myRestaurantMenus, setMyRestaurantMenus] = useState(null)
    const [showAddNewMenu, setShowAddNewMenu] = useState(false)
    const [newMenuName, setNewMenuName] = useState("")
    const [newMenuTheme, setNewMenuTheme]= useState(1)
    const history= useHistory()

    const myRestaurants = user.restaurants
    const restaurantIds = myRestaurants.map((rest)=> rest.id)


    useEffect(()=>{
        if (restaurantIds != null) {
            fetch(`/restaurants/${restaurantIds[0]}`)
                .then((resp)=>{
                    if(resp.ok){
                        resp.json().then(data => {
                            setOwnedRestaurant(data)
                            setMyRestaurantMenus(data.menus)
                        }).catch(err => console.log({err}))
                    }else{
                        resp.json().then((data)=> setErrors(data.error))
                    }
                })
        }
    }, [])

    function newMenuClick(){
        setShowAddNewMenu(!showAddNewMenu)
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
                restaurant_id: restaurantIds[0]
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


    const menusList = myRestaurantMenus.map((menu)=> <MenuContainer><MenuTitle>{menu.name}</MenuTitle><ButtonGroup><Link to={`/editMenu/${menu.id}`}><Button variant = 'secondary'>edit</Button></Link><Button variant = 'secondary' onClick={()=>handleMenuDelete(menu)}>remove</Button></ButtonGroup></MenuContainer>)

    return (
        <div>
            <MyMenuPageTitle>Welcome to {ownedRestaurant.name} Management Page</MyMenuPageTitle>
            <CurrentMenuContainer>
                <CurrentMenuTitle>Current Menus:</CurrentMenuTitle>
                <Button onClick={newMenuClick}>Add A New Menu</Button>
                </CurrentMenuContainer>
                    {showAddNewMenu? <div>
                        <Modal show ={showAddNewMenu} onHide={newMenuClick}>
                            <Modal.Body>
                        <Form onSubmit={handleNewMenu}>
                            <Form.Group>
                                <Form.Label>Name:
                                    <Form.Control type="text" value={newMenuName} placeholder="Add new Menu name..." onChange={(e)=> setNewMenuName(e.target.value)}/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Theme:
                                    <Form.Control type="number" value={newMenuTheme} placeholder={1} />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Button variant='primary' type="submit">Add</Button>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={newMenuClick}>Close</Button>
                        </Modal.Footer>
                        </Modal>
                    </div>:null}
                    <MyMenusListContainer>
                    {menusList}
                </MyMenusListContainer>
        </div>
    )
}

export default MyRestaurants

const MyMenuPageTitle = styled.h1`
    font-weight: bold;
    font-size: 40px;
    padding-bottom: 3vh;
    color: #a5c9ca;
    text-shadow: #474747 3px 5px 2px;
`
const CurrentMenuTitle = styled.h3`
    color: #a5c9ca;
    padding-right: 3vw;
`

const CurrentMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 3vh;

`

const MyMenusListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;

`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 40vw;
    justify-content: space-between;
`

const MenuTitle = styled.h4`
    color:#e7f6f2;
`