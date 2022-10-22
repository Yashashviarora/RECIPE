const mongoose=require("mongoose");
const Recipeschema=new mongoose.Schema({
    
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    Confirmpassword:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model('clients', Recipeschema);