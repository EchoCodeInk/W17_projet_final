import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [data, setData] = useState([])

    const onSelectCategory = (category) => {
        axios.get(`http://localhost:5000/produit/categorie/${category.name}`)
            .then(response => {
                setData(response.data)
                console.log('response.data', response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const categories = [
        { id: 1, name: 'appareilphoto' },
        { id: 2, name: 'televison' },
        { id: 3, name: 'drone' },
        { id: 4, name: 'musiqueelectronique' },
        { id: 5, name: 'camera' },
        { id: 7, name: 'jeuxVideo' }
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
