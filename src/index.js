const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
    res.json({count})
})

app.listen(port, () => {
    console.log(`My app listening on ${port}`)
}) // it now works!!