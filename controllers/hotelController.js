const Hotel = require("../models/Hotel")

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.status(200).json({ success: true, data: hotels })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}
const getHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  try {
    const hotel = await Hotel.find({ _id: hotelId })
    res.status(200).json({ success: true, data: hotel })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const creatHotel = async (req, res) => {
 
  try {
    const  name  = req.body.name
    const  description  = req.body.description
    const  stars  = req.body.stars
    // const  status = req.body.status
    const  city  = req.body.localisation

    const newHotel = new Hotel({
      name: name,
      description: description,
      stars: stars,
      // status: status,
      localisation: { city }
      

    })
  
    if (req.body.file) {
      newHotel.image_cover = req.file.path
    }
    const saveHotel = await newHotel.save()
    res.status(201).json({ success: true, data: saveHotel })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const updateHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  const { name } = req.body
  const { description } = req.body
  try {
    const updatedHotelData = await Hotel.updateOne({ _id: hotelId }, {
      $set: {
        name: name,
        description: description
      }
    })
    res.status(201).json({ success: true, data: updatedHotelData })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const deletHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  try {
    await Hotel.remove({ _id: hotelId })
    res.status(200).json({ success: true, data: deletHotel })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const getHoteletoiles = async (req, res) => {
  const Hoteletoiless=req.params.hoteletoile;
  // console.log(Hoteletoiless);
  try {
    const hoteletoil = await Hotel.find({stars:Hoteletoiless});
    console.log(hoteletoil);
    res.status(200).json({success: true , data: hoteletoil})
  }catch(error){
    res.status(404).json({success: false , data: [], error: error})
  }
}



const getHotelbycity = async (req, res, next) => {

  try {
      const hotel = await Hotel.find({
          "localisation.city": req.params.city
      });
      res.status(200).json({
          status: "succes",
          data: hotel
      });
  } catch (err) {
      res.send(err);
  }
};
// const getHotelbycountry = async (req, res, next) => {

//   try {
//       const hotel = await Hotel.find({
//           "localisation.country": req.params.country
//       });
//       res.status(200).json({
//           status: "succes",
//           data: hotel
//       });
//   } catch (err) {
//       res.send(err);
//   }
// };


module.exports = {
  creatHotel,
  getHotels,
  getHotel,
  updateHotel,
  getHoteletoiles,
  deletHotel,
  getHotelbycity,
  // getHotelbycountry
};