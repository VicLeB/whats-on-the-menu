import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Button from 'react-bootstrap/Button';

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <LoginDiv>
        {showLogin? (
          <Wrapper>
              <WelcomeTitle>Welcome Back!</WelcomeTitle>
        <LoginForm onLogin= {onLogin}/>
        <AccountStatusCaption>Don't have an account? Create one here <Button variant='primary' onClick={()=> setShowLogin(false)}>Sign up</Button>
        </AccountStatusCaption>
        </Wrapper>
        ) : (
            <Wrapper>
        <SignUpForm onLogin={onLogin}/>
        <p>Already have an account? <Button variant='primary' onClick={()=> setShowLogin(true)}>Sign in</Button></p>
        </Wrapper>
        )}
    </LoginDiv>
  )
}

export default Login

const AccountStatusCaption = styled.h6`
font-weight: normal;
padding-bottom: 5vh;
`

const WelcomeTitle = styled.h1`
  margin:0 ;
  padding-top: 5vh;
`

const LoginDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid lightgrey;
  border-radius: 5px;
  height: 50vh;
  width: 50vw;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

`