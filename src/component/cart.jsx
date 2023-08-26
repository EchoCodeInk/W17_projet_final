import React from 'react'

const Cart = ({ cartItems }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const calculateTotalFinal = () => {
        const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
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
    return (
        <div className='layout_padding'>
            {cartItems.length === 0
                ? (<div>Your cart is empty.</div>)
                : (
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr className='theader'>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src='/public/images/evan.jpg' alt={item.name} width='100' />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>

                            <tfoot className='tfoot'>
                                <tr>
                                    <td className='empty-cell' colSpan='3' />
                                    <td className='total-cell'>TPS:</td>
                                    <td className='total-value'>${calculateTPS().toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className='empty-cell' colSpan='3' />
                                    <td className='total-cell'>TVQ:</td>
                                    <td className='total-value'>${calculateTVQ().toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className='empty-cell' colSpan='3' />
                                    <td className='total-cell'>Total:</td>
                                    <td className='total-value'>${calculateTotalFinal().toFixed(2)}</td>
                                </tr>
                            </tfoot>

                        </table>

                    </div>
                )}
        </div>
    )
}
export default Cart
