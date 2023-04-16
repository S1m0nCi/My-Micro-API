const express = require('express')
const app = express()
const port = 5000

let count = 0

app.get('/api', (req, res) => {
    res.json({count})
})

app.post('/api', (req, res) => {
    count++
    res.json({count})
})

app.listen(port, () => {
    console.log(`My app listening on ${port}`)
}) // it now works!!