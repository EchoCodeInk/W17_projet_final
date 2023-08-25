'use strict'

const dao = require('./src/server/dao')
const express = require('express')

const app = express()
app.use(express.static('dist'))

// parse application/json
app.use(express.json())

// CORS for development
// https://enable-cors.org/server_expressjs.html
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Credentials', 'false')
    next()
})

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'

app.get('/musics', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    dao.connect()
    dao.query('SELECT title FROM playlist ', [], (result) => {
        response.end(JSON.stringify(result, null, 4))
        dao.disconnect()
    })
})

app.post('/musics', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    console.log('request.body.title', request.body.title)
    dao.connect()
    dao.query(
        'INSERT INTO track (title, uri, master_id) VALUES ($1, $2, $3)',
        [request.body.title, request.body.uri, request.body.master_id],
        (result) => {
            response.end(JSON.stringify(result, null, 4))
            dao.disconnect()
        }
    )
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
