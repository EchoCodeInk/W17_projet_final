import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

const ConnectButton = ({ handleReloadProduct, onloadStateFromLocalStorage, onSaveStateToLocalStorage }) => {
    const navigate = useNavigate()
    let sessionUser = onloadStateFromLocalStorage()
    const handleLogout = () => {
        sessionUser = null
        onSaveStateToLocalStorage(sessionUser)
        handleReloadProduct()
        navigate('/account')
    }

    return (
        <span>
            {sessionUser.session === true
                ? (
                    <>
                        <div>
                            <img className='icon' src={`/public/images/${sessionUser.imageProfil}`} alt='' />
                            {' '} Bonjour, {sessionUser.prenom + ' ' + sessionUser.nom + ' '}
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
