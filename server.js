const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const users = require("./routes/api/users")
const profile = require("./routes/api/profile")
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser")

const db = require("./config/keys").mongoURI;



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



mongoose.connect(db)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err))

app.use("/api/users",users)
app.use("/api/profile",profile)
app.use("/api/posts",posts)



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))