const client = require('../models/User');




const Getallclients = async (req,res)=> {
    let clients = await client.find();
    return res.status(200).json({
        ...clients,
        message:"Hurray ! You ar now logged in .",
        success:false
      })
  };





  module.exports = {
    Getallclients
    
   };