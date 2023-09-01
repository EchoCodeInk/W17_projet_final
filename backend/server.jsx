const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()

const app = express()
const port = 5000

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
    const { query } = req.query

    // Assurez-vous d'échapper aux entrées utilisateur pour éviter les injections SQL.
    const sqlQuery = 'SELECT * FROM produit WHERE nom LIKE ?'

    db.all(sqlQuery, [`%${query}%`], (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
    })
})

app.get('/produit_categorie', (req, res) => {
    db.all('SELECT * FROM produit', (err, rows) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        } else {
            res.json(rows)
        }
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
