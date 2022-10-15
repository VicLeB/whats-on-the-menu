import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function MyRestaurants({user}) {
    const [ownedRestaurant, setOwnedRestaurant] = useState(null)
    const [myRestaurantMenus, setMyRestaurantMenus] = useState(null)
    const [showAddNewMenu, setShowAddNewMenu] = useState(false)
    const [newMenuName, setNewMenuName] = useState("")
    const [newMenuTheme, setNewMenuTheme] = useState(1);

    const myRestaurants = user?.restaurants
    const restaurantIds = myRestaurants?.map((rest)=> rest.id)

    useEffect(()=>{
        async function fetchData() {
            try {
                const restaurantData = await fetch(`/restaurants/${restaurantIds?.[0]}`);
                const jsonData = await restaurantData.json();
                setOwnedRestaurant(jsonData)
                setMyRestaurantMenus(jsonData.menus)
            } catch (err){
                console.error(err)
            }
        }

        if(restaurantIds){
            fetchData();
        }
    }, [])

    function newMenuClick(){
        setShowAddNewMenu(!showAddNewMenu)
    }

    async function handleNewMenu(e){
        e.preventDefault()
        try {
            const resp = await fetch('/menus',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newMenuName,
                    theme: newMenuTheme,
                    restaurant_id: restaurantIds[0]
                }),
            });
            const data = await resp.json();
            setMyRestaurantMenus([...myRestaurantMenus, data]);
        } catch (err) {
            console.error(err);
        }
    }

    async function handleMenuDelete(menu){
        try {
            await fetch(`/menus/${menu.id}`, {
                method: 'DELETE',
            });
            setMyRestaurantMenus(
                myRestaurantMenus.filter((restaurantMenu) => (restaurantMenu.id !== menu.id))
            );
        } catch (err) {
            console.error(err);
        }
    }



    if (myRestaurantMenus == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <MyMenuPageTitle>Welcome to {ownedRestaurant?.name} Management Page</MyMenuPageTitle>
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
                    {myRestaurantMenus?.map((menu, idx) => (
                        <MenuContainer key={idx}>
                            <MenuTitle>
                                {menu.name}
                            </MenuTitle>
                            <ButtonGroup>
                                <Link to={`/editMenu/${menu.id}`}>
                                    <Button variant = 'secondary'>
                                        edit
                                    </Button>
                                </Link>
                                <Button
                                    variant='secondary'
                                    onClick={()=>handleMenuDelete(menu)}>
                                    remove
                                </Button>
                            </ButtonGroup>
                        </MenuContainer>)
                    )}
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