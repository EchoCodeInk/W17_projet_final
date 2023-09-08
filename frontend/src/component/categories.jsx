import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [data, setData] = useState([])

<<<<<<< Updated upstream
    const onSelectCategory = (category) => {
        axios.get(`http://localhost:5000/produit/categorie/${category.name}`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const categories = [
        { id: 1, name: 'appareil photo' },
        { id: 2, name: 'televison' },
        { id: 3, name: 'drone' },
        { id: 4, name: 'musique electronique' },
        { id: 5, name: 'camera' },
        { id: 7, name: 'jeux video' }
=======
        { id: 1, name: 'Appareil Photo' },
        { id: 2, name: 'Télévison' },
        { id: 3, name: 'Drone' },
        { id: 4, name: 'Musique Électronique' },
        { id: 5, name: 'Camera' },
        { id: 6, name: 'Jeux Video' },
        { id: 7, name: 'Telephones cellulaires' },
        { id: 8, name: 'Ordinateurs' },
        { id: 9, name: 'Tablettes' }
>>>>>>> Stashed changes
    ]

    const handleCategorySelect = (category, event) => {
        event.stopPropagation()
        onSelectCategory(category)
    }

    return (
        <div className='categories btn-group'>
            <button
                type='button'
                className='btn btn-warning'
                data-toggle='dropdown'
                aria-haspopup='true'
            >
                Catégories
            </button>
            <ul className='dropdown-menu'>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            className='dropdown-item'
                            to={`/products/${category.name}`}
                            onClick={(event) => handleCategorySelect(category, event)}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>{console.log(data)}</div>
        </div>
    )
}

export default Categories
