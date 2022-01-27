const client = require('../models/User');




const Getallclients = async (req,res,role)=> {
    let clients = await client.find({role:role});
    return res.status(200).json({
        ...clients,
        message:"Hurray ! You ar now logged in .",
        success:false
      })
  };
  const updateclient = async (req,res)=> {
      const idclients=req.params.clientid;
      console.log();
    let clients = await client.find({_id:idclients});
    return res.status(200).json({
        ...clients,
        message:"Hurray ! You ar now logged in .",
        success:false
      })
  };




  module.exports = {
    Getallclients,
    updateclient,
    
   };