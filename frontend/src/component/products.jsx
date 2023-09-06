import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Product = ({ onSelectedDetailProduct, searchQuery }) => {
    const [data, setData] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        // Déplacez la fonction fetchData dans le hook useEffect pour éviter un appel de requête initial non nécessaire.
        const fetchData = async () => {
            console.log('searchQuery_dans_fetchData ', searchQuery)
            try {
                let response

                if (searchQuery) {
                    console.log('searchQuery_dans_if_products ', searchQuery)
                    response = await axios.get(`http://localhost:5000/searchQuery?query=${searchQuery}`)
                } else if (categoryName) {
                    console.log('categoryName_dans_if_products ', categoryName)
                    response = await axios.get(`http://localhost:5000/produit/categorie/${categoryName}`)
                } else {
                    console.log('else_products ')
                    response = await axios.get('http://localhost:5000/produit')
                    console.log('else_products_response', response)
                }
                setData(response.data)
                console.log('categoryName ', categoryName)
                console.log('searchQuery ', searchQuery)
            } catch (error) {
                console.error(error)
            }
        }

        // Appelez fetchData() lorsque le composant est monté ou lorsque categoryName ou searchQuery change.
        fetchData()
    }, [categoryName], [searchQuery])

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
                                        {console.log('item Details', item)}
                                        <button onClick={(event) => onSelectedDetailProduct(item)} className='add_cart_btn'>
                                            <span>
                                                Details
                                            </span>
                                        </button>
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
