import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

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
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Username
            <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
            Password
            <input type='password' value={password} onChange= {(e)=> setPassword(e.target.value)}/>
        </label>
        <input type='submit' value="Login"/>
    </form>
    {errors? <div>{errors}</div>:<div>Login Success!</div>}
    </>
  )
}

export default LoginForm