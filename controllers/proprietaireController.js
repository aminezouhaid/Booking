const  proprietaire = require("../models/User");
const updateproprietaire= async (req, res) => {
    const propreatairId = req.params.propreatairId
    const name = req.body.name
    const username = req.body.username
    const email = req.body.email
    try{
      const updatePropreatairData = await proprietaire.updateOne({_id: propreatairId}, {$set:{
        name: name,
        username: username,
        email:email
      }})
      res.status(201).json({success: true, data: updatePropreatairData})
    }catch(error){
      res.status(409).json({success: false, data: [] , error: error})
    }
  }

  const deletpropreataire = async (req, res) => {
    const propreatairId = req.params.propreatairId
    try{
     await proprietaire.deleteOne({_id: propreatairId})
      res.status(200).json({success: true, data: proprietaire});
    }catch(error){
      res.status(409).json({success: false, data: [] , error: error});
    }
  }

 
  module.exports = {
    
updateproprietaire,
deletpropreataire

  
    };