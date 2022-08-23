import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";

function Navigation({user, setUser}) {

    function handleLogout(){
        fetch('/logout', { method: "DELETE"}).then((resp)=>{
            if(resp.ok){
                setUser(null)
            }
        })
    }


  return (
    <Wrapper>
        {user?(
            <>
            <NavH1>
            <Link to="/">What's on the Menu?</Link>
        </NavH1>
        <Nav>
          {user.admin? <button>My Restaurant</button>: null}
          <button onClick={handleLogout}>Logout</button>
        </Nav>
            </>
        ) :(
            <>
        <NavH1>
            <Link to="/">What's on the Menu?</Link>
        </NavH1>
        <Nav>
          <Link to='/login'>
              Login
          </Link>
        </Nav>
      </>
        )}

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