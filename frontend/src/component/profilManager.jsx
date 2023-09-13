import React, { useState, useEffect } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBBtn } from 'mdb-react-ui-kit'

const ProfileManager = ({ onloadStateFromLocalStorage, onSaveStateToLocalStorage }) => {
    const [profileData, setProfileData] = useState({})
    const [isEditing, setIsEditing] = useState(false)
    const [updatedUserData, setUpdatedUserData] = useState({
        nom: '',
        email: '',
        street: '',
        city: '',
        pays: ''
    })

    const sessionUser = onloadStateFromLocalStorage()
    const userId = sessionUser.id

    useEffect(() => {
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
    }, [userId, onloadStateFromLocalStorage, onSaveStateToLocalStorage])

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = async () => {
        try {
            const response = await fetch(`http://localhost:5000/utilisateurs/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUserData)
            })

            if (!response.ok) {
                throw new Error('Échec de la mise à jour')
            }

            // Mise à jour des données du profil avec les nouvelles données
            setProfileData(updatedUserData)
        } catch (error) {
            console.error(error)
        } finally {
            setIsEditing(false)
        }
    }

    const handleCancelClick = () => {
        setIsEditing(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUpdatedUserData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className='vh-100' style={{ backgroundColor: '#eee' }}>
            <MDBContainer className='container py-5 h-100'>
                <MDBRow className='justify-content-center align-items-center h-100'>
                    <MDBCol md='12' xl='4'>
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className='text-center'>
                                <h2>Profil</h2>
                                {isEditing
                                    ? (
                                        <div>
                                            <div className='mb-4'>
                                                <input
                                                    type={profileData.nom}
                                                    name='nom'
                                                    value={updatedUserData.nom}
                                                    onChange={handleInputChange}
                                                    placeholder='Nom'
                                                />
                                            </div>
                                            <div className='mb-4'>
                                                <input
                                                    type='text'
                                                    name='email'
                                                    value={updatedUserData.email}
                                                    onChange={handleInputChange}
                                                    placeholder='Email'
                                                />
                                            </div>
                                            <div className='mb-4'>
                                                <input
                                                    type='text'
                                                    name='street'
                                                    value={updatedUserData.street}
                                                    onChange={handleInputChange}
                                                    placeholder='Rue'
                                                />
                                            </div>
                                            <div className='mb-4'>
                                                <input
                                                    type='text'
                                                    name='city'
                                                    value={updatedUserData.city}
                                                    onChange={handleInputChange}
                                                    placeholder='Ville'
                                                />
                                            </div>
                                            <div className='mb-4'>
                                                <input
                                                    type='text'
                                                    name='pays'
                                                    value={updatedUserData.pays}
                                                    onChange={handleInputChange}
                                                    placeholder='Pays'
                                                />
                                            </div>
                                            <MDBBtn onClick={handleSaveClick}>Sauvegarder</MDBBtn>
                                            <MDBBtn onClick={handleCancelClick} color='danger'>Annuler </MDBBtn>
                                        </div>
                                    )
                                    : (
                                        <div>
                                            <div className='mt-3 mb-4'>
                                                <MDBCardImage
                                                    src={`/public/images/${profileData.image_profil}`}
                                                    className='rounded-circle'
                                                    fluid
                                                    style={{ width: '100px' }}
                                                />
                                            </div>
                                            <MDBTypography tag='h4'>{profileData.nom}</MDBTypography>
                                            <MDBCardText className='text-muted mb-4'>
                                                <div>
                                                    <span style={{ color: '#000000' }}>Courriel :</span>{' '}
                                                    {profileData.email}
                                                </div>
                                                <div>
                                                    {' '}
                                                    <span style={{ color: '#000000' }}>Adresse :</span>{' '}
                                                    {profileData.no_civique}, rue {profileData.street}
                                                </div>
                                                <div>
                                                    {' '}
                                                    <span style={{ color: '#000000' }}>Ville :</span>{' '}
                                                    {profileData.city}
                                                </div>
                                                <div>
                                                    {' '}
                                                    <span style={{ color: '#000000' }}>Pays :</span>{' '}
                                                    {profileData.pays}
                                                </div>
                                            </MDBCardText>
                                            <MDBBtn onClick={handleEditClick}>Modifier</MDBBtn>
                                        </div>
                                    )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default ProfileManager
