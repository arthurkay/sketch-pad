require('dotenv').config()
const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index'))
})

app.use(router)
const port = process.env.PORT || 3000

app.listen( () => {
    console.log(`The app is up and running on port ${port}`)
})

