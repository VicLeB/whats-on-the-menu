import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavigationContainer= styled.nav`
    width: 100%;
    height: 10vh;
    background-color: black;
    display: flex;
    flex-direction: column;
`
export const LeftContainer = styled.div`
    flex:30%;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
`
export const RightContainer = styled.div`
    flex:70%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
`
export const NavigationInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

export const NavigationLinkContainer = styled.div`
    display: flex;
`

export const NavigationLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

`

export const NavigationButton = styled.span`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    background-color: black;
`