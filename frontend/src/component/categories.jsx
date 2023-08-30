import React, { useState, useEffect, useRef } from 'react'

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const onSelectCategory = () => {
        // reste a implementer
        // useEffect(() => {
        //     axios.get('http://localhost:5000/produit_categorie')
        //         .then(response => {
        //             setData(response.data)
        //         })
        //         .catch(error => {
        //             console.error(error)
        //         })
        // }, [])
    }
    // Définition des catégories
    const categories = [
        { id: 1, name: 'Appareil photo' },
        { id: 2, name: 'Televison' },
        { id: 3, name: 'Jeux videos' },
        { id: 4, name: 'Ordinateurs' }

    ]
    // Gestionnaire de sélection de catégorie
    const handleCategorySelect = (category, event) => {
        event.stopPropagation()
        onSelectCategory(category)
    }

    // Gestionnaire de bascule pour ouvrir/fermer la liste déroulante
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        // Gestionnaire d'événement pour fermer la liste déroulante lors d'un clic en dehors
        const handleGlobalClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleGlobalClick)

        return () => {
            document.removeEventListener('click', handleGlobalClick)
        }
    }, [])

    return (
        <div className='categories btn-group' ref={dropdownRef}>
            <button
                type='button'
                className={`btn btn-warning ${isOpen}`}
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                onClick={toggleDropdown}
            >
                Catégories
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {categories.map((category) => (
                    <li key={category.id}>
                        <a
                            className='dropdown-item'
                            href='javascript:void(0)'
                            onClick={(event) => handleCategorySelect(category, event)}
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
