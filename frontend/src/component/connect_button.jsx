import React from 'react'
import { useSession } from '../../../backend/controleur/SessionContext'

const ConnectButton = () => {
    const { state, dispatch } = useSession()

    const handleLogout = () => {
    // Dispatch l'action de déconnexion
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <span>
            {state.user
                ? (
                    <span>
                        <img className='icon' src={`/public/images/${state.user.imageProfil}`} alt='' />
                        Bonjour, {state.user.nom}
                        <button className='account-button' onClick={handleLogout}>Déconnexion</button>
                    </span>
                )
                : (
                    <span>Se connecter</span>
                )}
        </span>
    )
}

export default ConnectButton
