const hotel = require('../models/Mhotel');
const addhotel = async (hotelDets,res) => {
    try{
        const newHotel = new hotel({
           name:hotelDets.name,
           description:hotelDets.description,
           image_cover:hotelDets.image_cover,
           images:hotelDets.images,
           stars:hotelDets.stars,
           status:"false",
        });

        await newHotel.save();
        return res.status(201).json({
            message: "Hurry! now you are successfully add hotel...",
            success: true
        });
        } catch (err) {
        // Implement logger function (winston)
        return res.status(500).json({
            message: "Unable to create your account.",
            success: false
        });
        }
    };

  module.exports = {
    addhotel,
    };