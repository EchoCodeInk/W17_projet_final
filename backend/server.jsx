const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const nodemailer = require('nodemailer')

const app = express()
const port = 5000

const transporter = nodemailer.createTransport({
    service: 'Outlook',
    auth: {
        user: 'TheSacTeamBoutique@outlook.com',
        pass: '@etu456...'
    }
})

app.use(cors({
    origin: 'http://localhost:8080', // Remplacez par l'URL de votre frontend
    optionsSuccessStatus: 200
}))
app.use(express.json())

const db = new sqlite3.Database('data/database.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err)
    } else {
        console.log('Connected to database')
    }
})

app.get('/produit', (req, res) => {
    db.all('SELECT * FROM produit', (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
    })
})

app.get('/searchQuery', (req, res) => {
    const { query } = req.query
    console.log('dans mon /searchQuery ', query)
    // Assurez-vous d'échapper aux entrées utilisateur pour éviter les injections SQL.
    const sqlQuery = `SELECT * FROM produit WHERE nom LIKE '%${query}%'`

    db.all(sqlQuery, (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
    })
})

app.get('/produit/categorie', (req, res) => {
    const { query } = req.query
    const sqlQuery = `SELECT * FROM produit WHERE categorie_id LIKE '%${query}%'`

    db.all(sqlQuery, (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
    })
})

app.get('/utilisateurs', (req, res) => {
    db.all('SELECT * FROM utilisateur', (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
    })
})

app.get('/utilisateurs/:id', (req, res) => {
    const userId = req.params.id
    const sql = 'SELECT * FROM utilisateur WHERE id = ?'

    db.get(sql, [userId], (err, row) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
            return
        }

        if (!row) {
            res.status(404).json({ error: 'Utilisateur non trouvé' })
            return
        }

        res.json(row)
    })
})

app.put('/utilisateurs/:id', (req, res) => {
    const userId = req.params.id
    const updatedUserData = req.body

    const sql = 'UPDATE utilisateur SET nom = ?, email = ?, no_civique = ?, street = ?, city = ?, pays = ?, image_profil = ? WHERE id = ?'

    const { nom, email, street, city, pays } = updatedUserData

    db.run(sql, [nom, email, street, city, pays, userId], (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
            return
        }

        res.json({ message: 'Utilisateur mis à jour avec succès' })
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body // Obtenez les données envoyées par le client

    // Effectuez votre recherche SQL en utilisant les données de connexion
    db.all('SELECT * FROM utilisateur WHERE email = ? AND password = ?', [email, password], (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
    })
})
app.post('/register', (req, res) => {
    const { email, password } = req.body

    // Validez les données côté serveur (ajoutez d'autres validations si nécessaire)
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe sont obligatoires' })
    }

    // Vérifiez si l'email est unique
    db.get('SELECT * FROM utilisateur WHERE email = ?', [email], (err, existingUser) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erreur du serveur' })
        }

        if (existingUser) {
            return res.status(409).json({ error: 'Cet email est déjà utilisé' })
        }

        // Effectuez votre requête SQL pour créer un nouvel utilisateur
        db.run('INSERT INTO utilisateur (email, password) VALUES (?, ?)', [email, password], function (err) {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erreur du serveur' })
            }

            // Renvoyez un message de succès avec l'ID du nouvel utilisateur créé
            res.status(200).json({ message: 'Nouvel utilisateur créé avec l\'ID ' + this.lastID })
        })
    })
})

app.post('/envoyer-email', (req, res) => {
    const { destinataire, sujet, contenu } = req.body

    const mailOptions = {
        from: 'TheSacTeamBoutique@outlook.com',
        to: destinataire,
        subject: sujet,
        text: contenu
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error)
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.')
        } else {
            console.log('E-mail envoyé : ' + info.response)
            res.status(200).send('E-mail envoyé avec succès.')
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
