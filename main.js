const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let orders = []
let index = 0

app.use(bodyParser.json())

app.get("/orders", (req, res) => {
    res.json(orders)
})

app.post("/orders", (req, res) => {
    index += 1
    req.body.id = index
    orders.push(req.body)
    res.status(201).json(req.body)
})

app.put("/orders/:id", (req, res) => {
    const id = req.param.id
    orders[id - 1] = req.body
    res.json(orders[id - 1])
})

app.listen(process.env.PORT || 8080, () => {
    console.log('App Listening')
})