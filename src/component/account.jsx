import React from 'react'

const Account = () => {
    return (
        <div>
            <div className='cover-account-container' />
            <div className='background-account-container' />
            <div className='account-container'>
                <div className='account-card'>
                    <h2 className='account-title'>My Account</h2>
                    <form className='account-form'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' />

                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' />

                        <button type='submit' className='account-button'>Login</button>
                    </form>
                    <p className='account-switch'>Don't have an account? <a href='#'>Register</a></p>
                </div>
                <img src='/public/images/evan.jpg' alt='' height='353' />
            </div>
        </div>
    )
}
export default Account
