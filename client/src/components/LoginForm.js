import React from 'react'

function LoginForm() {
  return (
    <form>
        <label>
            Username
            <input type='text'/>
        </label>
        <label>
            Password
            <input type='text'/>
        </label>
        <input type='submit' value="Login"/>
    </form>
  )
}

export default LoginForm