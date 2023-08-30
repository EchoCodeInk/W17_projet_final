import Panier from './Panier'

class Utilisateur {
    constructor (id, nom, email, password) {
        this.id = id
        this.nom = nom
        this.email = email
        this.password = password
        this.panier = new Panier()
    }
}

export default Utilisateur
