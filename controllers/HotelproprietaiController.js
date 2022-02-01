const hotelproprietair = require('../models/Hotel');

const addhotelproprietair = async (hotelproprietairs, res) => {
    

    // create a new booking
    const newBooking = new hotelproprietair({
       ...hotelproprietairs
    });

    await newBooking .save();
    return res.status(201).json({
        message: "Hurry! now you are successfully Hotel.",
        success: true
        });
  
    
  
};

const updatehotelproprietair = async (req,res)=> {
    const idbooking=req.params.bookingid;
    const {date_from}= req.body;
    const {date_to}= req.body;
    const {status}= req.body;
    let newvalues = { $set: {date_from: date_from, date_to:date_to,status:status} };
  let bookings = await booking.updateOne({_id:idbooking}, newvalues);
  return res.status(200).json({
      ...bookings,
      message:"Hurray ! You ar now updat booking Par ID .",
      success:false
    })
};




module.exports = {
    addhotelproprietair,
    updatehotelproprietair
    
    };