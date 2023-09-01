import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './css/bootstrap.css'
import './css/style.css'
import './css/ion.rangeSlider.min.css'
import './css/responsive.css'
import './css/style.scss'
import { SessionProvider, useSession } from '../../backend/controleur/SessionContext'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import Products from './component/products'
import About from './component/about'
import Whyus from './component/whyus'
import Testimony from './component/testimony'
import Panier from './component/panier'
import Account from './component/account'
import Register from './component/register'
import Details from './component/details'
import Utilisateur from '../../backend/entities/Utilisateur'
import Categories from './component/Categories'

// Obtient l'élément DOM avec l'ID "root" où l'application sera rendue
const container = document.getElementById('root')

// Crée une racine réactive dans l'élément DOM "container" pour le rendu de l'application
const root = createRoot(container)

// Composant racine de l'application
function App () {
    const { state, dispatch } = useSession() // Accès au contexte de session

    useEffect(() => {
        if (!state.initUser) {
            const initUser = new Utilisateur('anonymous', 'anonymous', 'anonymous', 'anonymous', 'icon_account.png')

            // Exemple de produit
            // const produit1 = { id: 1, name: 'Product 1', price: 20, quantity: 2, description: 'description item 1' }
            // const produit2 = { id: 2, name: 'Product 2', price: 30, quantity: 1, description: 'description item 2' }
            // const produit3 = { id: 3, name: 'Product 3', price: 45.35, quantity: 3, description: 'description item 3' }
            // const produit4 = { id: 4, name: 'Product 4', price: 55.55, quantity: 6, description: 'description item 4' }
            // initUser.panier.articles.push(produit1)
            // initUser.panier.articles.push(produit2)
            // initUser.panier.articles.push(produit3)
            // initUser.panier.articles.push(produit4)

            dispatch({ type: 'INIT_USER', payload: initUser })
        }
    }, [state.user, dispatch])
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/whyus' element={<Whyus />} />
                <Route path='/testimony' element={<Testimony />} />
                <Route path='/panier' element={<Panier />} />
                <Route path='/account' element={<Account state={state} dispatch={dispatch} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/products/:categoryName' element={<Products />} />
            </Routes>
            <Footer />
        </div>
    )
}

// Point d'entrée pour le rendu de l'application dans l'élément avec l'ID "root"
root.render(
    <SessionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SessionProvider>
)
