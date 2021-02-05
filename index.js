const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest =require('./requests/weather.request')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    temperature = ''
    res.render('index',{temperature} )
})

app.post('/', async (req, res) => {
    const  { city } = req.body
    const temperature =  await weatherRequest.request(city)
    console.log(temperature)

    res.render('index',{temperature})
})

app.listen(3044, () => {
    console.log('http://localhost:3044')
})