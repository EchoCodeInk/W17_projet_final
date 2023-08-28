import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './css/bootstrap.css'
import './css/style.css'
import './css/ion.rangeSlider.min.css'
import './css/responsive.css'
import './css/style.scss'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import Products from './component/products'
import About from './component/about'
import Whyus from './component/whyus'
import Testimony from './component/testimony'
import Cart from './component/cart'
import AccountContainer from './component/account'
import Register from './component/register'
import axios from 'axios'

// Obtient l'élément DOM avec l'ID "root" où l'application sera rendue
const container = document.getElementById('root')

// Crée une racine réactive dans l'élément DOM "container" pour le rendu de l'application
const root = createRoot(container)

// Composant racine de l'application
function App () {
    const [cartItems, setCartItems] = useState([
        // Exemple de produit
        { id: 1, name: 'Product 1', price: 20, quantity: 2, description: 'description item 1' },
        { id: 2, name: 'Product 2', price: 30, quantity: 1, description: 'description item 2' },
        { id: 3, name: 'Product 3', price: 45.35, quantity: 3, description: 'description item 3' },
        { id: 4, name: 'Product 4', price: 55.55, quantity: 6, description: 'description item 4' }
        // Add more items as needed
    ])
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/Data')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id)

        if (existingProduct) {
            const updatedCart = cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            setCartItems(updatedCart)
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    return (
        <div>
            <div className='App'>
                <h1>Data from SQLite Database</h1>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products addToCart={addToCart} />} />
                <Route path='/about' element={<About />} />
                <Route path='/whyus' element={<Whyus />} />
                <Route path='/testimony' element={<Testimony />} />
                <Route path='/cart' element={<Cart cartItems={cartItems} />} />
                <Route path='/account' element={<AccountContainer />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </div>
    )
}

// Point d'entrée pour le rendu de l'application dans l'élément avec l'ID "root"
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
