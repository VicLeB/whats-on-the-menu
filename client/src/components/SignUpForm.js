import React from 'react'

function SignUpForm() {
  return (
    <form>
        <label>
            Username
            <input type="text"/>
        </label>
        <label>
            Password
            <input type="password"/>
        </label>
        <label>
            Are you a restaurant owner looking to use our services?
            <input type="checkbox"/>
        </label>

    </form>
  )
}

export default SignUpForm