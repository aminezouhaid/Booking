const {Schema, model}= require('mongoose');
const BookingroomSchema = new Schema (
    {
    
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
        booking_id: [
            { type: Schema.Types.ObjectId,ref:'booking'}
                    ]
    },{
        
    },
    {timestamps:true},
);
module.exports = model(
    "bookingroom",BookingroomSchema,
    
    );