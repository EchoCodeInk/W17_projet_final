import React from 'react'

import { Link } from 'react-router-dom'

const ConnectButton = ({ handleReloadProduct, onloadStateFromLocalStorage, onSaveStateToLocalStorage }) => {
    let sessionUser = onloadStateFromLocalStorage()
    console.log('connect_button_sessionUser', sessionUser)
    const handleLogout = () => {
        sessionUser = null
        onSaveStateToLocalStorage(sessionUser)
        handleReloadProduct()
    }

    return (
        <span>
            {sessionUser.session === false
                ? (
                    <>
                        <div>
                            <img className='icon' src={`/public/images/${sessionUser.imageProfil}`} alt='' />
                            Bonjour, {sessionUser.nom}
                            <button className='account-button' onClick={handleLogout}>Déconnexion</button>
                        </div>
                        <Link to='/profil_manager'>Profil Manager </Link>
                    </>
                )
                : (
                    <span>
                        <img className='icon' src='/public/images/icon_account.png' alt='' />
                        <span>Se connecter</span>
                    </span>
                )}
        </span>
    )
}

export default ConnectButton
