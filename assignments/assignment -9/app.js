const express = require('express')
const fs = require('fs')

const books = fs.readFileSync('books5.json')

const app = express()

const port = 5001

app.get('/', (req, res) => {
    res.redirect("/api/books")
})

app.get('/api/books', (req, res) => {
    res.send(books.toString())
})

app.post('/api/books', (req, res) => {
    res.send('Work in progress')
})

app.get('/api/books/:isbn', (req, res) => {
    var selectedbook = books.filter(b => b.isbn == req.params.isbn)
    res.send(selectedbook.toString())
})




const server = app.listen(port,_ => {
    console.log("Server started on port: ", port)
})

server.on("error", error => console.error('error', error.message))