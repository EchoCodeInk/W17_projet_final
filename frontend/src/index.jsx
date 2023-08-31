import React from 'react'
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

// Obtient l'élément DOM avec l'ID "root" où l'application sera rendue
const container = document.getElementById('root')

// Crée une racine réactive dans l'élément DOM "container" pour le rendu de l'application
const root = createRoot(container)

// Composant racine de l'application
function App () {
    const { state, dispatch } = useSession() // Accès au contexte de session
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
