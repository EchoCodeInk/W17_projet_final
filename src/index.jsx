import React from 'react'
import ReactDOM from 'react-dom'
import './css/bootstrap.css'
import './css/style.css'
import './css/ion.rangeSlider.min.css'
import './css/responsive.css'
// import Header from './component/header'
// import Home from './component/home'
// import Footer from './component/footer'
import Products from './component/products'
// import About from './component/about'

// Composant racine de l'application
function App () {
    // Exemple de fonction fetch basique pour effectuer une requête GET
    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json() // Convertit la réponse en format JSON
        })
        .then(data => {
            console.log(data) // Traitez les données ici
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error)
        })

    return (
        <div>
            {/* <Header />
            <Home /> */}
            <Products />
            {/* <About />
            <Footer /> */}
        </div>
    )
}

// Point d'entrée pour le rendu de l'application dans l'élément avec l'ID "root"
ReactDOM.render(<App />, document.getElementById('root')
)
