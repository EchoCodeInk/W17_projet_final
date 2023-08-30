/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    console.log('id produit', id)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                setData(response.data.filter(item => id === item.id))
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div>
            {console.log(data)}

            <h1>detail ici</h1>
        </div>

    )
}
export default Details
