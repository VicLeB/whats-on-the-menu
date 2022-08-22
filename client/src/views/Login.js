import React from 'react'
import { useState, useEffect } from "react";
import styled from "styled-components";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function Login() {
    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(true)

  return (
    <Wrapper>
        {showLogin? (
            <>
        <LoginForm/>
        <p>Create an account <button onClick={()=> setShowLogin(false)}>Sign up</button>
        </p>
        </>
        ) : (
            <>
        <SignUpForm/>
        <p>Already have an account? <button onClick={()=> setShowLogin(true)}>Sign in</button></p>
        </>
        )}
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
font-family: 'Courier New', Courier, monospace;
`