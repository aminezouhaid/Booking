const bookingroom = require('../models/BookingRoom');


const bookingroomproprietair = async (bookingroomproprietair, res) => {
    

    // create a new booking
    const newBooking = new bookingroom({
       ...bookingroomproprietair
    });

    await newBooking .save();
    return res.status(201).json({
        message: "Hurry! now you are successfully Booking.",
        success: true
        });
    }


    const getbookingroom = async (req, res) => {
        const idbookingroom=req.params.bookingroomid;
        console.log(idbookingroom);
        try {
          const bookingrooms = await bookingroom.findById(idbookingroom).populate('booking_id');
          res.status(200).json({success: true , data: bookingrooms})
        }catch(error){
          res.status(404).json({success: false , data: [], error: error})
        }
      }




module.exports = {
    bookingroomproprietair,
    getbookingroom
    
    };