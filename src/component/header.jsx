import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ handleSectionChange, selectedSection }) => {
    // const handleClick = (section) => {
    //     handleSectionChange(section)
    // }
    return (
        <div>

            {/* <!-- header section strats --> */}
            <header className='header_section'>
                <div className='header_top'>
                    <div className='container-fluid'>
                        <div className='top_nav_container'>
                            <div className='contact_nav'>
                                <a href=''>
                                    <i className='fa fa-phone' aria-hidden='true' />
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </a>
                                <a href=''>
                                    <i className='fa fa-envelope' aria-hidden='true' />
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </a>
                            </div>
                            <form className='search_form'>
                                <input type='search' className='form-control' placeholder='Search here...' />
                                <button className='' type='submit'>
                                    <i className='fa fa-search' aria-hidden='true' />
                                </button>
                            </form>
                            <div className='user_option_box'>
                                <a href='' className='account-link'>
                                    <i className='fa fa-user' aria-hidden='true' />
                                    <span>
                                        My Account
                                    </span>
                                </a>
                                <a href='' className='cart-link'>
                                    <i className='fa fa-shopping-cart' aria-hidden='true' />
                                    <span>
                                        Cart
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='header_bottom'>
                    <div className='container-fluid'>
                        <nav className='navbar navbar-expand-lg custom_nav-container '>
                            <a className='navbar-brand' href='index.html'>
                                <span>
                                    Minics
                                </span>
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
                                        <Link className='nav-link' to='/about'>About</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/products'>Products</Link>
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
