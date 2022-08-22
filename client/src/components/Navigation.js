import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";

function Navigation() {
  return (
    <Wrapper>
        <NavH1>
            <Link to="/">What's on the Menu?</Link>
        </NavH1>
    <Nav>
        <Link to='/login'>
            Login
        </Link>

    </Nav>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const NavH1= styled.h1`
font-family: 'Courier New', Courier, monospace;

a {
    text-decoration: none;
}
`

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`;