const booking = require('../models/Booking');



const bookingproprietair = async (bokpro, res) => {
    

    // create a new booking
    const newBooking = new booking({
       ...bokpro
    });

    await newBooking .save();
    return res.status(201).json({
        message: "Hurry! now you are successfully Booking.",
        success: true
        });
  
    
  
};






module.exports = {
    bookingproprietair,
    
    };
