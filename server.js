const express = require("express")
const bodyparser = require("body-parser")
const personRoutes = require("./routes/PersonRoutes")
const menuRoutes= require("./routes/MenuRoutes")
const db = require("./db")
require("dotenv").config();

const app = express();

app.use(bodyparser.json())
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    try {
        res.status(200).send("Welcome to our Restaurant.")
    } catch (error) {
        console.log("Internal Server Error");
    }
})

app.use('/person', personRoutes);
app.use("/menu",menuRoutes)

app.listen(PORT, () => {
    console.log(`The port is running in ${PORT}`);
})