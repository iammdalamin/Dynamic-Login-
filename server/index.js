
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./src/routers/api.js")

const app = new  express()

app.use(bodyParser.json())
app.use(cors())


app.use("/api/v1", router)
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

mongoose.connect("mongodb://127.0.0.1:27017/Profiles", (err) => {
    err ? console.log(err)
    :console.log("Server Connected");
})

app.listen(8080, (err) => {
    err?console.log("Serber Error"):
    console.log("Server is running on 8080 port");    

})