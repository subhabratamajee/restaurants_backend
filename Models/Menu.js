const mongoose= require("mongoose")

 const menuSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
        default:"50.00"
    },
    taste:{
        type:String,
        enum:["sweet", "saur"]
    },
    ingrediants:{
        type:String,
    },
    num_sales:{
        type:Number,
        default:0
    }
 })

 const Menu= mongoose.model("Menu", menuSchema);
 module.exports=Menu;