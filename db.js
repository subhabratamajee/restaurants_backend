const mongoose = require("mongoose");
require("dotenv").config();

DB_URI = process.env.DB_URI;

const db = async () => {
    try {
        await mongoose.connect(
            DB_URI, 
        //     {
        //     useNewUrlParser: true, useUnifiedTopology: true
        // },
        )
    console.log("The Server is successfully connected with the Database.")
        

    } catch (error) {
        console.log(error)
    }
}




module.exports = db();