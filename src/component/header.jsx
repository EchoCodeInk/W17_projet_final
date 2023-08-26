import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>

            {/* <!-- header section strats --> */}
            <header className='header_section'>
                <div className='header_top'>
                    <div className='container-fluid'>
                        <div className='top_nav_container'>
                            <div className='contact_nav profilimg'>
                                <Link className='nav-link' to='/home'>
                                    <h1>Sac Team Boutique</h1>
                                </Link>

                            </div>
                            <form className='search_form'>
                                <input type='search' className='form-control' placeholder='Search here...' />
                                <button className='' type='submit'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                </button>
                            </form>
                            <div className='user_option_box'>
                                <Link className='nav-link' to='/account'>
                                    <i className='fa fa-user' aria-hidden='true' />
                                    <img className='profilimg' src='/public/images/evan.jpg' alt='' />
                                    <span> My Account</span>
                                </Link>
                                <Link className='nav-link' to='/cart'>
                                    <i className='fa fa-cart' aria-hidden='true' />
                                    <span> Cart</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='header_bottom'>
                    <div className='container-fluid'>
                        <nav className='navbar navbar-expand-lg custom_nav-container '>
                            {/* <a className='navbar-brand' href='index.html'>
                                <span>
                                    Minics
                                </span>
                            </a> */}

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
