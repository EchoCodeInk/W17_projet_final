import React from 'react'
import { useSession } from '../../../backend/controleur/SessionContext'
import PanierItem from '../component/panier-items'

const Panier = () => {
    const { state } = useSession()
    console.log('state.initUser.panier.articles in panier', state.initUser.panier.articles)
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
