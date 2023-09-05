import React from 'react'
// import { useSession } from '../../../backend/controleur/SessionContext'
const PanierItem = ({ handlePanier }) => {
    // const { state } = useSession()
    const paniers = handlePanier
    console.log('paniers in PanierItem', paniers)
    const calculateTotal = () => {
        return paniers.reduce((total, item) => total + (item.product.prix * item.quantity), 0)
    }

    const calculateTotalFinal = () => {
        const subtotal = calculateTotal()
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
        console.log('handleIncreaseQuantity', handleIncreaseQuantity)
    }

    const handleDecreaseQuantity = (item) => {
        console.log('handleDecreaseQuantity', handleDecreaseQuantity)
    }

    const handleDeleteItem = (item) => {
        console.log('handleDeleteItem', handleDeleteItem)
    }
    return (
        <div>

            <h1>My Cart</h1>

            {(!paniers || paniers.length === 0)
                ? (
                    <div>Your cart is empty.</div>
                )
                : (
                    <div className='cart-items'>
                        {paniers.map((item) => (
                            <div key={item.product.id} className='cart-item'>
                                <img className='product-image' src={item.product.image_url} alt={item.product.name} />
                                <div className='product-details'>
                                    <h2 className='product-name'>{item.product.name}</h2>
                                    <span className='product-quantity'>
                                        <button className='quantity-button' onClick={() => handleDecreaseQuantity(item)}>
                                            -
                                        </button>
                                        {item.quantity}
                                        <button className='quantity-button' onClick={() => handleIncreaseQuantity(item)}>
                                            +
                                        </button>
                                    </span>
                                    <span className='product-price'>${item.product.prix.toFixed(2)}</span>

                                </div>
                                <h3 className='product-description'>{item.product.description}</h3>
                                <div className='product-total'>
                                    <span>${(item.product.prix * item.quantity).toFixed(2)}</span>
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
export default PanierItem
