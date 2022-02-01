const booking = require('../models/Booking');



const bookingproprietair = async (bookingproprietair, res) => {
    

    // create a new booking
    const newBooking = new booking({
       ...bookingproprietair
    });

    await newBooking .save();
    return res.status(201).json({
        message: "Hurry! now you are successfully Booking.",
        success: true
        });
  
    
  
};

const updatebooking = async (req,res)=> {
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
    bookingproprietair,
    updatebooking,
    
    };
