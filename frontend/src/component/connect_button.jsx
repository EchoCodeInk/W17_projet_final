import React from 'react'
import { useSession } from '../../../backend/controleur/SessionContext'
import { Link } from 'react-router-dom'

const ConnectButton = () => {
    const { state, dispatch } = useSession()

    const handleLogout = () => {
    // Dispatch l'action de déconnexion
        dispatch({ type: 'LOGOUT' })
        state.initUser.session = true
    }

    return (
        <span>
            {console.log(' connect_button state.initUser', state.initUser)}
            {console.log('connect_button state.user', state.user)}
            {state.user
                ? (
                    <>
                        <div>
                            <img className='icon' src={`/public/images/${state.user.imageProfil}`} alt='' />
                            Bonjour, {state.user.nom}
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
