import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({onLogin}) {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const [errors, setErrors]= useState([])

    const history = useHistory()


    function handleSubmit(e){
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((resp)=>{
            if (resp.ok){
                resp.json().then((user)=> {
                    onLogin(user)
                    history.push('/')
                })
            }else {
                resp.json().then((error)=> setErrors(error.errors))
            }
        })
    }

    return (
    <LoginFormWrapper>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label>
                Username
                <Form.Control type='text' placeholder='Username...' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </Form.Label>
            </Form.Group>
            <Form.Group>
            <Form.Label>
                Password
                <Form.Control type='password' value={password} placeholder='Password...' onChange= {(e)=> setPassword(e.target.value)}/>
            </Form.Label>
                {errors? <Form.Text>{errors}</Form.Text>:<div>Login Success!</div>}
            </Form.Group>
            <FormButtonContainer>
                <Form.Group>
                    <Button type='submit' variant='primary'>Login</Button>
                </Form.Group>
            </FormButtonContainer>
        </Form>
    </LoginFormWrapper>
    )
}

export default LoginForm

const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const FormButtonContainer = styled.div`
    padding-top: 2vh;
`
