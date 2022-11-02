const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const server = app.listen(8080, () => console.log('Server Up!'))

app.use(cookieParser('c0d3r'))
app.use(express.json())

app.get('/set-cookie', (req, res) => {
    res.cookie('oreo', 'Coder was here!', { signed: true }).send({message: "Cookie setted!"})
})

app.get('/get-cookies', (req, res) => {
    res.send(req.signedCookies)
})

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('oreo').send({message: 'Cookie deleted!'})
})