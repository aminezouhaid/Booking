const {Schema, model}= require('mongoose');
const BookingSchema = new Schema (
    {
        date_from : {
            type:Date,
            required:true,
        },
        date_to:{
            type:Date,
            required:true
        },
        total_price:{
            type:String,
            required:true            
        },
        status:{
            type:Boolean,
            default: true
           
        },
        
        user_id:{
            type:String,
            required:true
        },
      
    },
    {timestamps:true},
);
module.exports = model("booking",BookingSchema);