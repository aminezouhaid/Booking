const {Schema, model}= require('mongoose');
const HotelSchema = new Schema (
  {
      name : {
          type:String,
          required:true,
      },
      description:{
          type:String,
          required:true
      },
      // image_cover:{
      //     type:String,
      //     required:true
      // },
      // images:{
      //     type:String,
      //     required:true
      // },
      // stars:{
      //     type:String,
      //     required:true
      // },
      // status:{
      //     type:String,
      //     required:true
      // },
  },
  {timestamps:true}
);
module.exports = model("Hotel",HotelSchema);