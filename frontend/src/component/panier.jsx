import React from 'react'
import { useSession } from '../../../backend/controleur/SessionContext'

const Cart = () => {
    const { state } = useSession() // Accès au contexte de session
    const calculateTotal = () => {
        return state.user.panier.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const calculateTotalFinal = () => {
        const subtotal = state.user.panier.reduce((total, item) => total + item.price * item.quantity, 0)
        const tps = calculateTPS()
        const tvq = calculateTVQ()
        return subtotal + tps + tvq
    }
    const calculateTPS = () => {
        // Calcul de la TPS (ex: 5%)
        const tpsRate = 0.05
        return calculateTotal() * tpsRate
    }

    const calculateTVQ = () => {
        // Calcul de la TVQ (ex: 9.975%)
        const tvqRate = 0.09975
        return calculateTotal() * tvqRate
    }

    const handleIncreaseQuantity = (item) => {
        // Mettre à jour la quantité de l'item en augmentant de 1
        // Vous devrez implémenter cette logique en fonction de votre structure de données
    }

    const handleDecreaseQuantity = (item) => {
        // Mettre à jour la quantité de l'item en diminuant de 1
        // Vous devrez implémenter cette logique en fonction de votre structure de données
    }

    const handleDeleteItem = (item) => {
        // Supprimer l'item du panier
        // Vous devrez implémenter cette logique en fonction de votre structure de données
    }
    return (
        <div>
            {console.log('state.user', state.user)}
            <h1>My Cart</h1>
            {/* {console.log('state.user.panier', state.user.panier)} */}
            {state.user.panier.length === 0
                ? (
                    <div>Your cart is empty.</div>
                )
                : (
                    <div className='cart-items'>
                        {state.user.panier.map((item) => (
                            <div key={item.id} className='cart-item'>
                                <img className='product-image' src='/public/images/evan.jpg' alt={item.name} />
                                <div className='product-details'>
                                    <h2 className='product-name'>{item.name}</h2>
                                    <span className='product-quantity'>
                                        <button className='quantity-button' onClick={() => handleDecreaseQuantity(item)}>
                                            -
                                        </button>
                                        {item.quantity}
                                        <button className='quantity-button' onClick={() => handleIncreaseQuantity(item)}>
                                            +
                                        </button>
                                    </span>
                                    <span className='product-price'>${item.price.toFixed(2)}</span>

                                </div>
                                <h3 className='product-description'>{item.description}</h3>
                                <div className='product-total'>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    <button className='delete-button' onClick={() => handleDeleteItem(item)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='cart-summary'>
                            <div className='summary-row'>
                                <span className='summary-label'>TPS:</span>
                                <span className='summary-value'>${calculateTPS().toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span className='summary-label'>TVQ:</span>
                                <span className='summary-value'>${calculateTVQ().toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span className='summary-label'>Total:</span>
                                <span className='summary-value'>${calculateTotalFinal().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default Cart
