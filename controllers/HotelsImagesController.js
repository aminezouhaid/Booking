const HotelImage = require("../models/HotelsImages")


// const getImagesByHotels = async (req, res) => {
//     try {
//         const hotels = await Hotel.find()
//         res.status(200).json({ success: true, data: hotels })
//     } catch (error) {
//         res.status(409).json({ success: false, data: [], error: error })
//     }
// }
// const getImages = async (req, res) => {
//     const hotelId = req.params.hotelId
//     try {
//         const hotel = await Hotel.find({ _id: hotelId })
//         res.status(200).json({ success: true, data: hotel })
//     } catch (error) {
//         res.status(404).json({ success: false, data: [], error: error })
//     }
// }

const creatHotelImages = async (req, res) => {
    try {
        const { hotel_id } = req.body

        const newHotelImages = new HotelImage({
            hotel_id: hotel_id,
        }
        )
        if (req.file) {
            newHotelImages.image = req.file.path
        }
        const saveHotel = await newHotelImages.save()
        res.status(201).json({ success: true, data: saveHotel })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}





module.exports = {
    creatHotelImages,
};

