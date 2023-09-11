import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
// import { useNavigate } from 'react-router'
import axios from 'axios'
function Delivery ({ onloadStateFromLocalStorage, onSaveStateToLocalStorage }) {
    const sessionUser = onloadStateFromLocalStorage()

    // const navigate = useNavigate()
    const firstNAme = sessionUser.prenom
    const lastName = sessionUser.nom
    const userEmail = sessionUser.email
    const noCivique = sessionUser.noCivique
    const street = sessionUser.street
    const city = sessionUser.city
    const pays = sessionUser.pays
    const paniers = sessionUser.panier.articles

    const informationsAchat = paniers.map(item => {
        return `Nom de l'item : ${item.product.nom}
         Quantity : ${item.quantity}
                `
    })

    // Joignez les éléments HTML ensemble dans une seule chaîne
    const contenuEmail = informationsAchat.join('')

    function envoyerEmailAchat (contenuEmail) {
        const email = userEmail
        const sujet = 'Confirmation d\'achat'

        axios.post('http://localhost:5000/envoyer-email', {
            destinataire: email,
            sujet,
            contenu: contenuEmail
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('E-mail envoyé avec succès')

                    sessionUser.panier.articles = []
                    onSaveStateToLocalStorage(sessionUser)
                    console.log('sessionUser email', sessionUser)
                } else {
                    console.error('Erreur lors de l\'envoi de l\'e-mail')
                }
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error)
            })
    }

    return (
        <MDBContainer className='my-5 py-5' style={{ maxWidth: '1100px' }}>
            <section>
                <MDBRow>
                    <MDBCol md='12'>

                        <MDBAccordion className='card mb-4'>
                            <MDBAccordionItem collapseId={1} className='border-0' headerTitle='Promo/Student Code or Vouchers'>
                                <MDBInput label='Enter code' type='text' />
                            </MDBAccordionItem>
                        </MDBAccordion>

                    </MDBCol>

                    <MDBCol md='12' className='mb-4'>
                        <MDBCard className='mb-4'>
                            <MDBCardHeader className='py-3'>
                                <MDBTypography tag='h5' className='mb-0 text-font text-uppercase'>Delivery address</MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <form>
                                    <MDBRow className='mb-4'>
                                        <MDBCol>
                                            <MDBInput label='First name' type='text' value={firstNAme} />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Last name' type='text' value={lastName} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBInput label='Email' type='text' className='mb-4' value={userEmail} />
                                    <MDBRow className='mb-4'>

                                        <MDBCol>
                                            <MDBInput label='No civique' type='text' value={noCivique} />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Street' type='text' value={street} />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='City' type='text' value={city} />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Pays' type='text' value={pays} />
                                        </MDBCol>
                                    </MDBRow>

                                    {sessionUser.session === true
                                        ? (
                                            <div className='d-flex justify-content-center'>
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                                            </div>
                                        )
                                        : null}
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                        <div className='text-center'>
                            <MDBBtn href='/confirmation' className='button-order col-md-10' onClick={() => envoyerEmailAchat(contenuEmail)}>Place order</MDBBtn>
                        </div>

                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
    )
}

export default Delivery
