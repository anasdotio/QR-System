const mongoose = require('mongoose');


function connectDB(){
    mongoose.connect("mongodb+srv://Nodejs:kplgFAXjetntI3My@cluster1.wkfp8.mongodb.net/restaurantDB")
    .then(()=>{
        console.log("Database connected")
    })
}

module.exports = connectDB