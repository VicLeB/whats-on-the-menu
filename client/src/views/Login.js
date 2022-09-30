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
              <CreateAccountTitle>Sign Up Today!</CreateAccountTitle>
        <SignUpForm onLogin={onLogin}/>
        <AccountStatusCaption>Already have an account? <Button variant='primary' onClick={()=> setShowLogin(true)}>Sign in</Button></AccountStatusCaption>
        </Wrapper>
        )}
    </LoginDiv>
  )
}

export default Login

const CreateAccountTitle = styled.h1`
  margin:0 ;
  padding-top: 3vh;
`

const AccountStatusCaption = styled.h6`
font-weight: normal;
padding-bottom: 3vh;
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