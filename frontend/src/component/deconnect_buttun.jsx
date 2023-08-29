import React from 'react'
import { useSession } from './SessionContext'

const Navbar = () => {
    const { state, dispatch } = useSession()

    const handleLogout = () => {
    // Dispatch l'action de déconnexion
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <nav>
            {state.user
                ? (
                    <div>
                        Bonjour, {state.user.nom}!
                        <button onClick={handleLogout}>Déconnexion</button>
                    </div>
                )
                : (
                    <div>Non connecté</div>
                )}
        </nav>
    )
}

export default Navbar
