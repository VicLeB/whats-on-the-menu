import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [admin, setAdmin] = useState(false)
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleCreateUser(e){
        e.preventDefault();
        fetch("/signup", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                admin,
            }),
        }).then((resp) =>{
            if (resp.ok){
                resp.json().then((user) => {
                    onLogin(user)
                    history.push('/')
                })
            }else {
                resp.json().then((error)=> setErrors(error.errors))
            }
        })
    }

    return (
    <SignUpFormWrapper>
        <Form onSubmit={handleCreateUser}>
            <Form.Group>
                <Form.Label>
                    Username
                    <Form.Control type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Password
                    <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Confirm password
                    <Form.Control type="password" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>

                    <Form.Check type="checkbox" label='Are you a restaurant owner looking to use our services?' value={admin} onChange={() => setAdmin(!admin)}/>
                </Form.Label>
                    {errors? <Form.Text>{errors.map((error)=> `${error}, ` )}</Form.Text>:null}
            </Form.Group>
            <FormButtonContainer>
                <Button type='submit' variant='primary'>Create Account</Button>
            </FormButtonContainer>
        </Form>
    </SignUpFormWrapper>
    )
}

export default SignUpForm

const SignUpFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const FormButtonContainer = styled.div`
    padding-top: 1vh;
`