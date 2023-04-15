const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('My own bespoke message!')
})

app.listen(port, () => {
    console.log(`My app listening on ${port}`)
}) // it now works!!