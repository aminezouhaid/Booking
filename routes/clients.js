const router = require("express").Router();






const {
    Getallclients,
  } = require("../controllers/Clientcontrollers");



  router.get('/getclient', async(req,res)=>{
    await Getallclients(req,res,"user");
});



















module.exports = router;
