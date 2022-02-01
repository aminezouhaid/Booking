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







module.exports = {
    bookingroomproprietair,
    
    };