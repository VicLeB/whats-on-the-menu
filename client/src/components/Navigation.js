import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";
import {
  NavigationContainer,
  LeftContainer,
  RightContainer,
  NavigationInnerContainer,
  NavigationLinkContainer,
  NavigationLink,
  NavigationButton,
} from "../styles/Navigation.style"


function Navigation({user, setUser}) {

    function handleLogout(){
        fetch('/logout', { method: "DELETE"}).then((resp)=>{
            if(resp.ok){
                setUser(null)
            }
        })
    }


  return (
    <>
    <NavigationContainer>
      <NavigationInnerContainer>
        {user?(
          <>
        <LeftContainer>
          <NavigationLinkContainer>
            <NavigationLink to="/">What's on the Menu?</NavigationLink>
          </NavigationLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavigationLinkContainer>
          {user.admin?
          <NavigationLink to="/myRestaurants">My Restaurant</NavigationLink>: null}
          <NavigationButton onClick={handleLogout}>Logout</NavigationButton>
          </NavigationLinkContainer>
        </RightContainer>
            </>
        ) :(
            <>
            <LeftContainer>
              <NavigationLinkContainer>
                <NavigationLink to="/">What's on the Menu?</NavigationLink>
              </NavigationLinkContainer>
            </LeftContainer>
            <RightContainer>
              <NavigationLinkContainer>
                <NavigationLink to='/login'>Login</NavigationLink>
              </NavigationLinkContainer>
            </RightContainer>
            </>
        )}
      </NavigationInnerContainer>
    </NavigationContainer>
    </>
  )
}

export default Navigation

