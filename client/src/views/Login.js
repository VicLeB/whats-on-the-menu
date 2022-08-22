import React from 'react'
import styled from "styled-components";
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Wrapper>
        <LoginForm/>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
font-family: 'Courier New', Courier, monospace;
`