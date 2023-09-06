import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
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
import Account from './component/account'
import Register from './component/register'
import Details from './component/details'
import Checkout from './component/check_out'
import Delivery from './component/delivery'
import Utilisateur from '../../backend/entities/Utilisateur'
import PanierItem from './component/panier-items'

// Obtient l'élément DOM avec l'ID "root" où l'application sera rendue
const container = document.getElementById('root')

// Crée une racine réactive dans l'élément DOM "container" pour le rendu de l'application
const root = createRoot(container)

// Composant racine de l'application
function App () {
    const { state, dispatch } = useSession() // Accès au contexte de session
    const [selectedDetailProduct, setSelectedDetailProduct] = useState()
    const [categoryName, setCategoryName] = useState()
    const navigate = useNavigate()

    const [reloadKey, setReloadKey] = useState(0) // Initialisez la clé avec 0

    const handleReloadProduct = () => {
        // Incrémentez la clé pour forcer le rechargement du composant Product
        setReloadKey(reloadKey + 1)
    }

    useEffect(() => {
        if (!state.initUser) {
            const initUser = new Utilisateur('anonymous', 'anonymous', 'anonymous', 'anonymous', 'icon_account.png')
            dispatch({ type: 'INIT_USER', payload: initUser })
        }
    }, [state.user, dispatch])

    const [searchQueryFromHeader, setSearchQueryFromHeader] = useState('')

    // Fonction de rappel pour recevoir searchQuery du composant Header
    const handleSearchQueryChange = (searchQuery) => {
        setSearchQueryFromHeader(searchQuery)
        console.log('searchQueryFromHeader', searchQueryFromHeader)
    }
    const handleSearchCategoryName = (categoryName) => {
        setCategoryName(categoryName)
        console.log('searchQueryFromHeader', searchQueryFromHeader)
    }
    const handleSelectedDetailProduct = (productSelected) => {
        console.log('handleSelectedDetailProduct', productSelected)
        setSelectedDetailProduct(productSelected)
        navigate('/details')
    }
    console.log('categoryName', categoryName)
    return (
        <div>
            <Header onSearchCategoryName={handleSearchCategoryName} onSearchQueryChange={handleSearchQueryChange} handleReloadProduct={handleReloadProduct} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products onSelectedDetailProduct={handleSelectedDetailProduct} key={reloadKey} searchQuery={searchQueryFromHeader} />} />
                <Route path='/about' element={<About />} />
                <Route path='/whyus' element={<Whyus />} />
                <Route path='/testimony' element={<Testimony />} />
                <Route path='/panier' element={<PanierItem />} />
                <Route path='/account' element={<Account state={state} dispatch={dispatch} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/details' element={<Details selectedDetailProduct={selectedDetailProduct} />} />
                <Route path='/products/categorie' element={<Products onSelectedDetailProduct={handleSelectedDetailProduct} searchCategorieName={categoryName} />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/delivery' element={<Delivery />} />
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
