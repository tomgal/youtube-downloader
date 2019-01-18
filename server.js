const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const youtubeCore = require("./core/core")

//Server Config
let app = express()
port = process.env.PORT || 3001
app.use(cors())
app.use(bodyParser.json({limit: '50mb', extended: true}))

app.use(function(req, res, next) {
    let err = new Error("Sorry, this page was not found")
    err.status = 404
    next(err)
})

//function called
youtubeCore.dl_list_musique("liste_music.txt")

app.listen(port)
console.log("Youtube Downloader Server listening on port "+port)


