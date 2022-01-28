const Hotel = require("../models/Hotel")


const addHotel = async (req, res) => {
  try{
    const hotels = await Hotel.find()
    res.status(200).json({success: true , data: hotels})
  }catch(error){
    res.status(409).json({success: false, data: [], error: error} )
  }
}
const getHotel = async ( req, res) => {
  const hotelId = req.params.hotelId
  try {
    const hotel = await Hotel.find({_id: hotelId})
    res.status(200).json({success: true , data: hotel})
  }catch(error){
    res.status(404).json({success: false , data: [], error: error})
  }
}

const creatHotel = async (req, res) => {
  try{
    const {name} = req.body
    const {description} = req.body

    const newHotel = new Hotel({
      name: name,
      description : description
    })
    const saveHotel = await newHotel.save()
    res.status(201).json({success: true, data: saveHotel})
  }catch(error){
    res.status(404).json({success: false, data: [] , error: error})
  } 
}


const updateHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  const {name} = req.body
  const {description} = req.body
  try{
    const updatedHotelData = await Hotel.updateOne({_id: hotelId}, {$set:{
      name: name,
      description: description
    }})
    res.status(201).json({success: true, data: updatedHotelData})
  }catch(error){
    res.status(409).json({success: false, data: [] , error: error})
  }
}

const deletHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  try{
    await Hotel.remove({_id: hotelId})
    res.status(200).json({success: true, data: deletHotel})
  }catch(error){
    res.status(409).json({success: false, data: [] , error: error})
  }
}

module.exports = {
  creatHotel,
  addHotel,
  getHotel,
  updateHotel,
  deletHotel
   
  };
