import React, { useState, useEffect } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit'
import { } from 'react-router-dom'

export default function ProfileManager () {
    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Utilisateur')
            .then((response) => response.json())
            .then((data) => setProfileData(data))

            .catch((error) => console.error('Erreur lors de la récupération des données :', error))
    }, [])

    return (
        <div className='vh-100' style={{ backgroundColor: '#eee' }}>
            <MDBContainer className='container py-5 h-100'>
                <MDBRow className='justify-content-center align-items-center h-100'>
                    <MDBCol md='12' xl='4'>
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className='text-center'>
                                <h2>Profil</h2> {/* Titre Profil */}
                                {/* Afficher les données des profils */}
                                {profileData.map((profile) => (
                                    <div key={profile.id}>
                                        <div className='mt-3 mb-4'>
                                            <MDBCardImage
                                                src={`/public/images/${profile.image_profil}`}
                                                className='rounded-circle'
                                                fluid
                                                style={{ width: '100px' }}
                                            />
                                        </div>
                                        <MDBTypography tag='h4'>{profile.nom}</MDBTypography>
                                        <MDBCardText className='text-muted mb-4'>
                                            <div>
                                                <span style={{ color: '#000000' }}>Courriel :</span> {profile.email}
                                            </div>
                                            <div> <span style={{ color: '#000000' }}>Telephone :</span> {profile.telephone}</div>
                                            <div> <span style={{ color: '#000000' }}>Adresse :</span> {profile.adresse}</div>
                                            <div> <span style={{ color: '#000000' }}>Ville :</span> {profile.ville}, {profile.province}</div>
                                            <div> <span style={{ color: '#000000' }}>Code Postal :</span> {profile.code_postal}</div>
                                        </MDBCardText>

                                    </div>
                                ))}

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
