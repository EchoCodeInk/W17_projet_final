import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='hero_area'>
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
                                                <a href=''>
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='img-box'>
                                                <img src='../images/slider-img.png' alt='' />
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
                                                <a href=''>
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='img-box'>
                                                <img src='../images/slider-img.png' alt='' />
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
                                                <a href=''>
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='img-box'>
                                                <img src='../images/slider-img.png' alt='' />
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

            {/* <!-- product section --> */}

            <section className='product_section layout_padding'>
                <div className='container'>
                    <div className='heading_container heading_center'>
                        <h2>
                            Our Products
                        </h2>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p1.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p2.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p3.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p4.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p5.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p6.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p7.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p8.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                        <div className='col-sm-6 col-lg-4'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src='../images/p9.png' alt='' />
                                    <a href='' className='add_cart_btn'>
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className='product_info'>
                                        <h5>
                                            <span>$</span> 300
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
                        </div>
                    </div>
                    <div className='btn_box'>
                        <a href='' className='view_more-link'>
                            View More
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- end product section --> */}

            {/* <!-- about section --> */}

            <section className='about_section'>
                <div className='container-fluid  '>
                    <div className='row'>
                        <div className='col-md-5 ml-auto'>
                            <div className='detail-box pr-md-3'>
                                <div className='heading_container'>
                                    <h2>
                                        We Provide Best For You
                                    </h2>
                                </div>
                                <p>
                                    Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae
                                    accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore
                                    officia!
                                    Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae
                                    aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam?
                                    Vero, dicta.
                                </p>
                                <a href=''>
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className='col-md-6 px-0'>
                            <div className='img-box'>
                                <img src='../images/about-img.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end about section --> */}

            {/* <!-- why us section --> */}

            <section className='why_us_section layout_padding'>
                <div className='container'>
                    <div className='heading_container heading_center'>
                        <h2>
                            Why Choose Us
                        </h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='box '>
                                <div className='img-box'>
                                    <img src='../images/w1.png' alt='' />
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Fast Delivery
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='box '>
                                <div className='img-box'>
                                    <img src='../images/w2.png' alt='' />
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Free Shiping
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='box '>
                                <div className='img-box'>
                                    <img src='../images/w3.png' alt='' />
                                </div>
                                <div className='detail-box'>
                                    <h5>
                                        Best Quality
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end why us section --> */}

            {/* <!-- client section --> */}

            <section className='client_section layout_padding-bottom'>
                <div className='container'>
                    <div className='heading_container heading_center'>
                        <h2>
                            What Says Our Customers
                        </h2>
                    </div>
                </div>
                <div className='client_container '>
                    <div id='carouselExample2Controls' className='carousel slide' data-ride='carousel'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='container'>
                                    <div className='box'>
                                        <div className='detail-box'>
                                            <p>
                                                <i className='fa fa-quote-left' aria-hidden='true' />
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                                                long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look
                                            </p>
                                        </div>
                                        <div className='client-id'>
                                            <div className='img-box'>
                                                <img src='../images/client.jpg' alt='' />
                                            </div>
                                            <div className='name'>
                                                <h5>
                                                    James Dew
                                                </h5>
                                                <h6>
                                                    Photographer
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='container'>
                                    <div className='box'>
                                        <div className='detail-box'>
                                            <p>
                                                <i className='fa fa-quote-left' aria-hidden='true' />
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                                                long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look
                                            </p>
                                        </div>
                                        <div className='client-id'>
                                            <div className='img-box'>
                                                <img src='../images/client.jpg' alt='' />
                                            </div>
                                            <div className='name'>
                                                <h5>
                                                    James Dew
                                                </h5>
                                                <h6>
                                                    Photographer
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='container'>
                                    <div className='box'>
                                        <div className='detail-box'>
                                            <p>
                                                <i className='fa fa-quote-left' aria-hidden='true' />
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                                                long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look
                                            </p>
                                        </div>
                                        <div className='client-id'>
                                            <div className='img-box'>
                                                <img src='../images/client.jpg' alt='' />
                                            </div>
                                            <div className='name'>
                                                <h5>
                                                    James Dew
                                                </h5>
                                                <h6>
                                                    Photographer
                                                </h6>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='carousel_btn-box'>
                            <a className='carousel-control-prev' href='#carouselExample2Controls' role='button' data-slide='prev'>
                                <span>
                                    <i className='fa fa-angle-left' aria-hidden='true' />
                                </span>
                                <span className='sr-only'>Previous</span>
                            </a>
                            <a className='carousel-control-next' href='#carouselExample2Controls' role='button' data-slide='next'>
                                <span>
                                    <i className='fa fa-angle-right' aria-hidden='true' />
                                </span>
                                <span className='sr-only'>Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end client section --> */}

        </div>
    )
}
export default Home
