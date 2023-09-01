import React from 'react'
import { useSession } from '../../../backend/controleur/SessionContext'
import PanierItem from './panier-items'

const Panier = () => {
    const { state } = useSession() // Accès au contexte de session

    return (
        <div>

            {state.initUser.session === true
                ? (
                    <PanierItem handlePanier={state.initUser.panier.articles} />
                )
                : (
                    <PanierItem handlePanier={state.user.panier.articles} />
                )}
        </div>
    )
}
export default Panier
