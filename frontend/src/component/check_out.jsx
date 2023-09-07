import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useSession } from '../../../backend/controleur/SessionContext'

function Checkout () {
    const { state } = useSession()

    const initialPaniers = state.initUser.session
        ? state.initUser.panier.articles
        : state.user.panier.articles
    const [paniers, setPaniers] = useState(initialPaniers)

    useEffect(() => {
        // Votre code ici...

        if (paniers) {
            localStorage.setItem('storePaniers', JSON.stringify(paniers))
        }

        const storePaniers = localStorage.getItem('storePaniers')
        if (storePaniers) {
            const parsedPaniers = JSON.parse(storePaniers)

            state.initUser.panier.articles = parsedPaniers
        }
        // Ne pas oublier de nettoyer le stockage local lorsque le composant est démonté
        return () => {
            // localStorage.removeItem('storePaniers')
        }
    }, [paniers]) // Tableau de dépendances

    const calculateSubTotal = () => {
        return paniers.reduce((total, item) => total + (item.product.prix * item.quantity), 0)
    }

    const calculateQuantityItem = () => {
        return paniers.reduce((total, item) => total + (item.quantity), 0)
    }

    const calculateTotalFinal = () => {
        const subtotal = calculateSubTotal()
        const tps = calculateTPS()
        const tvq = calculateTVQ()
        return subtotal + tps + tvq
    }
    const calculateTPS = () => {
        // Calcul de la TPS (ex: 5%)
        const tpsRate = 0.05
        return calculateSubTotal() * tpsRate
    }

    const calculateTVQ = () => {
        // Calcul de la TVQ (ex: 9.975%)
        const tvqRate = 0.09975
        return calculateSubTotal() * tvqRate
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
        // Créez une copie de votre panier en excluant l'article à supprimer
        const updatedPaniers = paniers.filter((cartItem) => cartItem.product.id !== item.product.id)

        // Mettez à jour le state avec le nouveau panier
        setPaniers(updatedPaniers)

        // Sauvegardez le nouveau panier dans le stockage local
        localStorage.setItem('paniers', JSON.stringify(updatedPaniers))
    }
    return (
        <section className='h-100 h-custom' style={{ backgroundColor: '#eee' }}>
            <MDBContainer className='py-5 h-100'>
                <MDBRow className='justify-content-center align-items-center h-100'>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className='p-4'>
                                <MDBRow>
                                    <MDBCol lg='7'>
                                        <MDBTypography tag='h5'>
                                            <a href='#!' className='text-body'>
                                                <MDBIcon fas icon='long-arrow-alt-left me-2' /> Continue
                                                shopping
                                            </a>
                                        </MDBTypography>

                                        <hr />

                                        <div className='d-flex justify-content-between align-items-center mb-4'>
                                            <div>
                                                <p className='mb-1'>Shopping cart</p>
                                                <p className='mb-0'>You have {calculateQuantityItem()} items in your cart</p>
                                            </div>

                                        </div>

                                        <MDBCard className='mb-3'>
                                            <MDBCardBody>
                                                {!paniers || paniers.length === 0
                                                    ? (
                                                        <div>Your cart is empty.</div>
                                                    )
                                                    : (
                                                        paniers.map((item) => (
                                                            <div key={item.product.id} className='d-flex justify-content-between'>
                                                                <div className='d-flex flex-row align-items-center'>
                                                                    <div>
                                                                        <MDBCardImage
                                                                            src={item.product.image_url}
                                                                            fluid className='rounded-3' style={{ width: '200px' }}
                                                                            alt={item.product.name}
                                                                        />
                                                                    </div>
                                                                    <div className='ms-3'>
                                                                        <MDBTypography tag='h5'>
                                                                            {item.product.name}
                                                                        </MDBTypography>
                                                                        <p className='small mb-0'>{item.product.description}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex flex-row align-items-center'>
                                                                    <div style={{ width: '50px' }}>
                                                                        <MDBTypography tag='h5' className='fw-normal mb-0 small'>
                                                                            <button className='quantity-button' onClick={() => handleDecreaseQuantity(item)}>
                                                                                -
                                                                            </button>
                                                                            Qty:{item.quantity}
                                                                            <button className='quantity-button' onClick={() => handleIncreaseQuantity(item)}>
                                                                                +
                                                                            </button>
                                                                        </MDBTypography>
                                                                    </div>
                                                                    <div style={{ width: '80px' }}>

                                                                        <MDBTypography tag='h5' className='mb-0'>
                                                                            <div className='small mb-0'>
                                                                                <span className='small mb-0'>${item.product.prix.toFixed(2)}/unit</span>
                                                                            </div>
                                                                            <div className='small mb-0'>
                                                                                <span className='small mb-0'> ${(item.product.prix * item.quantity).toFixed(2)}/sub</span>
                                                                            </div>
                                                                        </MDBTypography>
                                                                        <button className='delete-button' onClick={() => handleDeleteItem(item)}>
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                    <a href='#!' style={{ color: '#cecece' }}>
                                                                        <MDBIcon fas icon='trash-alt' />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))
                                                // {paniers.map((item) => (
                                                //     <div key={item.product.id} className='cart-item'>
                                                //         <img className='product-image' src={item.product.image_url} alt={item.product.name} />
                                                //         <div className='product-details'>
                                                //             <h2 className='product-name'>{item.product.name}</h2>
                                                //             <span className='product-quantity'>
                                                //                 <button className='quantity-button' onClick={() => handleDecreaseQuantity(item)}>
                                                //                     -
                                                //                 </button>
                                                //                 {item.quantity}
                                                //                 <button className='quantity-button' onClick={() => handleIncreaseQuantity(item)}>
                                                //                     +
                                                //                 </button>
                                                //             </span>
                                                //             <span className='product-price'>${item.product.prix.toFixed(2)}</span>

                                                //         </div>
                                                //         <h3 className='product-description'>{item.product.description}</h3>
                                                //         <div className='product-total'>
                                                //             <span>${(item.product.prix * item.quantity).toFixed(2)}</span>
                                                //             <button className='delete-button' onClick={() => handleDeleteItem(item)}>
                                                //                 Delete
                                                //             </button>
                                                //         </div>
                                                //     </div>
                                                // ))}

                                                    )}

                                            </MDBCardBody>
                                        </MDBCard>

                                    </MDBCol>

                                    <MDBCol lg='5'>
                                        <MDBCard className='bg-primary text-white rounded-3'>
                                            <MDBCardBody>
                                                <div className='d-flex justify-content-between align-items-center mb-4'>
                                                    <MDBTypography tag='h5' className='mb-0'>
                                                        Card details
                                                    </MDBTypography>
                                                    <MDBCardImage
                                                        src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp'
                                                        fluid className='rounded-3' style={{ width: '45px' }} alt='Avatar'
                                                    />
                                                </div>

                                                <p className='small'>Card type</p>
                                                <a href='#!' type='submit' className='text-white'>
                                                    <MDBIcon fab icon='cc-mastercard fa-2x me-2' />
                                                </a>
                                                <a href='#!' type='submit' className='text-white'>
                                                    <MDBIcon fab icon='cc-visa fa-2x me-2' />
                                                </a>
                                                <a href='#!' type='submit' className='text-white'>
                                                    <MDBIcon fab icon='cc-amex fa-2x me-2' />
                                                </a>
                                                <a href='#!' type='submit' className='text-white'>
                                                    <MDBIcon fab icon='cc-paypal fa-2x me-2' />
                                                </a>

                                                <form className='mt-4'>
                                                    <MDBInput
                                                        className='mb-4' label="Cardholder's Name" type='text' size='lg'
                                                        placeholder="Cardholder's Name" contrast
                                                    />

                                                    <MDBInput
                                                        className='mb-4' label='Card Number' type='text' size='lg'
                                                        minLength='19' maxLength='19' placeholder='1234 5678 9012 3457' contrast
                                                    />

                                                    <MDBRow className='mb-4'>
                                                        <MDBCol md='6'>
                                                            <MDBInput
                                                                className='mb-4' label='Expiration' type='text' size='lg'
                                                                minLength='7' maxLength='7' placeholder='MM/YYYY' contrast
                                                            />
                                                        </MDBCol>
                                                        <MDBCol md='6'>
                                                            <MDBInput
                                                                className='mb-4' label='Cvv' type='text' size='lg' minLength='3'
                                                                maxLength='3' placeholder='&#9679;&#9679;&#9679;' contrast
                                                            />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>

                                                <hr />

                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-2'>Subtotal</p>
                                                    <p className='mb-2'>${calculateSubTotal().toFixed(2)}</p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <span className='mb-2'>TPS :</span>
                                                    <span className='mb-2'>${calculateTPS().toFixed(2)}</span>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-2'>TVQ :</p>
                                                    <p className='mb-2'>${calculateTVQ().toFixed(2)}</p>
                                                </div>

                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-2'>Shipping</p>
                                                    <p className='mb-2'>$20.00</p>
                                                </div>

                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-2'>Total(Incl. taxes)</p>
                                                    <p className='mb-2'>${calculateTotalFinal().toFixed(2)}</p>
                                                </div>

                                                <MDBBtn color='info' block size='lg'>
                                                    <div className='d-flex justify-content-between'>
                                                        <span>${calculateTotalFinal().toFixed(2)}</span>
                                                        <a href='/delivery'>
                                                            Next{' '}
                                                            <i className='fas fa-long-arrow-alt-right ms-2' />
                                                        </a>
                                                    </div>
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default Checkout
