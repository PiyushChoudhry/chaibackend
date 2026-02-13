require('dotenv').config()

const express = require('express') // import express from "express" // both are same

const app = express() // app is very powerful, for eg it can be used as Math in Math.pi, Math.random(), etc

const port = 4000 // on which port server will listen

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/twitter', (req, res) => {
    res.send("hiteshdotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai aur code</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai Aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})