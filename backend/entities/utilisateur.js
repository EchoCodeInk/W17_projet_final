import Panier from './Panier'

class Utilisateur {
    constructor (id, nom, email, password, imageProfil) {
        this.id = id
        this.nom = nom
        this.email = email
        this.password = password
        this.imageProfil = imageProfil
        this.panier = new Panier()
        this.session = true
    }
}

export default Utilisateur
