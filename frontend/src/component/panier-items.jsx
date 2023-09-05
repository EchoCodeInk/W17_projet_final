import React, { useEffect, useState } from 'react'

const PanierItem = ({ handlePanier }) => {
    // const { state } = useSession()
    const [paniers, setPaniers] = useState([])
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
        const updatedPaniers = paniers.map((cartItem) => {
            if (cartItem.product.id === item.product.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem
        })
        setPaniers(updatedPaniers)
    }

    const handleDecreaseQuantity = (item) => {
        const updatedPaniers = paniers.map((cartItem) => {
            if (cartItem.product.id === item.product.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 }
            }
            return cartItem
        })
        setPaniers(updatedPaniers)
    }

    const handleDeleteItem = (item) => {
        console.log('handleDeleteItem', handleDeleteItem)
    }

    useEffect(() => {
        if (handlePanier) {
            localStorage.setItem('selectedPaniersProduct', JSON.stringify(handlePanier))
            console.log('handlePanier dans le if du localStorage.setItem', handlePanier)
        }
        const storedPanier = localStorage.getItem('selectedPaniersProduct')
        console.log('storedPanier', storedPanier)
        if (storedPanier) {
            const parsedPanier = JSON.parse(storedPanier)
            setPaniers(parsedPanier)
            console.log('storedPanier dans le if', storedPanier)
        } else if (handlePanier) {
            // Si aucune valeur n'est trouvée dans le localStorage, utilisez handlePanier (peut-être initialisé par une autre source).
            setPaniers(handlePanier)
            console.log('handlePanier dans le else if ', handlePanier)
        } else {
            // Si handlePanier est également undefined, vous pouvez initialiser paniers à un tableau vide.
            setPaniers([])
        }
        console.log('paniers', paniers)
        // Ne pas oublier de nettoyer le stockage local lorsque le composant est démonté
        return () => {
            localStorage.removeItem('selectedPaniersProduct')
        }
    }, [handlePanier]) // Tableau de dépendances

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
