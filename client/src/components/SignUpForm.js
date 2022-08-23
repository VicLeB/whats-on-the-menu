import React, {useState} from 'react'

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [admin, setAdmin] = useState(false)
    const [errors, setErrors] = useState([])


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
                resp.json().then((user) => onLogin(user))
            }else {
                resp.json().then((error)=> setErrors(error.errors))
            }
        })
    }

  return (
    <>
    <form onSubmit={handleCreateUser}>
        <label>
            Username
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
            Password
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <label>
            Confirm password
            <input type="password" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
        </label>
        <label>
            Are you a restaurant owner looking to use our services?
            <input type="checkbox" value={admin} onChange={() => setAdmin(!admin)}/>
        </label>
        <input type='submit' value="Create account"/>
    </form>
    {errors? <div>{errors.map((error)=> `${error}, ` )}</div>:null}
    </>
  )
}

export default SignUpForm