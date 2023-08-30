import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Product = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/produit')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div>
            {/* <!-- product section --> */}

            <section className='product_section layout_padding'>
                <div className='container'>
                    <div className='heading_container heading_center'>
                        <h2>
                            Our Products
                        </h2>
                    </div>
                    <div className='row'>
                        {data.map(item => (
                            <div key={item.id} className='col-sm-6 col-lg-4'>
                                <div className='box'>
                                    <div className='img-box'>
                                        <img src={item.image_url} alt='' />
                                        <a href={'/details/' + item.id} className='add_cart_btn'>
                                            <span>
                                                Details
                                            </span>
                                        </a>
                                    </div>
                                    <div className='detail-box'>
                                        <h5>
                                            {item.nom}
                                        </h5>
                                        <div className='product_info'>
                                            <h5>
                                                <span>$</span> {item.prix}
                                            </h5>
                                            <div className='star_container'>
                                                <i className='fa fa-star' aria-hidden='true' />
                                                <i className='fa fa-star' aria-hidden='true' />
                                                <i className='fa fa-star' aria-hidden='true' />
                                                <i className='fa fa-star' aria-hidden='true' />
                                                <i className='fa fa-star' aria-hidden='true' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                    <div className='btn_box'>
                        <a href='' className='view_more-link'>
                            View More
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- end product section --> */}

        </div>
    )
}
export default Product
/* <h1>hjshkahfkhakhfa</h1> */
