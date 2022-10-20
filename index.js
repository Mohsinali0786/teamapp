const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes')
const dotenv = require('dotenv')
var path = require('path');


app.use(express.json());

dotenv.config({ path: "./config/config.env" })

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Err===>', err)
    })

app.use(cors());
app.use("/api", userRoutes)
app.listen(process.env.PORT || 8080, () => {
    console.log(`App is running ${process.env.PORT}`)
})

app.use(express.urlencoded({ limit: '10000mb', extended: true }))
app.use(express.static(path.join(__dirname, './client/build')))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})