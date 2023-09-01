import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'
import ConnectButton from './connect_button'
import { useSession } from '../../../backend/controleur/SessionContext'
// import Utilisateur from '../../../backend/entities/Utilisateur'

const Header = () => {
    const { state } = useSession()

    return (
        <div>

            {/* <!-- header section strats --> */}
            <header className='header_section'>
                <div className='header_top'>
                    <div className='container-fluid'>
                        <div className='top_nav_container'>
                            <div className='contact_nav '>
                                <Link className='nav-link' to='/home'>
                                    <h1>The Sac Team Boutique</h1>
                                </Link>

                            </div>
                            <form className='search_form'>
                                <input type='search' className='form-control' placeholder='Search here...' />
                                <button className='search-button' type='submit'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                </button>
                            </form>
                            <div className='user_option_box'>
                                {console.log(' header state.initUser', state.initUser)}
                                {console.log('header state.user', state.user)}
                                {

                                    state.user === null
                                        ? (
                                            <>
                                                <Link className='nav-link' to='/account'>
                                                    <ConnectButton />
                                                </Link>

                                            </>
                                        )
                                        : (

                                            <div className='nav-link'>
                                                <ConnectButton />

                                            </div>

                                        )
                                }

                                <Link className='nav-link' to='/panier'>
                                    <img className='icon' src='/public/images/icon_cart.png' alt='' />
                                    <span> Cart</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='header_bottom'>
                    <div className='container-fluid'>
                        <nav className='navbar navbar-expand-lg custom_nav-container '>
                            <a className='navbar-brand' href='index.html'>
                                <span><Categories /> </span>
                            </a>

                            <button
                                className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'
                            >
                                <span className=''> </span>
                            </button>

                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <ul className='navbar-nav '>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/home'>Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/products'>Products</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/about'>About</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/whyus'>Why Us</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/testimony'>Testimonial</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* <!-- end header section --> */}

        </div>
    )
}
export default Header
