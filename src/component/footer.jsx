import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* <!-- info section --> */}
            <section className='info_section '>
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-md-3'>
                            <div className='info_contact'>
                                <h5>
                                    <a href='' className='navbar-brand'>
                                        <span>
                                            Minics
                                        </span>
                                    </a>
                                </h5>
                                <p>
                                    <i className='fa fa-map-marker' aria-hidden='true' />
                                    Address
                                </p>
                                <p>
                                    <i className='fa fa-phone' aria-hidden='true' />
                                    +01 1234567890
                                </p>
                                <p>
                                    <i className='fa fa-envelope' aria-hidden='true' />
                                    demo@gmail.com
                                </p>
                            </div>
                        </div> */}
                        <div className='col-md-3'>
                            <div className='info_info'>
                                <h5>
                                    Information
                                </h5>
                                <p>
                                    Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim nulla iste
                                    maxime corrupti ad illo libero minus.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='info_links'>
                                <h5>
                                    Useful Link
                                </h5>
                                <ul>
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
                        </div>
                        <div className='col-md-3'>
                            <div className='info_form '>
                                <h5>
                                    Newsletter
                                </h5>
                                <form action=''>
                                    <input type='email' placeholder='Enter your email' />
                                    <button>
                                        <Link className='nav-link' to='/account'> Subscribe</Link>
                                    </button>
                                </form>
                                <div className='social_box'>
                                    <a href='https://facebook.com/' />
                                    <a href='https://twitter.com/' />
                                    <a href='https://www.instagram.com/' />
                                    <a href='https://www.youtube.com/'>                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end info_section --> */}

            {/* <!-- footer section --> */}
            <footer className='footer_section'>
                <div className='container'>
                    <div className='copyright'>
                        <span id='displayYear'>  &copy; All Rights Reserved By</span>
                        <a href='https://github.com/EchoCodeInk/W17_projet_final'>Evan Cholette |</a>
                        <a href='https://github.com/EchoCodeInk/W17_projet_final'>Taoufik Boussemousse |</a>
                        <a href='https://github.com/EchoCodeInk/W17_projet_final'>Sara Salek |</a>
                        <a href='https://github.com/EchoCodeInk/W17_projet_final'>Antoine Ouelette |</a>
                        <a href='https://github.com/EchoCodeInk/W17_projet_final'>Charles-Maximilien Gros |</a>
                        <a href='https://github.com/EchoCodeInk/W17_projet_final'>Công Tai Hô</a>

                    </div>
                </div>
            </footer>
            {/* <!-- footer section --> */}
        </div>
    )
}
export default Footer
