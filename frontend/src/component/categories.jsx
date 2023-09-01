import axios from 'axios'
import React, { useRef, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router'

const Categories = () => {
    const [data, setData] = useState()
    const dropdownRef = useRef(null)

    const onSelectCategory = (categoriName) => {
        // reste a implementer
        useEffect(() => {
            axios.get('http://localhost:5000/produit_categorie')
                .then(response => {
                    setData(response.data)
                    console.log('response.data', response.data)
                    console.log('data', data)
                })
                .catch(error => {
                    console.error(error)
                })
        }, [])
    }

    // Définition des catégories
    const categories = [
        { id: 1, name: 'Appareil photo' },
        { id: 2, name: 'Televison' },
        { id: 3, name: 'Jeux videos' },
        { id: 4, name: 'Ordinateurs' }

    ]

    return (
        <div className='categories btn-group' ref={dropdownRef}>
            <button
                type='button'
                // className={`btn btn-warning ${isOpen}`}
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                className='nav-link'
            >
                Catégories
            </button>
            <ul className='dropdown-menu'>
                {categories.map((category) => (
                    <li key={category.id}>
                        <a
                            className='dropdown-item'
                            href=''
                            onClick={onSelectCategory(category.name)}
                        >
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
