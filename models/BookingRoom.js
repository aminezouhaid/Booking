const {Schema, model}= require('mongoose');
const BookingroomSchema = new Schema (
    {
        booking_id: {
            type:String,
            required:true,
        },
        room_id:{
            type:String,
            required:true
        },
        rooms_quantity:{
            type:String,
            required:true            
        },
        price:{
            type:String,
            default: true
           
        },
        
        total_price:{
            type:String,
            required:true
        },
      
    },
    {timestamps:true},
);
module.exports = model("bookingroom",BookingroomSchema);