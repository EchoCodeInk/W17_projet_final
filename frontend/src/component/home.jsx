import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSession } from '../../../backend/controleur/SessionContext'
import Utilisateur from '../../../backend/entities/utilisateur'

const Home = () => {
    const { state, dispatch } = useSession() // Accès au contexte de session
    useEffect(() => {
        if (!state.user) {
            const utilisateur = new Utilisateur('anonymous', 'anonymous', 'anonymous', 'anonymous', 'icon_account.png')
            dispatch({ type: 'LOGIN', payload: utilisateur })

            // Exemple de produit
            const produit1 = { id: 1, name: 'Product 1', price: 20, quantity: 2, description: 'description item 1' }
            const produit2 = { id: 2, name: 'Product 2', price: 30, quantity: 1, description: 'description item 2' }
            const produit3 = { id: 3, name: 'Product 3', price: 45.35, quantity: 3, description: 'description item 3' }
            const produit4 = { id: 4, name: 'Product 4', price: 55.55, quantity: 6, description: 'description item 4' }

            const newUser = { ...state.user, panier: [produit1, produit2, produit3, produit4] }
            dispatch({ type: 'LOGIN', payload: newUser })
        }
    }, [state.user, dispatch])

    return (

        <div className='hero_area'>
            {console.log('state.user.panier', state.user)}
            {/* <!-- slider section --> */}
            <section className='slider_section '>
                <div id='customCarousel1' className='carousel slide' data-ride='carousel'>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <div className='container '>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='detail-box'>
                                            <h1>
                                                Welcome to our shop
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt
                                                quo quidem ad optio.
                                            </p>
                                            <Link className='nav-link' to='/products'> Shop now</Link>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='img-box'>
                                            <img src='/public/images/slider-img.png' alt='Slider' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='container '>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='detail-box'>
                                            <h1>
                                                Welcome to our shop
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt
                                                quo quidem ad optio.
                                            </p>
                                            <Link className='nav-link' to='/products'> Shop now</Link>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='img-box'>
                                            <img src='/public/images/p3.png' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='container '>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='detail-box'>
                                            <h1>
                                                Welcome to our shop
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt
                                                quo quidem ad optio.
                                            </p>
                                            <Link className='nav-link' to='/products'> Shop now</Link>

                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='img-box'>
                                            <img src='/public/images/p2.png' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel_btn_box'>
                        <a className='carousel-control-prev' href='#customCarousel1' role='button' data-slide='prev'>
                            <i className='fa fa-angle-left' aria-hidden='true' />
                            <span className='sr-only'>Previous</span>
                        </a>
                        <a className='carousel-control-next' href='#customCarousel1' role='button' data-slide='next'>
                            <i className='fa fa-angle-right' aria-hidden='true' />
                            <span className='sr-only'>Next</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- end slider section --> */}
        </div>

    )
}
export default Home
