import React from 'react'

const Cart = ({ cartItems }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price.toFixed(2) * item.quantity, 0)
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

                            <tfoot>
                                <tr>
                                    <td className='empty-cell' colSpan='3' />
                                    <td className='total-cell'>Total:</td>
                                    <td className='total-value'>${calculateTotal().toFixed(2)}</td>
                                </tr>
                            </tfoot>

                        </table>

                    </div>
                )}
        </div>
    )
}
export default Cart
