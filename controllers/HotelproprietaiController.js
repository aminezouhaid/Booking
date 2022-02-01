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




module.exports = {
    addhotelproprietair,
    
    };