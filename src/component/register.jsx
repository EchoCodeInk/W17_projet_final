import React from 'react'

const Register = () => {
    return (
        <div className='register-container'>
            <h1>Create an Account</h1>
            <form className='register-form'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' id='confirmPassword' name='confirmPassword' />

                <button type='submit' className='register-button'>Register</button>
            </form>
        </div>
    )
}
export default Register
