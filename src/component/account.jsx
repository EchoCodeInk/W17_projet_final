import React from 'react'
import { Link } from 'react-router-dom'
const Account = () => {
    return (

        <div className='account-container'>
            <h1>My Account</h1>
            <form className='account-form'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' />

                <button type='submit' className='account-button'>Login</button>
            </form>
            <p className='account-switch'>
                Don't have an account?
                <Link className='nav-link' to='/register'>Register</Link>
            </p>
        </div>

    )
}
export default Account
