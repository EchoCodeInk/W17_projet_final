import React from 'react'
import { createRoot } from 'react-dom/client'
import './css/bootstrap.css'
import './css/style.css'
import './css/ion.rangeSlider.min.css'
import './css/responsive.css'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import Products from './component/products'
import About from './component/about'
import Whyus from './component/whyus'
import Testimony from './component/testimony'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// Obtient l'élément DOM avec l'ID "root" où l'application sera rendue
const container = document.getElementById('root')

// Crée une racine réactive dans l'élément DOM "container" pour le rendu de l'application
const root = createRoot(container)

// Composant racine de l'application
function App () {
    // const [selectedSection, setSelectedSection] = useState('home') // Par défaut, Home est sélectionné

    // const handleSectionChange = (section) => {
    //     setSelectedSection(section)
    // }
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<Products />} />
                <Route path='/products' element={<About />} />
                <Route path='/whyus' element={<Whyus />} />
                <Route path='/testimony' element={<Testimony />} />
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
