const mongoose=require("mongoose")

const personSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    work:{
        type:[String],
        enum:["manager","waiter","chef"]
    },
    salary:{
        type:Number,
        default:0,
    }
})
const Person=mongoose.model("Person", personSchema);
 module.exports=Person;