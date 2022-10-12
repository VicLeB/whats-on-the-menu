import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import ReviewsContainer from '../components/ReviewsContainer'
import MenusContainer from '../components/MenusContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

function RestaurantDetails({user}) {
    const [restaurant, setRestaurant] = useState(null)
    const [errors, setErrors] = useState([])
    const [restaurantMenus, setRestaurantMenus] = useState(null)

    const params = useParams()

    const writeReview= () =>{
        if (user == null){
            return <SignInPrompt>Sign in or Create an account to add your own Review</SignInPrompt>
        } else{
            return user.admin? null: <Link to={`/restaurant/${params.id}/review`}><button>Add Your Review</button></Link>
        }
    }


    useEffect(()=>{
        fetch(`/restaurants/${params.id}`)
        .then((resp)=>{
            if(resp.ok){
                resp.json().then(data => {
                    setRestaurant(data)
                    setRestaurantMenus(data.menus)
                })
            }else{
                resp.json().then((data)=> setErrors(data.error))
            }
        })
    },[])

    if (restaurant == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <Container fluid>
            <Row>
                <RestaurantBanner>
                    <RestaurantWelcomeTitle>Welcome to {restaurant.name}!</RestaurantWelcomeTitle>
                </RestaurantBanner>
            </Row>
            <Row>
                <Col>
                    <RestaurantImage alt="food image" src={restaurant.image_url}/>
                </Col>
                <Col>
                    <Headers>Checkout our Reviews:</Headers>
                    {writeReview()}
                    <ReviewsContainer restaurant={restaurant}/>
                </Col>
            </Row>
            <Row>
                <OurMenusContainer>
                    <Headers>Our Current Menus</Headers>
                    <MenusContainer restaurantParams={params.id} menus={restaurantMenus}/>
                </OurMenusContainer>
            </Row>
        </Container>
    )
}

export default RestaurantDetails

const RestaurantImage = styled.img`
    height: 50vh;
    width: 50vw;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: 1%;
    border: none;
    -webkit-box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.7);
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.7);
`

const RestaurantBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 16vh;
    width: 100vw;

`
const RestaurantWelcomeTitle = styled.h1`
    font-weight: bold;
    font-size: 50px;
    color: #a5c9ca;
    text-shadow: #474747 3px 5px 2px;
`
const Headers = styled.h3`
    color: #a5c9ca;
    text-shadow: #474747 3px 5px 2px;
    font-weight: bold;
    padding-right: 3vw;
    margin: 0;
`

const SignInPrompt = styled.h6`
    color: #e7f6f2;
    font-style: italic;
`

const OurMenusContainer = styled.div`
    padding-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


