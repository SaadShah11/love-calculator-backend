
const express = require('express')
const parser = require('body-parser')
//const parser = require('body-parser')
const loveCalculatorRoutes = require("./routes/loveCalculator.js")

const app = express()

app.use(parser.json())
app.use('/loveCalculator', loveCalculatorRoutes)
//app.get('/calculateLove', loveCalculator.displayResults)

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', 'error.html')) //If you create a error html file
})

app.listen(8080)