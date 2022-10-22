const mongoose=require('mongoose');
const CARRECORD=new mongoose.Schema({
    
    Name:{
        type:String,
        require:true
    },
  
    phonenumber:{
        type:Number,
        require:true,
        // unique:true

    },
    email:{
        type:String,
        require:true,
        // unique:true
    },
    date:{
        type:Date,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    car:{
        type:String,
        require:true
    },
    dis:{
       type:Number,
       require:true
    }
})
module.exports = mongoose.model('cardetail', CARRECORD);