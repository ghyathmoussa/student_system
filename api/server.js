const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const cors = require('cors')
const body_parser = require('body-parser')

let corsOptions = {
    origin:'http://localhost:4000'
}

app.use(cors())
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())

app.get('/',(req,res) => {
    res.status(200).json({message:"Hello"})
})

app.listen(port,() => console.log(`Listening to port:${port}`))