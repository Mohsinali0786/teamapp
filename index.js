const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary')
const fileupload = require('express-fileupload'); 
const bodyParser = require('body-parser')


app.use(fileupload({useTempFiles: true}))

app.use(express.json());
app.use(bodyParser.json())

dotenv.config({ path: "./config/config.env" })

app.use(express.urlencoded({ limit: '10000mb', extended: true }))
// app.use(express.static(path.join(__dirname, './client/build')))
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Err===>', err)
    })

    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET,
        // secure: true
      });

app.use(cors());
app.use("/api", userRoutes)
app.listen(process.env.PORT || 8080, () => {
    console.log(`App is running ${process.env.PORT}`)
})