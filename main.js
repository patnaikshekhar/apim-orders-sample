const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let orders = []
let index = 0

app.use(bodyParser.json())

app.get("/orders", (req, res) => {
    console.log('GET /orders called returning', orders.length, 'records')
    res.json(orders)
})

app.post("/orders", (req, res) => {
    index += 1
    console.log('POST /orders called. Created order', index)
    req.body.id = index
    orders.push(req.body)
    res.status(201).json(req.body)
})

app.put("/orders/:id", (req, res) => {
    const id = req.param.id
    console.log('PUT /orders called for order with id', id)
    orders[id - 1] = req.body
    res.json(orders[id - 1])
})

app.listen(process.env.PORT || 8080, () => {
    console.log('App Listening')
})