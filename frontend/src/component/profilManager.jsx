import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import sweetalert from 'sweetalert2'

const ProfileManager = ({ onloadStateFromLocalStorage, onSaveStateToLocalStorage }) => {
    const sessionUserOnload = onloadStateFromLocalStorage()
    const [sessionUser, setSessionUser] = useState({
        prenom: sessionUserOnload.prenom,
        nom: sessionUserOnload.nom,
        email: sessionUserOnload.email,
        no_civique: sessionUserOnload.noCivique,
        street: sessionUserOnload.street,
        city: sessionUserOnload.city,
        pays: sessionUserOnload.pays
    })

    const handleOnSaveRegister = (event) => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/utilisateurs/${userId}`)
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données')
                }
                const data = await response.json()
                setProfileData(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
        onSaveStateToLocalStorage(sessionUser)
    }

    console.log('sessionUser', sessionUser)
    const [isEditing, setIsEditing] = useState()

    const handleEditClick = (event) => {
        event.preventDefault()
        setIsEditing(true)
        console.log('handleEditClick')
    }

    const handleCancelClick = (event) => {
        event.preventDefault()
        console.log('handleCancelClick')
        setIsEditing(false)
        window.location.reload()
    }

    const handleValidateform = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const formDataObject = {}

        formData.forEach((value, key) => {
            formDataObject[key] = value
        })

        if (formDataObject.password === '' || formDataObject.confirmPassword === '' || formDataObject.confirmPassword !== formDataObject.password) {
            sweetalert.fire({
                title: 'Password non conforme'
            })
        }

        console.log('Données du formulaire :', formDataObject)
    }

    return (
        <>

            <div className='register-container'>
                <h1>Create an Account</h1>

                <form onSubmit={handleValidateform} className='register-form' method='post'>
                    <label htmlFor='prenom'>Prénom</label>
                    <input type='text' id='prenom' name='prenom' value={sessionUser.prenom} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, prenom: e.target.value }) : null} />

                    <label htmlFor='nom'>Nom</label>
                    <input type='text' id='nom' name='nom' value={sessionUser.nom} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, nom: e.target.value }) : null} />

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' value={sessionUser.email} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, email: e.target.value }) : null} />

                    <label htmlFor='password'>Change Password</label>
                    <input type='password' id='password' name='password' onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, password: e.target.value }) : null} />

                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' id='confirmPassword' name='confirmPassword' onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, password: e.target.value }) : null} />

                    <label htmlFor='nocivique'>No civique</label>
                    <input type='text' id='nocivique' name='nocivique' value={sessionUser.no_civique} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, no_civique: e.target.value }) : null} />

                    <label htmlFor='street'>Street</label>
                    <input type='text' id='street' name='street' value={sessionUser.street} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, street: e.target.value }) : null} />

                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' name='city' value={sessionUser.city} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, city: e.target.value }) : null} />

                    <label htmlFor='pays'>Pays</label>
                    <input type='text' id='pays' name='pays' value={sessionUser.pays} onChange={isEditing ? (e) => setSessionUser({ ...sessionUser, pays: e.target.value }) : null} />
                    <div className='mb-3'>
                        {isEditing
                            ? (
                                <>
                                    <button className='btn btn-primary shadow-0' type='submit' color='primary'>
                                        Enregistrer les modifications
                                    </button>

                                    <button className='btn btn-warning shadow-0' type='submit' onClick={handleCancelClick}>
                                        Annuler
                                    </button>

                                </>
                            )
                            : (
                                <MDBBtn type='button' color='danger' onClick={handleEditClick}>
                                    Modifier
                                </MDBBtn>

                            )}
                    </div>
                </form>

            </div>

        </>
    )
}

export default ProfileManager

// onSubmit={(event) => handleSubmit(event)}
