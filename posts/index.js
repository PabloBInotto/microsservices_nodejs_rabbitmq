const express = require('express')
const bodyParser = require('body-parser')
const {ranomBytes} = require('crypto')

const app = express()

const post = {}

app.get('/post', (req, res) => {
    res.send(post)
})

app.post('/post', (req, res) => {
    const id = ranomBytes(4).toString('hex')
    const { title } = req.body
    post[id] = {
        id, title
    }
    res.status(201).send(post[id])
})


app.listen(4000, ()=>{
    console.log("Post na porta 4000")
})